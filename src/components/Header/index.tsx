import { HeaderContainer, HeaderSection, LogoBranco, ProfileCardContainer } from "./styles";
import logoBranco from "../../assets/images/luzesDeAcailandiaLogoBrancoHeader.png";
import { ProfileCard } from "../ProfileCard";

export function Header() {
  return (
    <HeaderSection>
      <HeaderContainer>
        <LogoBranco src={logoBranco} />
        <ProfileCardContainer>
          <ProfileCard />
        </ProfileCardContainer>
      </HeaderContainer>
    </HeaderSection>
  );
}
