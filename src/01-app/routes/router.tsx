import DashboardPage from "@pages/dashboard/DashboardPage";
import { LoginPage } from "@src/02-pages/login-page";
import { UserRouter } from "./user-router";
import { MainLayout } from "@src/01-app/layouts";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { AccessLoginGuard, AccessSystemGuard } from "./loaders";
import { DesingSystemPage } from "@src/02-pages/desing-system/DesingSystemPage";
import { UiProvider } from "@shared/lib/providers/UiProvider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UiProvider />,
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
          // NOTA: Quitamos los "/" iniciales para que sean relativos al padre
          { path: "dashboard", element: <DashboardPage /> },
          { path: "profile", element: <div>Mi Perfil de Usuario</div> },
          { path: "users", children: UserRouter },
        ],
      },

      // 3. MANEJO DE ERRORES
      { path: "*", element: <div>No se encontró la ruta</div> },
    ],
  },
]);
