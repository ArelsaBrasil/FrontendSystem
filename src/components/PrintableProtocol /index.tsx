import qr from "../../assets/images/qr.png";
import { handlePrint } from "../PdfDocument/index";
import { SendEmail } from "../SendEmail";
import {
  ContainerButtonsEndOfService,
  ImgQrCode,
  InfosContainer,
  SubmitButton,
  SubmitButtonFinishAndSend,
  SucessContainer,
  SucessSection,
  TextContainer,
  Title,
} from "./styles";

import { IInitialState } from "../../layouts/luzes/CustomerAttendance/index";

interface IPrintableProtocolProps {
  serviceForm: IInitialState;
}

export const PrintableProtocol: React.FC<IPrintableProtocolProps> = ({
  serviceForm,
}) => {
  const date = new Date(Date.now());
  const dataFormated = date.toLocaleDateString("pt-BR");
  const hourFormated = date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <SucessSection>
      <SucessContainer>
        <Title> Atendimento cadastrado com sucesso! </Title>
        <h2>Protocolo: {serviceForm.attendanceProtocol}</h2>
        <InfosContainer>
          <ImgQrCode src={qr} />
          <TextContainer>
            <p>
              O atendimento solicitado por <b> {serviceForm.customerName}</b> em{" "}
              <b>{dataFormated}</b>, foi cadastrado em nosso sistema pelo
              atendente <b> {serviceForm.attendant}</b> às{" "}
              <b>{hourFormated}.</b>
            </p>
            <p>A Luzes de Açailandia agradesce seu contato.</p>
            <p>
              Você pode acompanhar as atualizações desse atendimento através do
              nosso portal, acessando o link a seguir:
            </p>
            <a href="http://luzesdeacailandia.com.br/" target="_blank">
              www.luzesdeacailandia.com.br/consulta-atendimento/
              {serviceForm.attendanceProtocol}
            </a>
            <p>Tembém é possivel ler o QR code ao lado:</p>
          </TextContainer>
        </InfosContainer>

        <ContainerButtonsEndOfService>
          <SubmitButtonFinishAndSend
            disabled={serviceForm.customerPhoneNumber == ""}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            enviar por whatsapp
          </SubmitButtonFinishAndSend>
          <SendEmail serviceForm={serviceForm} />

          <SubmitButton onClick={() => handlePrint(serviceForm)}>
            imprimir
          </SubmitButton>
        </ContainerButtonsEndOfService>
      </SucessContainer>
    </SucessSection>
  );
};
