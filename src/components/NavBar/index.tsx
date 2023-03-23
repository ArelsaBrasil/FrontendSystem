import { NavLink } from "react-router-dom";
import { NavBarContainer, StyledNavLink } from "./styles";

export function NavBar() {
  return (
    <NavBarContainer>
      <nav>
        <StyledNavLink to="/luzes/home/">Home</StyledNavLink>
        <StyledNavLink to="/luzes/home/atendimento">Atendimento</StyledNavLink>
        <StyledNavLink to="/luzes/home/geracaoos">Ordem de Serviço</StyledNavLink>
      </nav>
    </NavBarContainer>
  );
}
