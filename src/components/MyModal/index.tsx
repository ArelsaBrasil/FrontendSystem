import { StyledModal } from "./styles";
import { Document, Page } from "react-pdf";

interface Props {
  isOpen: boolean;
  onCloseModal: () => void;
  selectedFile: File | null;
}

export const MyModal = ({ isOpen, onCloseModal, selectedFile }: Props) => {
  return (
    <StyledModal isOpen={isOpen} onRequestClose={onCloseModal}>
      {selectedFile && (
        <Document file={selectedFile}>
        <Page pageNumber={1} />
      </Document>
      )}
      <button onClick={onCloseModal}>Fechar modal</button>
    </StyledModal>
  );
};