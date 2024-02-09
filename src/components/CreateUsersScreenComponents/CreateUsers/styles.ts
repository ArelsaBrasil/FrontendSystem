import styled from "styled-components";

export const CreateUsersContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  & > form {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const CreatedSuccessfullyCard = styled.div<{ visible: boolean }>`
  width: 60%;
  height: 100%;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["green-300"]};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;
  & > p {
    color: white;
    font-size: 18px;
  }
`;

export const CreatedunsuccessfullyCard = styled.div<{visible: boolean}>`
  width: 60%;
  height: 100%;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["red-500"]};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;
  & > p {
    color: white;
    font-size: 18px;
  }
`;
