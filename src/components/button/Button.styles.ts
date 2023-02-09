import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'primary',
    secundary: 'secundary',
    danger: 'danger',
    sucess: 'sucess'
}
export const ButtonContainer = styled.button<ButtonContainerProps>`
 width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;
  background-color: ${props => props.theme["gray-800"]};
  color: ${props => props.theme.white};
 
`