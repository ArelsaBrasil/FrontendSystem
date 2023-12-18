import styled from "styled-components";

export const ContainerCurrentFormationStaff = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme["gray-100"]};
  padding: 20px;
  gap: 20px;
  border-radius: 10px;
`;
export const CardContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  gap: 20px;
`;
export const Card = styled.div`
  height: 100%;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  gap: 10px;
`;
