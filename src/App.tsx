import { MainLayout } from "./shared/layouts/MainLayout";
import { PrivateRoutes, PublicRoutes } from "./routes";
import { useAuthStore } from "./modules/users";
import { ToastProvider } from "./shared/context/ToastContext";
import { ModalProvider } from "./shared/context/ModalContext";

export default function App() {
  const { token } = useAuthStore();

  return (
    <ToastProvider>
      <ModalProvider>
        {token ? (
          <MainLayout>
            <PrivateRoutes />
          </MainLayout>
        ) : (
          <PublicRoutes />
        )}
      </ModalProvider>
    </ToastProvider>
  );
}
