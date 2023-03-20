import logoAzul from "../../../assets/images/luzesDeAcailandiaLogo.png";
import logoBranco from "../../../assets/images/luzesDeAcailandiaLogoBranco.png";
import wallpaper from "../../../assets/images/wallpaperLuzes.jpg";
import {
  ContainerLoginInterface,
  FormLogin,
  InputFormLogin,
  LoginCard,
  LoginContainer,
  LogoAzul,
  LogoBranco,
  SubmitButton,
  Wallpaper,
} from "./styles";

import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";

export function LoginLayout() {
  const { signIn } = useContext(AuthContext);

  const [dataLogin, setDatalogin] = useState({
    userName: "",
    password: "",
  });

  async function handleSubmitSignIn(e: any) {
    e.preventDefault();
    await signIn(dataLogin);
  }
  return (
    <>
      <ContainerLoginInterface>
        <Wallpaper>
          <img src={wallpaper} alt="" />
        </Wallpaper>
        <LoginContainer>
          <LogoBranco src={logoBranco} alt="" />
          <LoginCard>
            <LogoAzul src={logoAzul} alt="" />

            <div>
              <FormLogin onSubmit={handleSubmitSignIn}>
                <InputFormLogin
                  autoComplete="off"
                  id="username"
                  type="text"
                  placeholder="Usuário*"
                  onChange={(e) =>
                    setDatalogin({ ...dataLogin, userName: e.target.value })
                  }
                  value={dataLogin.userName}
                  required
                />

                <InputFormLogin
                  autoComplete="off"
                  id="password"
                  type="password"
                  placeholder="Senha*"
                  onChange={(e) =>
                    setDatalogin({ ...dataLogin, password: e.target.value })
                  }
                  value={dataLogin.password}
                  required
                />
                <SubmitButton type="submit">Entrar</SubmitButton>
              </FormLogin>
            </div>
          </LoginCard>
          <span>© Systemlux-web - v1.0 - vegalux - 2023</span>
        </LoginContainer>
        <span>© Systemlux-web - v1.0 - vegalux - 2023</span>
      </ContainerLoginInterface>
    </>
  );
}
