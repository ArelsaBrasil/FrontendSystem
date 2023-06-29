import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { FileArrowUp, X } from "phosphor-react";
import React, { useContext, useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { useNavigate } from "react-router-dom";

import { Input } from "@mui/material";
import { IMaskInput } from "react-imask";
import clips from "../../../assets/images/clips.png";
import { MyModal } from "../../../components/MyModal";
import { AuthContext } from "../../../context/AuthContext";
import { FormDataContext } from "../../../context/FormDataContext";

import {
  AtendimentoContainer,
  AtendimentoSection,
  ButtonDeleteItem,
  ContainerLines,
  ContainerSubmitButtons,
  FileList,
  ServiceForm,
  StyledDropzone,
  SubmitButton,
  SubmitButtonFinishAndSend,
  Title,
} from "./styles";

import {
  finishAttendance,
  forwardAttendance,
  updateAttendanceProtocol,
} from "../../../services/formAttendance";

import { nanoid } from "nanoid";
import { generateProtocolNumber } from "../../../components/GenerateProtocolNumber/GenerateProtocolNumber";
import { PrintableProtocol } from "../../../components/PrintableProtocol ";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask={"(00) 000000000"}
        placeholder="(00) 000000000"
        definitions={{
          "#": /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        autoComplete="off"
        overwrite
      />
    );
  }
);

