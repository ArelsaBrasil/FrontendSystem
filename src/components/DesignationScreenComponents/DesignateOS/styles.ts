import styled from "styled-components";
interface PointDescriptionProps {
  index: number;
}

export const ServiceSection = styled.div`
  padding-top: 165px;
  width: 100%;
  height: 100%;

  display: flex;
`;

export const ServiceContainer = styled.div`
  width: 80%;
`;

export const MapsContainer = styled.div`
  width: 55%;
  height: calc(100vh - 165px);
`;

export const ContentContainer = styled.div`
  width: 41%;

  flex-grow: 1;
  padding-left: 38px;
  max-height: calc(100vh - 165px);
  overflow-y: auto;
`;
export const ContentSection = styled.section`
  width: 80%;
`;
export const MapDummmy = styled.div`
  width: 100%;
  height: 810px;
  background-color: gray;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #5f6377;
  font-weight: normal;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const PointDescription = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme["gray-lists"]};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 5px;
  margin-bottom: 5px;
  cursor: pointer;

  p:nth-child(2) {
    font-weight: bold;
  }
  &:hover {
    background-color: ${(props) => props.theme["gray-lists-hover"]};
    cursor: unset;
  }
  & div:nth-child(1) {
    display: flex;
    align-items: center;
  }
`;

export const PointContainer = styled.div`
  width: 100%;
  &:hover {
    cursor: pointer;
    p {
      color: ${(props) => props.theme["blue-focus"]};
    }
    p:nth-child(2) {
      text-decoration: underline;
      text-decoration-color: ${(props) => props.theme["blue-focus"]};
    }
  }
`;
export const ContainerInfos = styled.div`
  width: 100%;

  & section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > div:first-child {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const IdentifierNumber = styled.div`
  font-size: 22px;
  color: ${(props) => props.theme["blue-brand"]};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
`;
export const RedIdentifierNumber = styled(IdentifierNumber)`
  color: red;
`;

const CommonParagraph = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme["gray-600"]};
`;
export const InfosOfPoint = styled(CommonParagraph)`
  /* Adicione estilos específicos para InfosOfPoint aqui */
`;

export const LastChangeDate = styled(CommonParagraph)`
  color: red;
  /* Adicione estilos específicos para LastChangeDate aqui */
`;

export const Address = styled(CommonParagraph)`
  font-size: 16px;
  padding: 2px 0;
`;
export const WarningSection = styled.section`
  font-size: 16px;
  border-radius: 5px;
  color: white;
  padding: 20px;
  margin-top: 20px;
  background-color: red;
`;

export const ButtonDeleteItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 20px;
  background-color: ${(props) => props.theme["gray-500"]};
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: ${(props) => props.theme["blue-focus"]};
  }
  &:active {
    background-color: ${(props) => props.theme["blue-active"]};
  }
`;
export const ContainerSubmitButtons = styled.div`
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

export const SucessSection = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SucessContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
