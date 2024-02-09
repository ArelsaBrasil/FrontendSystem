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
        <StyledNavLink to="/luzes/home/organizar-equipes">
          Organizar Equipes
        </StyledNavLink>
        <StyledNavLink to="/luzes/home/designar-os">Designar OS</StyledNavLink>
        <StyledNavLink to="/luzes/home/os">Ordem de Serviço</StyledNavLink>
        <StyledNavLink to="/luzes/home/criacao-usuario">
          Criação de Usuários
        </StyledNavLink>
      </nav>
    </NavBarContainer>
  );
}
