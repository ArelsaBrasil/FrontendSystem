import styled from "styled-components";

export const ContainerLoginInterface = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.white};
  display: flex;
`;

export const Wallpaper = styled.div`
  width: 60vw;
  height: 100vh;
  overflow: hidden;
  object-fit: cover;
`;

export const LoginContainer = styled.div`
  width: 40vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginCard = styled.div`
  width: 430px;
  height: 450px;
  /* background: ${(props) => props.theme["gray-100"]}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 200px;

  img {
    width: 330px;
  }
  div {
    width: 100%;
  }
  p {
    font-weight: 700;
    font-size: 28px;
    padding: 15px 0;
    margin-top: 60px;
    margin-bottom: 20px 0;
  }
  label {
    width: 20px;
    height: 40px;

    font-size: 16px;
    color: ${(props) => props.theme["gray-900"]};
  }
`;

export const InputFormLogin = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme["gray-900"]};
  border: 1px solid;
  border-color: ${(props) => props.theme["gray-400"]};
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px ;
  font-size: 18px;
  

  &:focus {
    border: 2px solid;
    border-color: ${(props) => props.theme["gray-100"]};
    outline-style:solid;
    outline-width: max(2px);
    outline-color:  ${(props) => props.theme["green-300"]};
    
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
  border: none;
  margin-top: 40px;
  font-size: 20px;
  transition: .25s ease-in-out;

  cursor: pointer;

  &:hover,
  &:focus {
    background: ${(props) => props.theme["green-300"]};
    transform: scale(1.015);
  }
  &:active {
    background: ${(props) => props.theme["green-700"]};
  }
`;
