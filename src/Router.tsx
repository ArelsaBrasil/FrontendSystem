import { SearchScreen } from './layouts/luzes/SearchScreen/index';
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CustomerAttendance } from "./layouts/luzes/CustomerAttendance";
import { DefaultLayout } from "./layouts/luzes/layouts/DefaultLayout";
import { ServiceOrderCreation } from "./layouts/luzes/ServiceOrderCreation";
import { Admin } from "./pages/Admin";
import { Arelsa } from "./pages/Arelsa";
import { Ase } from "./pages/Ase";
import { Luzes } from "./pages/Luzes";
import { LuzesHome } from "./pages/LuzesHome";
import { FormDataProvider } from "./context/FormDataContext";
import { OrganizingGroupScreen } from './layouts/luzes/OrganizingGroupScreen';

export function Router() {
  return (
    <AuthProvider>
      <FormDataProvider>
        <Routes>
          <Route path="/" element={""} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/arelsa" element={<Arelsa />} />
          <Route path="/ase" element={<Ase />} />
          <Route path="/luzes" element={<Luzes />} />
          <Route path="/luzes/home" element={<DefaultLayout />}>
            <Route path="/luzes/home/" element={<LuzesHome />} />
            <Route
              path="/luzes/home/atendimento"
              element={<CustomerAttendance />}
            />
            <Route
              path="/luzes/home/geracaoos"
              element={<ServiceOrderCreation />} 
            />
            <Route
              path="/luzes/home/pesquisa"
              element={<SearchScreen/>}
            />
            <Route
              path="/luzes/home/organizar-equipes"
              element={<OrganizingGroupScreen/>}
            />
          </Route>
        </Routes>
      </FormDataProvider>
    </AuthProvider>
  );
}
