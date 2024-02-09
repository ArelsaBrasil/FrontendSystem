import luzesLogoTeste from "../../assets/images/luzesDeAcailandiaLogo.png";
import linhaPreta from "../../assets/images/linhaPreta.png";
import qr from "../../assets/images/qr.png";
import jsPDF from "jspdf";

interface serviceFormI {
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

export const handlePrint = (serviceForm: serviceFormI) => {
  const date = new Date(Date.now());
  const dataFormated = date.toLocaleDateString("pt-BR");
  const hourFormated = date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const doc = new jsPDF();

  doc.addImage({
    imageData: luzesLogoTeste,
    format: "PNG",
    x: 15,
    y: 15,
    width: 52,
    height: 20,
  });

  doc.addImage({
    imageData: linhaPreta,
    format: "PNG",
    x: 0,
    y: 40,
    width: 220,
    height: 0.2,
  });

  doc.setFontSize(14);
  doc.text(`Protocolo: ${serviceForm.attendanceProtocol}`, 130, 27);

  doc.text(`Atendimento cadastrado com sucesso!`, 70, 52);

  doc.setFontSize(10);
  doc.text(
    `
    O atendimento solicitado por ${serviceForm.customerName}
    em ${dataFormated} às ${hourFormated}, foi cadastrado em nosso sistema
    pelo atendente ${serviceForm.attendant} .

    A Luzes de Açailandia agradece seu contato.

    Você pode acompanhar as atualizações deste atendimento
    através do nosso portal, acessando o link:

    www.luzesdeacailandia.com.br/consulta-atendimento/${serviceForm.attendanceProtocol}

    Tembém é possivel ler o QR code ao lado:
    `,
    65,
    58
  );

  doc.addImage({
    imageData: qr,
    format: "PNG",
    x: 35,
    y: 60,
    width: 30,
    height: 30,
  });

  doc.autoPrint();
  doc.output("dataurlnewwindow");
};
