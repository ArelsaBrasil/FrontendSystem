import React, { useContext, useEffect, useState } from "react";
import { IMaskInput } from "react-imask";
import clips from "../../../assets/images/clips.png";
import { MyModal } from "../../../components/MyModal";
import { AuthContext } from "../../../context/AuthContext";
import { FormDataContext } from "../../../context/FormDataContext";
import {
  finishAttendance
} from "../../../services/formAttendance";

import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

import { FileArrowUp, X } from "phosphor-react";
import Dropzone from "react-dropzone";
import { useNavigate } from "react-router-dom";

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

import { PrintableProtocol } from "../../../components/PrintableProtocol ";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export interface IInitialState {
  userCreator: string;
  attendant?: string;
  attendanceProtocol: string;
  meansOfAttendance: string;
  reason: string;
  customerName: string;
  customerEmail: string;
  customerPhoneNumber: string;
  customerPosition: string;
  poleId: string;
  requestDescription: string;
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
  const [selectedServiceOptions, setSelectedServiceOptions] = useState("");
  const [selectedServiceReasons, setSelectedServiceReasons] = useState("");
  const [valuesAreNotEmpty, setValuesAreNotEmpty] = useState(false);
  const [telephoneNumberFormated, setTelephoneNumberFormated] =
    useState<string>("");

  const navigate = useNavigate();
  const { recoverUserInformation } = useContext(AuthContext);
  const { attendanceFormOfContext, setCurrentAttendanceForm } =
    useContext(FormDataContext);

  const [attachedFiles, setAttachedFiles] = useState<any>([]);

  const [attendanceForm, setAttendanceForm] = useState<IInitialState>(
    attendanceFormOfContext
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [attendanceCreatedAndFinished, setAttendanceCreatedAndFinished] =
    useState<boolean>(false);

  async function returnValidation() {
    await recoverUserInformation();
    if (!recoverUserInformation) {
      return navigate("/luzes");
    }
  }

  useEffect(() => {
    returnValidation();
  }, []);

  useEffect(() => {
    if (attendanceFormOfContext.attendanceProtocol != "") {
      setSelectedServiceOptions(attendanceFormOfContext.meansOfAttendance);
      setSelectedServiceReasons(attendanceFormOfContext.reason);
      setTelephoneNumberFormated(attendanceFormOfContext.customerPhoneNumber);
    }
  }, []);

  const regexEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  const emailValidation =
    regexEmail.test(attendanceForm.customerEmail) ||
    attendanceForm.customerEmail === "";

  const regexTel = /^\(\d{2}\)\s\d{8,9}$/;
  const telValidation =
    regexTel.test(attendanceForm.customerPhoneNumber) ||
    attendanceForm.customerPhoneNumber === "";

  const handleSelectedServiceOptions = (event: SelectChangeEvent<string>) => {
    setSelectedServiceOptions(event.target.value as string);
    setAttendanceForm({
      ...attendanceForm,
      meansOfAttendance: event.target.value as string,
    });
  };

  const handleSelectedServiceReasons = (event: SelectChangeEvent<string>) => {
    setSelectedServiceReasons(event.target.value as string);
    setAttendanceForm({
      ...attendanceForm,
      reason: event.target.value as string,
    });
  };

  function handleRemoveFile(index: number) {
    setAttachedFiles(attachedFiles.filter((i: number) => i !== index));
  }

  useEffect(() => {
    const validateNameAndTel = () => {
      setValuesAreNotEmpty(attendanceForm.customerName.length >= 3);
    };

    validateNameAndTel();
  }, [attendanceForm.customerName, selectedServiceReasons]);

  useEffect(() => {
    let requestDescription = "";
    if (selectedServiceReasons === "Duvidas referente a energia") {
      requestDescription =
        "Cliente foi orientado a contactar a Equatorial Energia para solucionar suas dúvidas referentes ao fornecimento e distribuição de energia elétrica.";
    } else if (selectedServiceReasons === "Duvidas em relação à COSIP") {
      requestDescription =
        "Cliente foi orientado a contactar a Secretaria de Tributos para sanar suas duvidas referente a COSIP.";
    }

    setAttendanceForm({
      ...attendanceForm,
      requestDescription,
    });
  }, [selectedServiceReasons]);

  const phoneHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelephoneNumberFormated(event.target.value);
    setAttendanceForm({
      ...attendanceForm,
      customerPhoneNumber: event.target.value,
    });
  };

  async function handleFinishAttendance(e: any) {
    e.preventDefault();
    const {attendant ,...attendanceFormToSend} = attendanceForm
    const { attendanceProtocol: newProtocolNumber } = await finishAttendance(
      attendanceFormToSend
      );
    setAttendanceForm({
      ...attendanceForm,
      attendanceProtocol: newProtocolNumber,
    });
    setAttendanceCreatedAndFinished(true);
  }

  async function handleForwardAttendance(e: any) {
    setAttendanceCreatedAndFinished(true);
  }

  function handleServiceOrderGenerate() {
    setCurrentAttendanceForm(attendanceForm);
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
                selectedServiceReasons === "Solicitação de novos pontos" ||
                selectedServiceReasons === "Duvidas referente a energia" ||
                selectedServiceReasons === "Duvidas em relação à COSIP") && (
                <ContainerLines>
                  <section>
                    <TextField
                      sx={{ mt: 4, width: "100%" }}
                      id="standard-multiline-flexible"
                      label="Descrição da Solicitação."
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
                        Arraste e solte os arquivos aqui, ou clique para
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
              Finalizar
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
              Encaminhar
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
              Gerar OS
            </SubmitButton>
          </ContainerSubmitButtons>
        </ServiceForm>
      </AtendimentoContainer>
    </AtendimentoSection>
  ) : (
    <PrintableProtocol serviceForm={attendanceForm} />
  );
}
