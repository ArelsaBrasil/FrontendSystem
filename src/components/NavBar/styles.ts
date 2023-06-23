import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 100%;
  height: 65px;
  background: grey;
  background-color: ${(props) => props.theme["blue-brand"]};
  display: flex;
  align-items: center;
  justify-content: center;
  nav {
    width: 80%;
    display: flex;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 18px;
  color: white;
  text-decoration: none;
  margin: 0 20px;
`;
export const ButtonReturn = styled.button`
  font-size: 18px;
  color: white;
  background-color: transparent;
`;
