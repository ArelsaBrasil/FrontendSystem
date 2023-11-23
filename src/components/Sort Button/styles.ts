import styled from "styled-components";

export const ButtonToSort = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme["gray-100"]};
  border-radius: 4px;
  padding: 1px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  &:hover {
    cursor: pointer;
  }
`;
