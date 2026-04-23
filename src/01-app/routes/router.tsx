import { LoginForm } from "@entities";
import DashboardPage from "@pages/dashboard/DashboardPage";
import { UserRouter } from "./user-router";
import { LoginLayout, MainLayout } from "@layouts";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { AccessLoginGuard, AccessSystemGuard } from "./loaders";
import { DesingSystemPage } from "@src/02-pages/desing-system/DesingSystemPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },

  {
    path: "/desing",
    element: <DesingSystemPage />,
  },

  {
    path: "/login",
    element: <LoginLayout />,
    loader: AccessLoginGuard,
    children: [{ index: true, element: <LoginForm /> }],
  },

  {
    element: <MainLayout />,
    loader: AccessSystemGuard,
    children: [
      // NOTA: Quitamos los "/" iniciales para que sean relativos al padre
      { path: "dashboard", element: <DashboardPage /> },
      { path: "profile", element: <div>Mi Perfil de Usuario</div> },
      { path: "users", children: UserRouter },
    ],
  },

  // 3. MANEJO DE ERRORES
  { path: "*", element: <div>No se encontró la ruta</div> },
]);
