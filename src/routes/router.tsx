import { LoginForm } from "@/modules/users/components/LoginForm/LoginForm";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import { usersRouter } from "@/routes/users-router";
import { ProtectedRoute } from "@/routes/guards/protected-route";
import { LoginLayout } from "@/shared/layouts/LoginLayout";
import { MainLayout } from "@/shared/layouts/MainLayout";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

export const router = createBrowserRouter([
  // 1. RUTAS PÚBLICAS
  // LoginLayout
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />
      },
      { path: "login", element: <LoginForm /> },
    ],
  },

  // 2. RUTAS PRIVADAS
  //MainLayout
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          // NOTA: Quitamos los "/" iniciales para que sean relativos al padre
          { path: "dashboard", element: <DashboardPage /> },
          { path: "profile", element: <div>Mi Perfil de Usuario</div> },
          { path: "users", children: usersRouter },
        ],
      },
    ],
  },

  // 3. MANEJO DE ERRORES
  { path: "*", element: <div>No se encontró la ruta</div> },
]);
