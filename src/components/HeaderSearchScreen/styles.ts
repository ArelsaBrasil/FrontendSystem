import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
`;

interface IHeaderTableProps {
  show?: string;
}

export const Header = styled.nav<IHeaderTableProps>`
  z-index: 1;
  width: 100%;
  height: 80px;
  padding-top: 40px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 165px;
  left: 0;
  position: sticky;
  transition: transform 500ms ease-in-out;

  &.nav-bar--hidden {
    transform: translateY(-100%);
  }

  & form {
    gap: 10px;
    display: flex;
    align-items: end;
    justify-content: center;
    & div:nth-child(1) {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
`;

export const ColumnTitles = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: white;
  border: 1px solid rgba(27, 31, 35, 0.15);
  padding: 5px 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 6px;

  & > button:nth-child(1) {
    width: 110px;
  }
  & > button:nth-child(2) {
    width: 250px;
  }
  & > button:nth-child(3) {
    width: 200px;
  }
  & > button:nth-child(4) {
    width: 100px;
  }
  & > button:nth-child(5) {
    width: 230px;
  }
  & > button:nth-child(6) {
    width: 150px;
  }
  & > button:nth-child(7) {
    width: 100px;
  }
  & > button:nth-child(8) {
    width: 150px;
  }
  & > button:nth-child(9) {
    width: 300px;
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
