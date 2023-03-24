import styled from "styled-components";
import wallpaper from "../../assets/images/wallpaperLuzes.jpg";

export const AtendimentoSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const AtendimentoContainer = styled.div`
  width: 80%;
  margin-top: 20px;
`;

export const Title = styled.h1`
 margin-left: 20px;
  font-size: 28px;
  color: #5f6377;
  font-weight: normal;
`;
export const FormLogin = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  padding: 30px 20px;
`;
export const InputFormLogin = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme["gray-900"]};
  border: 1px solid;
  border-color: ${(props) => props.theme["gray-400"]};
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 18px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
  border: none;
  font-size: 20px;
  transition: 0.25s ease-in-out;

  cursor: pointer;
`;
