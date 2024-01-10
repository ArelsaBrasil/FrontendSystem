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
import { DesignateOS } from "../../../components/DesignationScreenComponents/DesignateOS";

export function DesignateOSScreen() {
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

  return <DesignateOS />;
}
