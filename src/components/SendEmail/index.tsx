import { useContext, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { FormDataContext } from "../../context/FormDataContext";
import { sendEmailProtocol } from "../../services/formAttendance";
import { SendEmailButton, SendEmailButtonBlock } from "./styles";

export const SendEmail = ({ serviceForm }: any) => {
  const { attendanceFormOfContext } = useContext(FormDataContext);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [haveError, setHaveError] = useState(false);

  async function handleSendEmail() {
    console.log("clicado");
    setIsSending(true);

    const sendEmailProtocolReturn = await sendEmailProtocol(serviceForm);
    console.log(sendEmailProtocolReturn);

    const isErrored = sendEmailProtocolReturn.toLowerCase().includes("erro");

    setTimeout(() => {
      setIsSending(false);

      if (isErrored) {
        setHaveError(true);
      } else {
        setIsSent(true);
      }
    }, 2000);
  }
  return (
    <div>
      <CSSTransition in={!isSending && !isSent} timeout={100} classNames="fade">
        {serviceForm.customerEmail === "" ? (
          <SendEmailButtonBlock>enviar por e-mail</SendEmailButtonBlock>
        ) : (
          <SendEmailButton
            onClick={handleSendEmail}
            disabled={serviceForm.customerEmail === "" ||
            isSending ||
            isSent ||
            haveError }
            isSending={isSending}
            isSent={isSent}
            haveError={haveError}
          >
            {isSending
              ? "enviando..."
              : isSent
              ? "e-mail enviado ✓"
              : haveError
              ? "erro no envio"
              : "enviar por e-mail"}
          </SendEmailButton>
        )}
      </CSSTransition>
    </div>
  );
};
