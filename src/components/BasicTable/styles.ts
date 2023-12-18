import styled from "styled-components";

export const TableRow = styled.div`
  width: 100%;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgba(27, 31, 35, 0.05);

  & > p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > p:nth-child(1) {
    width: 120px;
  }
  & > p:nth-child(2) {
    width: 250px;
  }
  & > p:nth-child(3) {
    width: 200px;
  }
  & > p:nth-child(4) {
    width: 100px;
  }
  & > p:nth-child(5) {
    width: 230px;
  }
  & > div {
    width: 150px;
  }
  & > p:nth-child(7) {
    width: 100px;
  }
  & > p:nth-child(8) {
    width: 150px;
  }
  & > p:nth-child(9) {
    width: 300px;
  }
`;