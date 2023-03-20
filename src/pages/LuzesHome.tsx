import { isValidElement, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Home } from "../layouts/luzes/Home";

export function LuzesHome() {
  const navigate = useNavigate();
  const { setUser, isAuthenticated, recoverUserInformation } =
    useContext(AuthContext);

  async function returnValidation() {
    await recoverUserInformation();
    if (!isValidElement) {
      return navigate("/luzes");
    }
  }

  useEffect(() => {
    returnValidation();
  }, []);

  return (
    <>
      <Home />
    </>
  );
}
