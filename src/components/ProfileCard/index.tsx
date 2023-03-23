import { Avatar, AvatarContainer, Card, CardContainer } from "./styles";
import Avatarjoao from "../../assets/images/Avatarjoao.jpg";
import { CaretDown } from "phosphor-react";

export function ProfileCard() {
  return (
    <Card>
      <CardContainer>
        <AvatarContainer>
          <Avatar src={Avatarjoao} />
        </AvatarContainer>
        <div>
          <span>João</span>
          <p>Atendente</p>
        </div>
        <>
          <CaretDown size={32} />
        </>
      </CardContainer>
    </Card>
  );
}
