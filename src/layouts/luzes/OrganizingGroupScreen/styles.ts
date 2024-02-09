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
  height: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
export const Card = styled.div`
  height: 350px;
  min-width: 200px;
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
`;
