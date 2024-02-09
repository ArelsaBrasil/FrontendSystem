import styled from "styled-components";

interface CardProps {
  isOpenState: boolean;
}

export const Card = styled.div<CardProps>`
  width: 200px;
  background: white;
  border-radius: 22px;

  padding: 8px;
  height: ${({ isOpenState }) => (isOpenState ? "105px" : "64px")};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  transition: height 0.3s cubic-bezier(0.68, -0.3, 0.27, 1.3);
  overflow: hidden;
`;

export const CardContainer = styled.div`
  height: auto;
  width: 100%;
`;

export const HeaderCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 32px;

  cursor: pointer;

  span {
    font-size: 20px;
    font-weight: 800;
  }
  p {
    font-size: 14px;
    color: #8d91a0;
    text-align: left;
  }
`;

export const AvatarContainer = styled.div`
  width: 48px;
  height: 48px;
  overflow: hidden;
  background-color: black;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  height: 80px;
`;

export const OptionsContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px 0;
`;

export const SignOut = styled.button`
  width: 100%;
  height: auto;
  background-color: #c1c1c1;
  padding: 5px;
  border-radius: 20px;
  cursor: pointer;
  color: white;
  font-weight: bolder;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #f5554a;
  }
  &:active {
    background-color: #f44336;
  }
`;
