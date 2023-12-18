import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentGroupFormation } from "../../../components/OrganizingGroupScreenComponents/CurrentGroupFormation";
import { AuthContext } from "../../../context/AuthContext";
import {
  SectionOfPage,
  TitleOfPage,
  ContainerOfPage,
} from "../../../components/StylesPresentOnAllScreens/styles";
import { ReorganizingGroup } from "../../../components/OrganizingGroupScreenComponents/ReorganizingGroup";

export function OrganizingGroupScreen() {
  const navigate = useNavigate();
  const { recoverUserInformation } = useContext(AuthContext);

  async function returnValidation() {
    await recoverUserInformation();
    if (!recoverUserInformation) {
      return navigate("/luzes");
    }
  }

  useEffect(() => {
    return () => {
      returnValidation();
    };
  }, []);

  return (
    <SectionOfPage>
      <TitleOfPage> Organizar Equipes </TitleOfPage>
      <ContainerOfPage>
        <CurrentGroupFormation />
        <ReorganizingGroup />
      </ContainerOfPage>
    </SectionOfPage>
  );
}
