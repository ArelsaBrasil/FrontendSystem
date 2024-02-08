import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { CurrentGroupFormation } from "../../../components/OrganizingGroupScreenComponents/CurrentGroupFormation";
import { ReorganizingGroup } from "../../../components/OrganizingGroupScreenComponents/ReorganizingGroup";
import {
  SectionOfPage,
  TitleOfPage,
  ContainerOfPage,
} from "../../../components/StylesPresentOnAllScreens/styles";
import { CreateUsers } from "../../../components/CreateUsersScreenComponents/CreateUsers";

export function CreateUsersScreen() {
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
      <TitleOfPage> Criação de Usuário </TitleOfPage>
      <ContainerOfPage>
        <CreateUsers />
      </ContainerOfPage>
    </SectionOfPage>
  );
}
