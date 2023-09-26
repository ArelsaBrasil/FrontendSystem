import { ContainerSubmitButtons, SubmitButton, SubmitButtonFinishAndSend } from "./styles";

interface ServiceButtonsProps {
  valuesAreNotEmpty: boolean;
  selectedServiceReasons: string;
  attendanceForm: any;
  handleFinishAttendance: (e: any) => void;
  handleForwardAttendance: (e: any) => void;
  handleServiceOrderGenerate: () => void;
  emailValidation: boolean;
  telValidation: boolean;
}

export function ServiceButtons({
  valuesAreNotEmpty,
  selectedServiceReasons,
  attendanceForm,
  handleFinishAttendance,
  handleForwardAttendance,
  handleServiceOrderGenerate,
  emailValidation,
  telValidation,
}: ServiceButtonsProps) {
  return (
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
        onClick={handleFinishAttendance}
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
        onClick={handleForwardAttendance}
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
  );
}
