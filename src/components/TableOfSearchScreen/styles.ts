import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
`;

export const HeaderTable = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TextInputToSearch = styled.input`
  width: 400px;
  height: 45px;
  border: 1px solid;
  border-color: ${(props) => props.theme["gray-300"]};
  border-radius: 8px;
  padding: 10px;

  &:focus {
    outline-style: solid;
    outline-width: max(2px);
    outline-color: ${(props) => props.theme["gray-100"]};
  }
`;

export const TableRenderContainer = styled.div`
  width: 100%;
  margin: 30px 0 100px 0 ;
`;
