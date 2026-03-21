import { MainLayout } from "./shared/layouts/MainLayout";
import { PrivateRoutes, PublicRoutes } from "./routes";
import { useAuthStore } from "./modules/users";
import { MENU_ITEMS } from "./shared/constants/menu-items";
import SmallButton from "./shared/ui/SmallButton";
import { ToastProvider } from "./shared/context/ToastContext";
import { ModalProvider } from "./shared/context/ModalContext";

export default function App() {
  const { token, logout, username } = useAuthStore();
  // 1. Verificación de autenticación limpia
  if (!token) {
    return <PublicRoutes />;
  }

  // 2. Preparación de elementos de UI (opcional, para claridad)
  const headerConfig = {
    links: [{ label: username || "Usuario", to: "/perfil" }],
    actions: (
      <SmallButton variant="primary" onClick={logout}>
        {" "}
        Salir{" "}
      </SmallButton>
    ),
  };

  // 3. Renderizado de la aplicación privada
  return (
    <ToastProvider>
      <ModalProvider>
        <MainLayout menuItems={MENU_ITEMS} headerItems={headerConfig}>
          <PrivateRoutes />
        </MainLayout>
      </ModalProvider>
    </ToastProvider>
  );
}
