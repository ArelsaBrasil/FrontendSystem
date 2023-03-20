import { useContext } from "react";
import { Route, Routes, useNavigate, RouteProps } from "react-router-dom";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { Admin } from "./pages/Admin";
import { Arelsa } from "./pages/Arelsa";
import { Ase } from "./pages/Ase";
import { Luzes } from "./pages/Luzes";
import { LuzesHome } from "./pages/LuzesHome";

export function Router() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={""} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/arelsa" element={<Arelsa />} />
        <Route path="/ase" element={<Ase />} />
        <Route path="/luzes" element={<Luzes />} />
        <Route path="/luzes/home" element={<LuzesHome />} />
      </Routes>
    </AuthProvider>
  );
}
