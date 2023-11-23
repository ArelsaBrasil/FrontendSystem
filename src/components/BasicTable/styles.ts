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

export const ClosedIcon = styled.div`
  width: fit-content;
  height: 20px;

  padding: 1px 6px;
  background-color: #DBEDDB;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & > div {
    width: 10px;
    height: 10px;
    border-radius: 6px;
    background-color: #6C9B7D;
  }
  & > p {
    color: #1C3829;
  }
`;

export const OpenedIcon = styled.div`
  width: fit-content;
  height: 20px;
  padding: 1px 6px;
  background-color: #FFE2DD;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & > div {
    width: 10px;
    height: 10px;
    border-radius: 6px;
    background-color: #E16F64;
  }
  & > p {
    color: #5D1715;
  }
`;
