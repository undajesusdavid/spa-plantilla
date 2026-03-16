import { Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard/DashboardPage";

export function AppRoutes() {
  return (
    <Routes>
      {/* Dashboard Principal */}
      <Route
        path="/dashboard"
        element={<DashboardPage/>}
      />

      {/* Módulo de Usuarios */}
      <Route path="/dashboard" element={<div>Lista de Usuarios</div>} />
      <Route path="/users/create" element={<div>Formulario de Creación</div>} />

      {/* Módulo de Inventario */}
      <Route path="/inventory/boxes" element={<div>Gestión de Cajas</div>} />

      {/* Perfil */}
      <Route path="/profile" element={<div>Mi Perfil de Usuario</div>} />

      {/* Redirección por defecto */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<div>404 - Página no encontrada</div>} />
    </Routes>
  );
}
