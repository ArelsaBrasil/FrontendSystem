import { Outlet } from "react-router-dom";
import { Header } from "../../../../components/Header";
import { NavBar } from "../../../../components/NavBar";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <NavBar />

      <Outlet />
    </>
  );
}
