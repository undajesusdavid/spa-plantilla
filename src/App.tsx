import { MainLayout } from "./shared/layouts/MainLayout";
import { AppRoutes } from "./AppRoutes";
import { useAuthStore } from "./modules/users";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import SmallButton from "./shared/ui/SmallButton";

const menuItems = [
  {
    icon: "👥",
    title: "Usuarios",
    links: [
      { label: "Lista de Usuarios", to: "/users" },
      { label: "Crear Usuario", to: "/users/create" },
    ],
  },
  {
    icon: "🫆",
    title: "Seguridad",
    links: [
      { label: "Lista de Roles", to: "/security/roles" },
      { label: "Lista de Permisos", to: "/security/permissions" },
    ],
  },
];


export default function App() {
  const {token, logout, username} = useAuthStore();

  if (!token) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <MainLayout 
      menuItems={menuItems} 
      headerItems={{
        links: [
          { label: username || "unknown", to: "/perfil" }
        ],
        actions: <>
          <SmallButton variant="primary" onClick={logout}>Salir</SmallButton>
        </>
      }}>
      <AppRoutes />
    </MainLayout>
  );
}
