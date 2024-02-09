import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import {
  ContainerOfPage,
  SectionOfPage,
  TitleOfPage,
} from "../../StylesPresentOnAllScreens/styles";
import { InfosOfServiceOrder } from "../InfosOfServiceOrder";
import { Reason } from "../Reason";
import { Solution } from "../Solution";

export function ServiceOrderForm() {
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
    <>
      <SectionOfPage>
        <ContainerOfPage>
          <TitleOfPage> Ordem de Serviço </TitleOfPage>
          <InfosOfServiceOrder />
          <hr style={{ width: "100%", border: "1px solid #ccc" }} />
          <Reason />
          <hr style={{ width: "100%", border: "1px solid #ccc" }} />
          <Solution />
        </ContainerOfPage>
      </SectionOfPage>
    </>
  );
}
