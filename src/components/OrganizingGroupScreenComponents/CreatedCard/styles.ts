import styled from "styled-components";

export const StyledCreatedCard = styled.div`
  height: 100%;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
  }
`;

export const ButtonDeleteItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${(props) => props.theme["gray-500"]};

  &:hover {
    background-color: ${(props) => props.theme["blue-focus"]};
  }
  &:active {
    background-color: ${(props) => props.theme["blue-active"]};
  }
`;
