import { useNavigate } from "react-router-dom";
import { ButtonReturn, NavBarContainer, StyledNavLink } from "./styles";

export function NavBar() {
  const navigate = useNavigate();

  function handleProximoClick() {
    navigate("/luzes/home/atendimento");
    window.location.reload();
  }
  return (
    <NavBarContainer>
      <nav>
        <StyledNavLink to="/luzes/home/atendimento">
          <ButtonReturn onClick={handleProximoClick}>
            Criar Atendimento
          </ButtonReturn>
        </StyledNavLink>
        <StyledNavLink to="/luzes/home/pesquisa">Pesquisar</StyledNavLink>
      </nav>
    </NavBarContainer>
  );
}
