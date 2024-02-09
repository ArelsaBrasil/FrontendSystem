import styled from "styled-components";

export const ClosedIcon = styled.div`
  width: fit-content;
  height: 20px;

  padding: 1px 6px;
  background-color: #dbeddb;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & > div {
    width: 10px;
    height: 10px;
    border-radius: 6px;
    background-color: #6c9b7d;
  }
  & > p {
    color: #1c3829;
  }
`;

export const OpenedIcon = styled.div`
  width: fit-content;
  height: 20px;
  padding: 1px 6px;
  background-color: #ffe2dd;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & > div {
    width: 10px;
    height: 10px;
    border-radius: 6px;
    background-color: #e16f64;
  }
  & > p {
    color: #5d1715;
  }
`;
