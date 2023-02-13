import styled from "styled-components";

export const ContainerLoginInterface = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.white};
  display: flex;
`;

export const Wallpaper = styled.div`
  width: 60%;
  height: 100vh;

  img {
    width: 100%;
    height: 100%;
    background-size: cover;
    object-fit: cover;
    overflow: hidden;
  }
`;

export const LoginContainer = styled.div`
  width: 40vw;
  height: 100vh;
  display: flex;
  flex: 1, 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 0.75rem;
  }
`;

export const LoginCard = styled.div`
  width: 70%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 150px;

  img {
    width: 90%;
  }
  div {
    width: 100%;
  }
  p {
    font-weight: 700;
    font-size: 1.75rem;
    padding: 15px 0;
    margin-top: 60px;
    margin-bottom: 30px;
    color: ${(props) => props.theme["gray-600"]};
  }
  span {
    font-size: 0.75rem;
    align-items: flex-end;
  }
  a {
    text-decoration: none;
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
  margin-bottom: 20px;
  font-size: 18px;

  &:focus {
    border: 2px solid;
    border-color: ${(props) => props.theme["gray-100"]};
    outline-style: solid;
    outline-width: max(2px);
    outline-color: ${(props) => props.theme["green-300"]};
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
  margin-bottom: 20px;
  font-size: 20px;
  transition: 0.25s ease-in-out;

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
