import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DesignateOS } from "../../../components/DesignationScreenComponents/DesignateOS";
import { AuthContext } from "../../../context/AuthContext";

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
