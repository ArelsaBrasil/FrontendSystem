import styled from "styled-components";

export const ButtonSection = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  height: 100%;
`;

export const ButtonReturn = styled.button`
  margin: 20px 0;
  display: flex;
  align-items: flex-start;
  background-color: transparent;
  cursor: pointer;
`;
export const SucessSection = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SucessContainer = styled.div`
  padding-top: 100px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #5f6377;
  font-weight: normal;
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const InfosContainer = styled.div`
  display: flex;
  margin-top: 40px;
  width: 100%;
`;

export const ImgQrCode = styled.img`
  width: 180px;
  height: 180px;
  margin: 0 40px;
`;

export const TextContainer = styled.div`
  font-size: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`;
export const ContainerButtonsEndOfService = styled.div`
  width: 100%;

  gap: 15px;
  display: flex;
  justify-content: flex-end;
  margin: 50px 0;
`;

const ButtonStyle = `
  height: 55px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.25s ease-in-out;
  object-fit: cover;
  font-weight: 600;
  font-size: 22px;
  cursor: pointer;
`;

export const SubmitButtonFinishAndSend = styled.button`
  ${ButtonStyle}
  padding: 0 50px;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme["green-500"]};
  border: 2px solid ${(props) => props.theme["green-500"]};

  &:disabled {
    background: ${(props) => props.theme["gray-bg-button-disabled"]};
    color: ${(props) => props.theme.white};
    opacity: 60%;
    cursor: not-allowed;
    border: 2px solid transparent;
  }
`;
export const SubmitButton = styled.button`
  ${ButtonStyle}
  padding: 20px 50px;
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
  border: 2px solid transparent;

  &:disabled {
    opacity: 60%;
    cursor: not-allowed;
    background: ${(props) => props.theme["gray-bg-button-disabled"]};
    border: 2px solid transparent;
  }
`;
