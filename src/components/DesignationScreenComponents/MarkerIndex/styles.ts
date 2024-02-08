import styled from "styled-components";

export const IndexContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  color: ${(props) => props.theme["gray-600"]};
  & > section {
    display: flex;
    align-items: center;
  }
`;
