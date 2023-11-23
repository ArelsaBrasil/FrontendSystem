import styled from "styled-components";

export const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
  height: 100px;
  background: linear-gradient(90deg, #00cf5a 0%, #30347d 99.48%);

  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eaecf0;
`;

export const HeaderContainer = styled.div`
  width: 80%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoBranco = styled.img`
  margin-top: 5px;
  height: 80px;
`;

export const ProfileCardContainer = styled.div`
  height: 100%;
  display: flex;
  padding-top: 17px;
`;
