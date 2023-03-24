import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import {
  AtendimentoContainer,
  AtendimentoSection,
  FormLogin,
  InputFormLogin,
  SubmitButton,
  Title,
} from "./styles";

export function Atendimento() {
  const navigate = useNavigate();
  const { recoverUserInformation } = useContext(AuthContext);

  async function returnValidation() {
    await recoverUserInformation();
    if (!recoverUserInformation) {
      return navigate("/luzes");
    }
  }

  useEffect(() => {
    returnValidation();
  }, []);
  return (
    <AtendimentoSection>
      <AtendimentoContainer>
        <Title> Registro de Atendimentos. </Title>
        {/* <FormLogin>
        <InputFormLogin
        autoComplete="off"
        id="username"
        type="text"
        placeholder="Usuário*"
        required
        />
        
        <InputFormLogin
        autoComplete="off"
        id="password"
        type="password"
        placeholder="Senha*"
        required
        />
        <SubmitButton type="submit">Entrar</SubmitButton>
      </FormLogin> */}
      </AtendimentoContainer>
    </AtendimentoSection>
  );
}