export function CustomerAttendance() {
  const navigate = useNavigate();
  const { recoverUserInformation } = useContext(AuthContext);
  const [attachedFiles, setAttachedFiles] = useState<any>([]);

  async function returnValidation() {
    await recoverUserInformation();
    if (!recoverUserInformation) {
      return navigate("/luzes");
    }
  }

  useEffect(() => {
    returnValidation();
  }, []);

  const { user } = JSON.parse(localStorage.getItem("current_user") || "{}");

  const initialState = {
    userCreator: user.id,
    attendant: user.name,
    attendanceProtocol: nanoid(),
    meansOfAttendance: "",
    reason: "",
    customerName: "",
    customerEmail: "",
    customerPhoneNumber: "",
    customerPosition: "",
    poleId: "",
    requestDescription: "",
  };

  const [attendanceForm, setAttendanceForm] = useState(initialState);

  const regexEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  const emailValidation =
    regexEmail.test(attendanceForm.customerEmail) ||
    attendanceForm.customerEmail === "";

  const regexTel = /^\(\d{2}\)\s\d{8,9}$/;

  const telValidation =
    regexTel.test(attendanceForm.customerPhoneNumber) ||
    attendanceForm.customerPhoneNumber === "";

  const handleSelectedServiceOptions = (event: SelectChangeEvent) => {
    setSelectedServiceOptions(event.target.value);
    setAttendanceForm({
      ...attendanceForm,
      meansOfAttendance: event.target.value,
    });
  };
  const handleSelectedServiceReasons = (event: SelectChangeEvent) => {
    setSelectedServiceReasons(event.target.value);
    setAttendanceForm({
      ...attendanceForm,
      reason: event.target.value,
    });
  };

  const [selectedServiceOptions, setSelectedServiceOptions] = useState("");

  const [selectedServiceReasons, setSelectedServiceReasons] = useState("");

  const [valuesAreNotEmpty, setValuesAreNotEmpty] = useState(false);

  function handleRemoveFile(index: number) {
    setAttachedFiles(
      attachedFiles.filter((teste: any, i: number) => {
        return i !== index;
      })
    );
  }

  useEffect(() => {
    const validateNameAndTel = () => {
      setValuesAreNotEmpty(attendanceForm.customerName.length >= 3);
    };

    validateNameAndTel();
  }, [attendanceForm.customerName, selectedServiceReasons]);

  useEffect(() => {
    if (selectedServiceReasons === "Duvidas referente a energia") {
      setAttendanceForm({
        ...attendanceForm,
        requestDescription:
          "Cliente foi orientado a contactar a Equatorial Energia para solucionar suas dúvidas referentes ao fornecimento e distribuição de energia elétrica.",
      });
    } else if (selectedServiceReasons === "Duvidas em relação à COSIP") {
      setAttendanceForm({
        ...attendanceForm,
        requestDescription:
          "Cliente foi orientado a contactar a Secretaria de Tributos para sanar suas duvidas referente a COSIP.",
      });
    } else {
      setAttendanceForm({
        ...attendanceForm,
        requestDescription: "",
      });
    }
  }, [selectedServiceReasons]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [telephoneNumberFormated, setTelephoneNumberFormated] =
    React.useState<string>("");

  const phoneHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelephoneNumberFormated(event.target.value);
    setAttendanceForm({
      ...attendanceForm,
      customerPhoneNumber: event.target.value,
    });
  };

  const [attendanceCreatedAndFinished, setAttendanceCreatedAndFinished] =
    useState<boolean>(false);

  async function handleFinishAttendance(e: any) {
    e.preventDefault();
    await finishAttendance(attendanceForm);
    const newProtocolNumber = await generateProtocolNumber(
      attendanceForm.attendanceProtocol
    );

    await updateAttendanceProtocol(
      attendanceForm.attendanceProtocol,
      newProtocolNumber
    );
    setAttendanceForm({
      ...attendanceForm,
      attendanceProtocol: newProtocolNumber,
    });

    setAttendanceCreatedAndFinished(true);
  }

  async function handleForwardAttendance(e: any) {
    e.preventDefault();
    await forwardAttendance(attendanceForm);
    const newProtocolNumber = await generateProtocolNumber(
      attendanceForm.attendanceProtocol
    );

    await updateAttendanceProtocol(
      attendanceForm.attendanceProtocol,
      newProtocolNumber
    );
    setAttendanceForm({
      ...attendanceForm,
      attendanceProtocol: newProtocolNumber,
    });

    setAttendanceCreatedAndFinished(true);
  }

  function handleServiceOrderGenerate() {
    navigate("/luzes/home/geracaoos");
  }

  return !attendanceCreatedAndFinished ? (
    <AtendimentoSection>
      <AtendimentoContainer>
        <Title> Registro de Atendimentos </Title>
        <ServiceForm>
          <ContainerLines>
            <section>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Canal
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={selectedServiceOptions}
                  onChange={handleSelectedServiceOptions}
                  label="Age"
                >
                  <MenuItem value={"Telefone"}>Telefone</MenuItem>
                  <MenuItem value={"Whatsapp"}>Whatsapp</MenuItem>
                  <MenuItem value={"Presencial"}>Presencial</MenuItem>
                  <MenuItem value={"Email"}>Email</MenuItem>
                  <MenuItem value={"Ofício"}>Ofício</MenuItem>
                  <MenuItem value={"Interno"}>Interno</MenuItem>
                </Select>
              </FormControl>
            </section>
            <section>
              <FormControl
                variant="standard"
                sx={{ width: "100%" }}
                disabled={selectedServiceOptions === ""}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Motivo
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={selectedServiceReasons}
                  onChange={handleSelectedServiceReasons}
                  label="Age"
                >
                  <MenuItem value={"Manutenção"}>Manutenção</MenuItem>
                  <MenuItem value={"Solicitação de novos pontos"}>
                    Solicitação de novos pontos
                  </MenuItem>
                  <MenuItem value={"Duvidas em relação à COSIP"}>
                    Duvidas em relação à COSIP
                  </MenuItem>
                  <MenuItem value={"Duvidas referente a energia"}>
                    Duvidas referente a energia
                  </MenuItem>
                  <MenuItem value={"Outros"}>Outros</MenuItem>
                </Select>
              </FormControl>
            </section>
          </ContainerLines>

          <ContainerLines isDisabled={selectedServiceReasons === ""}>
            <section>
              <TextField
                sx={{ width: "100%" }}
                id="standard-basic"
                label="Nome"
                variant="standard"
                autoComplete="off"
                type="text"
                disabled={selectedServiceReasons === ""}
                onChange={(e) => {
                  const input = e.target.value;
                  const regex = /^[A-Za-z\s]*$/;

                  if (regex.test(input)) {
                    setAttendanceForm({
                      ...attendanceForm,
                      customerName: input,
                    });
                  }
                }}
                value={attendanceForm.customerName}
                required
              />
            </section>
            <section>
              <TextField
                sx={{ width: "100%" }}
                id="standard-basic"
                label="E-mail"
                variant="standard"
                autoComplete="off"
                type="text"
                disabled={selectedServiceReasons === ""}
                onChange={(e) =>
                  setAttendanceForm({
                    ...attendanceForm,
                    customerEmail: e.target.value,
                  })
                }
                value={attendanceForm.customerEmail}
              />
            </section>
            <section>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel htmlFor="formatted-text-mask-input">
                  Telefone
                </InputLabel>
                <Input
                  disabled={selectedServiceReasons === ""}
                  value={telephoneNumberFormated}
                  onChange={phoneHandleChange}
                  name="formatNumber"
                  id="formatted-text-mask-input"
                  inputComponent={TextMaskCustom as any}
                  autoComplete="off"
                />
              </FormControl>
            </section>
          </ContainerLines>
          <ContainerLines isDisabled={selectedServiceReasons === ""}>
            <section>
              <TextField
                sx={{ width: "100%" }}
                id="standard-basic"
                label="Cargo"
                variant="standard"
                autoComplete="off"
                type="text"
                disabled={selectedServiceReasons === ""}
                onChange={(e) =>
                  setAttendanceForm({
                    ...attendanceForm,
                    customerPosition: e.target.value,
                  })
                }
                value={attendanceForm.customerPosition}
              />
              <br />
              {selectedServiceReasons === "Manutenção" && (
                <ContainerLines>
                  <section>
                    <TextField
                      sx={{ mt: 4, width: "100%" }}
                      id="standard-basic"
                      label="Identificação dos postes"
                      variant="standard"
                      autoComplete="off"
                      type="text"
                      onChange={(e) =>
                        setAttendanceForm({
                          ...attendanceForm,
                          poleId: e.target.value,
                        })
                      }
                      value={attendanceForm.poleId}
                    />
                  </section>
                </ContainerLines>
              )}
              {(selectedServiceReasons === "Outros" ||
                selectedServiceReasons === "Solicitação de novos pontos") && (
                <ContainerLines>
                  <section>
                    <TextField
                      sx={{ mt: 4, width: "100%" }}
                      id="standard-multiline-flexible"
                      label="Descrição da Solicitação. "
                      multiline
                      maxRows={3}
                      variant="standard"
                      onChange={(e) =>
                        setAttendanceForm({
                          ...attendanceForm,
                          requestDescription: e.target.value,
                        })
                      }
                      value={attendanceForm.requestDescription}
                    />
                  </section>
                </ContainerLines>
              )}

              {selectedServiceReasons === "Duvidas referente a energia" && (
                <ContainerLines>
                  <section>
                    <TextField
                      sx={{ mt: 4, width: "100%" }}
                      id="standard-multiline-flexible"
                      label="Descrição da Solicitação. "
                      multiline
                      maxRows={4}
                      defaultValue="Default Value"
                      variant="standard"
                      onChange={(e) =>
                        setAttendanceForm({
                          ...attendanceForm,
                          requestDescription: e.target.value,
                        })
                      }
                      value={attendanceForm.requestDescription}
                    />
                  </section>
                </ContainerLines>
              )}

              {selectedServiceReasons === "Duvidas em relação à COSIP" && (
                <ContainerLines>
                  <section>
                    <TextField
                      sx={{ mt: 4, width: "100%" }}
                      id="standard-multiline-flexible"
                      label="Descrição da Solicitação. "
                      multiline
                      maxRows={4}
                      defaultValue="Default Value"
                      variant="standard"
                      onChange={(e) =>
                        setAttendanceForm({
                          ...attendanceForm,
                          requestDescription: e.target.value,
                        })
                      }
                      value={attendanceForm.requestDescription}
                    />
                  </section>
                </ContainerLines>
              )}
            </section>
            <section>
              <Dropzone
                disabled={selectedServiceReasons === ""}
                onDrop={(acceptedFiles) => {
                  const pdfFiles = acceptedFiles.filter(
                    (file) => file.type === "application/pdf"
                  );
                  setAttachedFiles([...attachedFiles, ...pdfFiles]);
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <StyledDropzone
                      isDisabled={selectedServiceReasons === ""}
                      {...getRootProps()}
                    >
                      <input {...getInputProps()} />
                      <img src={clips} alt="" />
                      <p>
                        <b>Anexar arquivos</b>
                      </p>
                      <p>
                        Arraste e solte os arquivos aqui, ou click para
                        selecionar os arquivos.
                      </p>
                    </StyledDropzone>
                    <FileList>
                      {attachedFiles.map((file: any, index: number) => (
                        <section key={index}>
                          <FileArrowUp size={24} />
                          <button
                            type="button"
                            onClick={() => {
                              setIsModalOpen(true);
                              setSelectedFile(file);
                            }}
                          >
                            {file.name}
                          </button>

                          <ButtonDeleteItem
                            type="button"
                            onClick={() => handleRemoveFile(index)}
                          >
                            <X size={12} weight="bold" color="#fff" />
                          </ButtonDeleteItem>
                        </section>
                      ))}
                    </FileList>
                  </section>
                )}
              </Dropzone>
            </section>
          </ContainerLines>
          <MyModal
            isOpen={isModalOpen}
            onCloseModal={() => {
              setIsModalOpen(false);
            }}
            selectedFile={selectedFile}
          />

          <ContainerSubmitButtons>
            <SubmitButtonFinishAndSend
              disabled={
                !valuesAreNotEmpty ||
                !(
                  selectedServiceReasons === "Duvidas referente a energia" ||
                  selectedServiceReasons === "Duvidas em relação à COSIP"
                ) ||
                !emailValidation ||
                !telValidation
              }
              onClick={(e) => {
                handleFinishAttendance(e);
              }}
            >
              finalizar
            </SubmitButtonFinishAndSend>
            <SubmitButtonFinishAndSend
              disabled={
                !valuesAreNotEmpty ||
                !(
                  selectedServiceReasons === "Manutenção" ||
                  selectedServiceReasons === "Solicitação de novos pontos" ||
                  selectedServiceReasons === "Outros"
                ) ||
                !emailValidation ||
                !telValidation
              }
              onClick={(e) => {
                handleForwardAttendance(e);
              }}
            >
              encaminhar
            </SubmitButtonFinishAndSend>
            <SubmitButton
              disabled={
                !valuesAreNotEmpty ||
                !(selectedServiceReasons === "Manutenção") ||
                !emailValidation ||
                !telValidation
              }
              onClick={handleServiceOrderGenerate}
            >
              gerar OS
            </SubmitButton>
          </ContainerSubmitButtons>
        </ServiceForm>
      </AtendimentoContainer>
    </AtendimentoSection>
  ) : (
    <PrintableProtocol serviceForm={attendanceForm} />
  );
}
