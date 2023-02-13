import { Routes, Route } from "react-router-dom";
import { Admin } from "./pages/Admin";
import { Arelsa } from "./pages/Arelsa";
import { Ase } from "./pages/Ase";
import { Luzes } from "./pages/Luzes";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Luzes />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/arelsa" element={<Arelsa />} />
            <Route path="/ase" element={<Ase />} />
            <Route path="/luzes" element={<Luzes />} />
        </Routes>)
}
