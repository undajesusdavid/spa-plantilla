import { Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/dashboard/DashboardPage";
import UserRouter from "../pages/users/UserRouter";
import SecurityRouter from "../pages/security/SecurityRouter";

export function PrivateRoutes() {
  return (
    <Routes>
      {/* Dashboard Principal */}
      <Route path="/dashboard" element={<DashboardPage/>} />

      {/* Perfil */}
      <Route path="/profile" element={<div>Mi Perfil de Usuario</div>} />

      {/* Módulo de Usuarios */}
      <Route path="/users/*" element={<UserRouter />} />
     
      {/* Módulo de Seguridad */}
      <Route path="/security/*" element={<SecurityRouter />} />

      

      {/* Redirección por defecto */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<div>404 - Página no encontrada</div>} />
    </Routes>
  );
}
