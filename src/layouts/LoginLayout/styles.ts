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
    display: flex;
    background: ${(props) => props.theme.white};
  }

`;

export const LogoBranco = styled.img`
  @media (max-width: 767px) {
    width: 80%;
  }
`;
export const LogoAzulimg = styled.img`
  display: none;
  @media (min-width: 769px) {
    display: block;
  }
`;

export const Wallpaper = styled.div`
  @media (min-width: 769px) {
    width: 60%;
    height: 100vh;

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
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
  }

  @media (min-width: 769px) {
    width: 40vw;
    height: 100vh;
    display: flex;
    flex: 1, 20px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    span {
      height: 100px;
      font-size: 0.75rem;
      color: ${(props) => props.theme["gray-900"]};
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
    /* height: 100%; */
  }

  @media (min-width: 769px) {
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
    p {
      font-weight: 700;
      font-size: 1.75rem;
      padding: 15px 0;
      margin-top: 60px;
      margin-bottom: 30px;
      color: ${(props) => props.theme["gray-600"]};
    }
  }
`;

export const FormLogin = styled.form`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
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
  @media (min-width: 769px) {
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
  margin-top: 30px;
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
