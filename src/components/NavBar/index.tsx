import { NavLink } from "react-router-dom";
import { NavBarContainer, StyledNavLink } from "./styles";

export function NavBar() {
  return (
    <NavBarContainer>
      <nav>
        <StyledNavLink to="/luzes/home/atendimento">Criar Atendimento</StyledNavLink>
        <StyledNavLink to="/luzes/home/geracaoos">Gerar Ordem de Serviço</StyledNavLink>
        <StyledNavLink to="/luzes/home/geracaoos">Pesquisar</StyledNavLink>
      </nav>
    </NavBarContainer>
  );
}
