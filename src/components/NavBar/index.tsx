import { useNavigate } from "react-router-dom";
import { ButtonReturn, NavBarContainer, StyledNavLink } from "./styles";

export function NavBar() {
  const navigate = useNavigate();

  return (
    <NavBarContainer>
      <nav>
        <StyledNavLink to="/luzes/home/atendimento">
          Criar Atendimento
        </StyledNavLink>
        <StyledNavLink to="/luzes/home/pesquisa">Pesquisar</StyledNavLink>
      </nav>
    </NavBarContainer>
  );
}
