import { Button } from "@mui/material";
import styled from "styled-components";

export const SectionOfPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 160px;
`;

export const StyledLabel = styled(Button)`
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  color: black !important;
  pointer-events: none;
  background-color: white !important;
  min-width: 100px;
  white-space: nowrap;
`;

export const StyledButton = styled(Button)`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000 !important;
`;

export const ContainerButton = styled.div`
  width: 100%;
  left: 50%;
  position: fixed;
  top: 90%;
  transform: translateX(-50%);
`;
