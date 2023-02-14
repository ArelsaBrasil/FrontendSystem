import {
  ContainerLoginInterface,
  FormLogin,
  InputFormLogin,
  LoginCard,
  LoginContainer,
  LogoAzulimg,
  LogoBranco,
  SubmitButton,
  Wallpaper,
} from "./styles";
import wallpaper from "../../assets/images/wallpaperLuzes.jpg";
import logoAzul from "../../assets/images/luzesDeAcailandiaLogo.png";
import logoBranco from "../../assets/images/luzesDeAcailandiaLogoBranco.png";

import { NavLink } from "react-router-dom";

export function LoginLayout() {
  return (
    <>
      <ContainerLoginInterface>
        <Wallpaper>{/* <img src={wallpaper} alt="" /> */}</Wallpaper>
        <LoginContainer>
          <LogoBranco src={logoBranco} alt="" />
          <LoginCard>
            <LogoAzulimg src={logoAzul} alt="" />

            <div>
              <p>Login </p>
              <FormLogin>
                <InputFormLogin
                  type="text"
                  autoComplete="off"
                  id="username"
                  placeholder="Usuário:"
                  // required
                />

                <InputFormLogin
                  type="password"
                  autoComplete="off"
                  id="password"
                  placeholder="Senha:"
                  // required
                />
                <NavLink to="/admin">
                  <SubmitButton type="submit">Entrar</SubmitButton>
                </NavLink>
              </FormLogin>
            </div>
          </LoginCard>
        </LoginContainer>
          <span>© Systemlux-web - v1.0 - vegalux - 2023</span>
      </ContainerLoginInterface>
    </>
  );
}
