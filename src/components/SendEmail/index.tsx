import { useState } from "react";
import { sendEmailProtocol } from "../../services/formAttendance";
import { CSSTransition } from "react-transition-group";
import { SendEmailButton } from "./styles";
import { Check } from "phosphor-react";

export const SendEmail = ({ serviceForm }: any) => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [haveError, setHaveError] = useState(false);

  async function handleSendEmail() {
    setIsSending(true);

    const sendEmailProtocolReturn = await sendEmailProtocol(serviceForm);
    
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
        <SendEmailButton
          onClick={handleSendEmail}
          disabled={serviceForm.customerEmail === "" || isSending || isSent || haveError}
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
      </CSSTransition>
    </div>
  );
};
