import styled from "styled-components";

interface ButtonToSortProps {
  canOrganize: boolean;
  selectedButton: boolean;
}

export const ButtonToSort = styled.button<ButtonToSortProps>`
  width: 100%;
  background-color: ${(props) =>
    props.selectedButton ? props.theme["gray-300"] : props.theme["gray-100"]};
  border-radius: 4px;
  padding: 1px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  color: black;

  &:hover {
    cursor: ${(props) => (props.canOrganize ? "pointer" : "not-allowed")};
  }

  & div {
    display: ${(props) => (props.canOrganize ? "flex" : "none")};
    align-items: center;
    justify-content: center;
  }
`;
