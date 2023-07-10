import styled from "styled-components";

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

export const SendEmailButton = styled.button`
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