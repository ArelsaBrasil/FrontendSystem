import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CustomerService } from "./layouts/luzes/CustomerService";
import { DefaultLayout } from "./layouts/luzes/DefaultLayout";
import { GeracaoOS } from "./layouts/luzes/GeracaoOS";
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
        <Route path="/luzes/home" element={<DefaultLayout />}>
          <Route path="/luzes/home/" element={<LuzesHome />} />
          <Route path="/luzes/home/atendimento" element={<CustomerService />} />
          <Route path="/luzes/home/geracaoos" element={<GeracaoOS />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
