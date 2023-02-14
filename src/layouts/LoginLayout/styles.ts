import styled from "styled-components";
import wallpaper from "../../assets/images/wallpaperLuzes.jpg";

export const ContainerLoginInterface = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: url(${wallpaper});
  background-position: center 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    background-image: none;
    span {
      display: none;
    }
  }
`;

export const LogoBranco = styled.img`
  width: 80%;

  @media (min-width: 426px) {
    width: 50%;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;
export const LogoAzul = styled.img`
  display: none;

  @media (min-width: 769px) {
    display: block;
    width: 60%;
  }
`;

export const Wallpaper = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: block;
    width: 60%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      background-size: cover;
      object-fit: cover;
      overflow: hidden;
    }
  }
`;

export const LoginContainer = styled.div`
  width: 100vw;
  height: 99vh;
  display: flex;
  flex: 1, 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    display: none;
  }

  @media (min-width: 769px) {
    width: 40vw;
    height: 100vh;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme["gray-900"]};
      display: block;
    }
  }
`;

export const LoginCard = styled.div`
  width: 90%;
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.white};

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  p {
    font-weight: 700;
    font-size: 1.75rem;
    margin: 15px;
    color: ${(props) => props.theme["gray-600"]};
  }

  a {
    text-decoration: none;
    width: 100%;
  }

  @media (min-width: 769px) {
    width: 100%;
    height: 450px;
    margin-top: 150px;

    p {
      padding: 15px 0;
      margin-top: 30px;
      color: ${(props) => props.theme["gray-600"]};
    }
  }

  @media (min-width: 1439px) {
    padding: 0 100px;
  }
`;

export const FormLogin = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  padding: 20px;
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
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
  border: none;
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
