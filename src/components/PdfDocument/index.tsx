import luzesLogo from "../../assets/images/luzesDeAcailandiaLogo.png";
import linhaPreta from "../../assets/images/linhaPreta.png";
import qr from "../../assets/images/qr.jpg";
import jsPDF from "jspdf";

export const handlePrint = () => {
  const doc = new jsPDF();

  doc.addImage({
    imageData: luzesLogo,
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

  doc.setFontSize(16);
  doc.text(`Protocolo: 145641873413`, 130, 27);

  doc.text(`Atendimento cadastrado com sucesso!`, 71, 52);

  doc.setFontSize(10);
  doc.text(
    `
    O atendimento solicitado por Fulano da Silva Sauro
    em 13-02-2023 às 11:37, foi cadastrado em nosso sistema
    pelo atendente John Dutton .

    A Luzes de Açailandia agradece seu contato.
    
    Você pode acompanhar as atualizações deste atendimento
    através do nosso portal, acessando o link:
    
    www.luzesdeacailandia.com.br/consulta-atendimento/145641873413
    
    Tembém é possivel ler o QR code:
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
