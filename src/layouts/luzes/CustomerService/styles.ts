import styled from "styled-components";

export const AtendimentoSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const AtendimentoContainer = styled.div`
  width: 80%;
`;
export const Title = styled.h1`
  margin-left: 20px;
  font-size: 32px;
  color: #5f6377;
  font-weight: normal;
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const ServiceForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;
export const ContainerLines = styled.div<{ isDisabled?: boolean }>`
  width: 100%;
  gap: 40px;
  display: flex;
  margin-bottom: 20px;
  p {
    padding-left: 11px;
    font-size: 16px;
  }
  section {
    width: 100%;
  }
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.isDisabled ? "40%" : "100%")};
`;

export const InputFormDescription = styled.textarea`
  width: 100%;
  height: 80px;
  border-radius: 4px;
  display: flex;
  resize: none;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme["gray-900"]};
  border-color: ${(props) => props.theme["gray-300"]};
  padding: 10px;
  font-size: 20px;

  &:focus {
    outline: 2px solid gray;
    outline-color: gray;
  }
  &:disabled {
    background-color: ${(props) => props.theme["gray-bg-button-disabled"]};
    cursor: not-allowed;
  }
`;

export const StyledDropzone = styled.div<{ isDisabled?: boolean }>`
  width: 100%;
  height: 120px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme["gray-900"]};
  border: 2px dashed;
  border-color: ${(props) => props.theme["gray-300"]};
  padding: 10px;
  margin-top: 25px;
  font-size: 14px;
  color: ${(props) => props.theme["gray-900"]};

  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};

  opacity: 70%;

  img {
    width: 20px;
    margin: 10px 0;
  }

  &:focus {
    border: 1px solid;
    border-color: ${(props) => props.theme["gray-100"]};
    outline-style: solid;
    outline-width: 2px;
    outline-color: ${(props) => props.theme["blue-focus"]};
  }
`;

export const ContainerSubmitButtons = styled.div`
  height: 100px;
  width: 100%;
  gap: 15px;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const SubmitButton = styled.button`
  height: 55px;
  padding: 20px 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
  border: 2px solid transparent;
  transition: 0.25s ease-in-out;
  object-fit: cover;
  font-weight: 600;
  font-size: 22px;

  cursor: pointer;

  &:disabled {
    opacity: 60%;
    cursor: not-allowed;
    background: ${(props) => props.theme["gray-bg-button-disabled"]};
    border: 2px solid transparent;
  }
`;

export const SubmitButtonFinishAndSend = styled.button`
  height: 55px;
  padding: 10px 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme["white"]};
  color: ${(props) => props.theme["green-500"]};
  border: 2px solid;
  border-color: ${(props) => props.theme["green-500"]};
  font-size: 20px;
  transition: 0.25s ease-in-out;
  object-fit: cover;
  font-weight: 600;
  font-size: 22px;

  cursor: pointer;

  &:disabled {
    border: none;
    background: ${(props) => props.theme["gray-bg-button-disabled"]};
    color: ${(props) => props.theme["white"]};
    opacity: 60%;
    cursor: not-allowed;
    border: 2px solid transparent;
  }
`;

export const FileList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px;
    color: ${(props) => props.theme["gray-900"]};
    background-color: ${(props) => props.theme["gray-lists"]};
    border: 1px;
    border-color: ${(props) => props.theme["blue-focus"]};
    border-radius: 4px;
    margin: 4px;

    &:hover {
      background-color: ${(props) => props.theme["gray-lists-hover"]};
    }

    button:nth-child(2) {
      width: 100%;
      height: 100%;
      background: transparent;
      cursor: pointer;
    }
    button:nth-child(3) {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2px;
      border-radius: 20px;
      cursor: pointer;
      background-color: ${(props) => props.theme["blue-focus"]};

      &:hover {
        background-color: ${(props) => props.theme["blue-hover"]};
      }
      &:active {
        background-color: ${(props) => props.theme["blue-active"]};
      }
    }
  }
`;
