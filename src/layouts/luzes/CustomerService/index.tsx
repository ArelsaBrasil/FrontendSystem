import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { FileArrowUp, X } from "phosphor-react";
import { FC, useContext, useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";

import clips from "../../../assets/images/clips.png";
import { AuthContext } from "../../../context/AuthContext";
import {
  AtendimentoContainer,
  AtendimentoSection,
  ContainerLines,
  ContainerSubmitButtons,
  FileList,
  ServiceForm,
  StyledDropzone,
  SubmitButton,
  SubmitButtonFinishAndSend,
  Title,
} from "./styles";
import { InputBaseComponentProps } from "@mui/material";
import { MyModal } from "../../../components/MyModal";
import Modal from "react-modal";

export function CustomerService() {
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

  const [serviceForm, setServiceForm] = useState({
    meansOfService: "",
    reason: "",
    requestDescription: "",
    poleId: "",
    customerName: "",
    customerEmail: "",
    customerPhoneNumber: "",
    position: "",
  });

  const handleSelectedServiceOptions = (event: SelectChangeEvent) => {
    setSelectedServiceOptions(event.target.value);
  };
  const handleSelectedServiceReasons = (event: SelectChangeEvent) => {
    setSelectedServiceReasons(event.target.value);
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
    console.log(index);
  }

  useEffect(() => {
    const validateNameAndTel = () => {
      setValuesAreNotEmpty(serviceForm.customerName.length >= 3);
    };

    validateNameAndTel();
  }, [serviceForm.customerName, selectedServiceReasons]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);


  return (
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
                onChange={(e) =>
                  setServiceForm({
                    ...serviceForm,
                    customerName: e.target.value,
                  })
                }
                value={serviceForm.customerName}
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
                  setServiceForm({
                    ...serviceForm,
                    customerEmail: e.target.value,
                  })
                }
                value={serviceForm.customerEmail}
              />
            </section>
            <section>
              <TextField
                sx={{ width: "100%" }}
                InputProps={{
                  inputComponent: InputMask,
                  inputProps: {
                    mask: "(99)99999-9999",
                  },
                }}
                placeholder="(__)_____-____"
                id="standard-basic"
                label="Tel"
                variant="standard"
                autoComplete="off"
                type="text"
                disabled={selectedServiceReasons === ""}
                onChange={(e) =>
                  setServiceForm({
                    ...serviceForm,
                    customerPhoneNumber: e.target.value,
                  })
                }
                value={serviceForm.customerPhoneNumber}
              />
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
                  setServiceForm({ ...serviceForm, position: e.target.value })
                }
                value={serviceForm.position}
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
                        setServiceForm({
                          ...serviceForm,
                          poleId: e.target.value,
                        })
                      }
                      value={serviceForm.poleId}
                    />
                  </section>
                </ContainerLines>
              )}
              {selectedServiceReasons === "Outros" && (
                <ContainerLines>
                  <section>
                    <TextField
                      sx={{ mt: 4, width: "100%" }}
                      id="standard-multiline-flexible"
                      label="Descrição da Solicitação. "
                      multiline
                      maxRows={4}
                      variant="standard"
                      onChange={(e) =>
                        setServiceForm({
                          ...serviceForm,
                          requestDescription: e.target.value,
                        })
                      }
                      value={serviceForm.requestDescription}
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
                        setServiceForm({
                          ...serviceForm,
                          requestDescription: e.target.value,
                        })
                      }
                      value={
                        serviceForm.requestDescription ||
                        "Cliente foi orientado a contactar a Equatorial Energia para solucionar suas dúvidas referentes ao fornecimento e distribuição de energia elétrica."
                      }
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
                        setServiceForm({
                          ...serviceForm,
                          requestDescription: e.target.value,
                        })
                      }
                      value={
                        serviceForm.requestDescription ||
                        "Cliente foi orientado a contactar a Secretaria de Tributos para sanar suas duvidas referente a COSIP."
                      }
                    />
                  </section>
                </ContainerLines>
              )}
            </section>
            <section>
              <Dropzone
                disabled={selectedServiceReasons === ""}
                onDrop={(acceptedFiles) => {
                  // console.log(acceptedFiles);
                  // console.log(attachedFiles);
                  setAttachedFiles([...attachedFiles, ...acceptedFiles]);
                  // console.log(attachedFiles);
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
                        {" "}
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
                              console.log(index);
                            }}
                          >
                            {file.name}
                          </button>

                          <button
                            type="button"
                            onClick={() => handleRemoveFile(index)}
                          >
                            <X size={18} color="#fff" />
                          </button>
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
            }
          }
            selectedFile={selectedFile}
          />


          <ContainerSubmitButtons>
            <SubmitButtonFinishAndSend
              type="submit"
              disabled={
                !valuesAreNotEmpty ||
                !(
                  selectedServiceReasons === "Duvidas referente a energia" ||
                  selectedServiceReasons === "Duvidas em relação à COSIP"
                )
              }
              onClick={(e) => {
                e.preventDefault();
                console.log(serviceForm);
              }}
            >
              finalizar
            </SubmitButtonFinishAndSend>
            <SubmitButtonFinishAndSend
              type="submit"
              disabled={
                !valuesAreNotEmpty ||
                !(
                  selectedServiceReasons === "Manutenção" ||
                  selectedServiceReasons === "Solicitação de novos pontos" ||
                  selectedServiceReasons === "Outros"
                )
              }
            >
              encaminhar
            </SubmitButtonFinishAndSend>
            <SubmitButton
              type="submit"
              disabled={
                !valuesAreNotEmpty || !(selectedServiceReasons === "Manutenção")
              }
            >
              gerar OS
            </SubmitButton>
          </ContainerSubmitButtons>
        </ServiceForm>
      </AtendimentoContainer>
    </AtendimentoSection>
  );
}
