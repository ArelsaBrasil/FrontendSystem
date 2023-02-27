import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Admin } from "./pages/Admin";
import { Arelsa } from "./pages/Arelsa";
import { Ase } from "./pages/Ase";
import { Luzes } from "./pages/Luzes";
import { LuzesHome } from "./pages/LuzesHome";

const isAuthenticated = false;

function PrivateRoute({ children }: any): JSX.Element {
  const navigate = useNavigate();
  return isAuthenticated ? children : navigate("/luzes");
}

export function Router() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={""} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/arelsa" element={<Arelsa />} />
        <Route path="/ase" element={<Ase />} />
        <Route path="/luzes" element={<Luzes />} />
        <Route
          path="/luzes/home"
          element={
            <PrivateRoute>
              <LuzesHome />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}
