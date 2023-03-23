import styled from "styled-components";

export const Card = styled.div`
  width: 200px;
  height: 64px;
  background: white;
  border-radius: 32px;
  display: flex;
  align-items: center;
  padding: 8px;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 32px;

  span {
    font-size: 20px;
    font-weight: 800;
  }
  p {
    font-size: 14px;
    color: #8d91a0;
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
