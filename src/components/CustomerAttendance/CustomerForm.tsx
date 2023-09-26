import { SelectChangeEvent, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MyModal } from "../../components/MyModal";
import { AuthContext } from "../../context/AuthContext";
import { FormDataContext } from "../../context/FormDataContext";

import {
  finishAttendance,
  forwardAttendance,
} from "../../services/formAttendance";

import { nanoid } from "nanoid";
import { DropzoneSection } from "../CustomerAttendance/DropzoneSection";
import { ServiceButtons } from "../CustomerAttendance/ServiceButtons";
import {
  AtendimentoContainer,
  AtendimentoSection,
  ContainerLines,
  ServiceForm,
} from "../../layouts/luzes/CustomerAttendance/styles";
import { PrintableProtocol } from "../PrintableProtocol ";
import { Title } from "./styles";

interface IInitialState {
  userCreator: string;
  attendant: string;
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

export function CustomerForm() {
  const [selectedServiceOptions, setSelectedServiceOptions] = useState("");
  const [selectedServiceReasons, setSelectedServiceReasons] = useState("");
  const [valuesAreNotEmpty, setValuesAreNotEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [attachedFiles, setAttachedFiles] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [telephoneNumberFormated, setTelephoneNumberFormated] =
    useState<string>("");
  const [attendanceCreatedAndFinished, setAttendanceCreatedAndFinished] =
    useState<boolean>(false);

  const { recoverUserInformation } = useContext(AuthContext);
  const { attendanceFormOfContext, setCurrentAttendanceForm } =
    useContext(FormDataContext);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      await recoverUserInformation();
      if (!recoverUserInformation) {
        return navigate("/luzes");
      }
    }
    fetchData();
  }, []);

  const { user } = JSON.parse(localStorage.getItem("current_user") || "{}");

  const initialState: IInitialState = {
    userCreator:user.name,
    attendant: user.id,
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

  const [attendanceForm, setAttendanceForm] =
    useState<IInitialState>(initialState);

  useEffect(() => {
    setIsLoading(true);
    if (attendanceFormOfContext.attendanceProtocol !== "") {
      setAttendanceForm({
        ...attendanceForm,
        meansOfAttendance: attendanceFormOfContext.meansOfAttendance,
        reason: attendanceFormOfContext.reason,
      });
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const validateNameAndTel = () => {
      setValuesAreNotEmpty(attendanceForm.customerName.length >= 3);
    };
    validateNameAndTel();
  }, [attendanceForm.customerName, selectedServiceReasons]);

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

  const handleRemoveFile = (index: number) => {
    setAttachedFiles(
      attachedFiles.filter((teste: any, i: number) => {
        return i !== index;
      })
    );
  };

  const phoneHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelephoneNumberFormated(event.target.value);
    setAttendanceForm({
      ...attendanceForm,
      customerPhoneNumber: event.target.value,
    });
  };

  const handleFinishAttendance = async (e: any) => {
    e.preventDefault();
    await finishAttendance(attendanceForm);

    setAttendanceCreatedAndFinished(true);
  };

  const handleForwardAttendance = async (e: any) => {
    e.preventDefault();
    await forwardAttendance(attendanceForm);

    setAttendanceCreatedAndFinished(true);
  };

  const handleServiceOrderGenerate = () => {
    setCurrentAttendanceForm(attendanceForm);
    navigate("/luzes/home/geracaoos");
  };

  useEffect(() => {
    const handleSelectedServiceReasonsEffect = () => {
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
    };

    handleSelectedServiceReasonsEffect();
  }, [selectedServiceReasons]);

  return isLoading ? (
    <div>Loading...</div>
  ) : !attendanceCreatedAndFinished ? (
    <AtendimentoSection>
      <AtendimentoContainer>
        <Title> Registro de Atendimentos </Title>
        <ServiceForm>
          <ContainerLines>
            <section>
              <TextField
                label="Nome do Cliente"
                variant="outlined"
                fullWidth
                value={attendanceForm.customerName}
                onChange={(e) =>
                  setAttendanceForm({
                    ...attendanceForm,
                    customerName: e.target.value,
                  })
                }
              />
            </section>
            <section>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={attendanceForm.customerEmail}
                onChange={(e) =>
                  setAttendanceForm({
                    ...attendanceForm,
                    customerEmail: e.target.value,
                  })
                }
              />
            </section>
          </ContainerLines>

          <DropzoneSection
            disabled={selectedServiceReasons === ""}
            onDrop={(acceptedFiles) => {
              const pdfFiles = acceptedFiles.filter(
                (file) => file.type === "application/pdf"
              );
              setAttachedFiles([...attachedFiles, ...pdfFiles]);
            }}
            attachedFiles={attachedFiles}
            handleRemoveFile={handleRemoveFile}
            setIsModalOpen={setIsModalOpen}
            setSelectedFile={setSelectedFile}
          />

          <MyModal
            isOpen={isModalOpen}
            onCloseModal={() => {
              setIsModalOpen(false);
            }}
            selectedFile={selectedFile}
          />

          <ServiceButtons
            handleFinishAttendance={handleFinishAttendance}
            handleForwardAttendance={handleForwardAttendance}
            handleServiceOrderGenerate={handleServiceOrderGenerate}
            valuesAreNotEmpty={valuesAreNotEmpty}
            selectedServiceReasons={selectedServiceReasons}
            emailValidation={emailValidation}
            telValidation={telValidation}
          />
        </ServiceForm>
      </AtendimentoContainer>
    </AtendimentoSection>
  ) : (
    <PrintableProtocol serviceForm={attendanceForm} />
  );
}
