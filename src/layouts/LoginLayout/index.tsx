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
                    placeholder="Usuário"
                    // onChange={formDataHandler}
                    // value={customer.firstName}
                    required
                  />
                </div>

                <div>
                  <InputFormLogin type="password" placeholder="Senha: " />
                </div>

                <SubmitButton type="submit">Entrar</SubmitButton>
              </form>
            </div>
          </LoginCard>
        </LoginContainer>
      </ContainerLoginInterface>
    </>
  );
}
