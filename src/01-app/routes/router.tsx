import DashboardPage from "@pages/dashboard/DashboardPage";
import { LoginPage } from "@src/02-pages/login-page";
import { UserRouter } from "./user-router";
import { MainLayout } from "@app/layouts/MainLayout/MainLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { AccessLoginGuard, AccessSystemGuard } from "./loaders";
import { DesingSystemPage } from "@src/02-pages/desing-system/DesingSystemPage";
import App from "../App";
import { PermissionGuard } from "./guards/PermissionGuard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },

      {
        path: "/desing",
        element: <DesingSystemPage />,
      },

      {
        path: "/login",
        element: <LoginPage />,
        loader: AccessLoginGuard,
      },

      {
        element: <MainLayout />,
        loader: AccessSystemGuard,
        children: [
          {
            element: <PermissionGuard />,
            children: [
              // NOTA: Quitamos los "/" iniciales para que sean relativos al padre
              { path: "dashboard", element: <DashboardPage /> },
              { path: "profile", element: <div>Mi Perfil de Usuario</div> },
              { path: "users", children: UserRouter },
            ],
          },
        ],
      },

      // 3. MANEJO DE ERRORES
      { path: "*", element: <div>No se encontró la ruta</div> },
    ],
  },
]);
