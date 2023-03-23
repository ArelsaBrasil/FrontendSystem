import { HeaderContainer, HeaderSection, LogoBranco } from "./styles";
// import logoBranco from "../../../assets/images/luzesDeAcailandiaLogoBranco.png";
import logoBranco from "../../assets/images/luzesDeAcailandiaLogoBranco.png";
import { ProfileCard } from "../ProfileCard";

export function Header() {
  return (
    <HeaderSection>
      <HeaderContainer>
        <LogoBranco src={logoBranco} />
        <ProfileCard />
      </HeaderContainer>
    </HeaderSection>
  );
}
