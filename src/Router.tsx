import { SearchScreen } from "./layouts/luzes/SearchScreen/index";
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
import { OrganizingGroupScreen } from "./layouts/luzes/OrganizingGroupScreen";
import { DesignateOSScreen } from "./layouts/luzes/DesignateOSScreen";
import { ServiceOrder } from "./layouts/luzes/ServiceOrder";
import { CreateUsersScreen } from "./layouts/luzes/CreateUsersScreen";

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
            <Route path="/luzes/home/pesquisa" element={<SearchScreen />} />
            <Route
              path="/luzes/home/organizar-equipes"
              element={<OrganizingGroupScreen />}
            />
            <Route
              path="/luzes/home/designar-os"
              element={<DesignateOSScreen />}
            />
            <Route
              path="/luzes/home/criacao-usuario"
              element={<CreateUsersScreen />}
            />
            <Route
              path="/luzes/home/os"
              element={<ServiceOrder />}
            />
          </Route>
        </Routes>
      </FormDataProvider>
    </AuthProvider>
  );
}
