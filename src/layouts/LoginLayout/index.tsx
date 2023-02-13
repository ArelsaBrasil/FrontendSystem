import {
  ContainerLoginInterface,
  InputFormLogin,
  LoginCard,
  LoginContainer,
  SubmitButton,
  Wallpaper,
} from "./styles";
import wallpaper from "../../assets/images/wallpaperLuzes.jpg";
import logo from "../../assets/images/luzesDeAcailandiaLogo.png";

import { NavLink } from "react-router-dom";

export function LoginLayout() {
  return (
    <>
      <ContainerLoginInterface>
        <Wallpaper>
          <img src={wallpaper} alt="" />
        </Wallpaper>
        <LoginContainer>
          <LoginCard>
            <img src={logo} alt="" />

            <div>
              <p>Identificação de Usuário </p>
              <form action="">
                <div>
                  <InputFormLogin
                    type="text"
                    autoComplete="off"
                    id="username"
                    placeholder="Usuário:"
                    // required
                  />
                </div>

                <div>
                  <InputFormLogin
                    type="password"
                    autoComplete="off"
                    id="password"
                    placeholder="Senha:"
                    // required
                  />
                </div>
                <NavLink to="/admin">
                  <SubmitButton type="submit">Entrar</SubmitButton>
                </NavLink>
              </form>
            </div>
          </LoginCard>
          <span>© Systemlux-web - v1.0 - vegalux - 2023</span>
        </LoginContainer>
      </ContainerLoginInterface>
    </>
  );
}
