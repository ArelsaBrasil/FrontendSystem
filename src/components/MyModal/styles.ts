import styled from "styled-components";
import Modal from "react-modal";

export const StyledModal = styled(Modal)`
  max-width:80% ;
  max-height:80% ;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 20px;
`;
