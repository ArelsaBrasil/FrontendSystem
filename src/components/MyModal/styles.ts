import Modal from "react-modal";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
  width: 70%;
  height: 80%; 
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -55%);
  box-shadow: 0 60px 60px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
`;

export const IconContainer = styled.div`
  height: 50px;
  align-items: center;
  background-color: ${(props) => props.theme["gray-100"]};
  border-bottom: "1px solid rgba(0, 0, 0, 0.1)";
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;

  section {
    display: flex;
    flex-direction: column;
  }
`;
export const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
  }
`;
