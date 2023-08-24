import { CaretDown, CaretUp } from "phosphor-react";
import { useState } from "react";
import Avatarjoao from "../../assets/images/Avatarjoao.jpg";
import {
  Avatar,
  AvatarContainer,
  Card,
  CardContainer,
  HeaderCardContainer,
  OptionsContainer,
  SignOut,
} from "./styles";
import { useNavigate } from "react-router-dom";

export function ProfileCard() {
  const navigate = useNavigate();
  const { user } = JSON.parse(localStorage.getItem("current_user") || "{}");
  const [openState, setOpenState] = useState(false);

  const handleClickCardButton = () => setOpenState(!openState);

  const handleClickSignOut = () => {
    localStorage.clear();
    navigate("/luzes");
  };

  return (
    <Card isOpenState={openState}>
      <CardContainer>
        <HeaderCardContainer onClick={handleClickCardButton}>
          <AvatarContainer>
            <Avatar src={Avatarjoao} />
          </AvatarContainer>
          <div>
            <span>{user.name}</span>
            <p>{user.positionJob}</p>
          </div>
          {openState ? <CaretUp size={26} /> : <CaretDown size={26} />}
        </HeaderCardContainer>
        <OptionsContainer>
          <SignOut onClick={handleClickSignOut}>Sair</SignOut>
        </OptionsContainer>
      </CardContainer>
    </Card>
  );
}
