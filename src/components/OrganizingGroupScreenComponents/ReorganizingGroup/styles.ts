import styled from "styled-components";

export const ContainerOrganizingEmployees = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${(props) => props.theme["gray-100"]};
  padding: 20px;
  gap: 20px;
  border-radius: 10px;
`;
export const ContainerSelect = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;

  & > div {
    height: 100%;
    display: flex;
    align-items: center;
    align-items: end;

    gap: 20px;

    & > div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: end;
      gap: 20px;
    }
  }
`;
export const ContainerSelected = styled.div`
  width: 100%;
  max-width: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  & > div {
    height: 306px;
    max-width: 1050px;
    width: 100%;
    display: flex;
    flex-direction: column;

    justify-content: end;
    gap: 20px;
    & > div {
      height: 100%;
      width: 100%;
      display: flex;

      justify-content: left ;
      gap: 20px;
    }
  }
`;
export const Card = styled.div`
  max-height: 335px;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 15px;
`;
export const ButtonCreateGroup = styled.button`
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  background-color: ${(props) => props.theme["green-300"]};
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme["green-500"]};
  }
  :active {
    background-color: ${(props) => props.theme["green-300"]};
  }
  :disabled {
    background-color: ${(props) => props.theme["gray-300"]};
  }
`;
