import { sendEmailProtocol } from "../../services/formAttendance";
import { SendEmailButton } from "./styles";

export const SendEmail = ({ serviceForm }: any) => {
  const { customerEmail, attendanceProtocol, requestDescription } = serviceForm;

  async function handleSendEmail() {
    await sendEmailProtocol(
      customerEmail,
      attendanceProtocol,
      requestDescription
    );
  }

  return (
    <div>
      <SendEmailButton onClick={handleSendEmail} disabled={customerEmail == ""}>
        enviar por e-mail
      </SendEmailButton>
    </div>
  );
};
