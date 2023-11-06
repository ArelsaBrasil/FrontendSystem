import { useNavigate } from "react-router-dom";
import {
  ContainerOfPage,
  SectionOfPage,
  TitleOfPage,
} from "../../../components/StylesPresentOnAllScreens/styles";
import { TableOfSearchScreen } from "../../../components/TableOfSearchScreen";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";

export function SearchScreen() {
  const navigate = useNavigate();
  const { recoverUserInformation } = useContext(AuthContext);

  async function returnValidation() {
    await recoverUserInformation();
    if (!recoverUserInformation) {
      return navigate("/luzes");
    }
  }

  useEffect(() => {
    returnValidation();
  }, []);

  return (
    <SectionOfPage>
      <ContainerOfPage>
        <TitleOfPage> Pesquisa de Atendimentos </TitleOfPage>
        <TableOfSearchScreen />
      </ContainerOfPage>
    </SectionOfPage>
  );
}
