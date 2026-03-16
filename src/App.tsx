import { AppShell } from "./shared/layouts/AppShell";
import { AppRoutes } from "./AppRoutes";
import { useAuthStore } from "./modules/users";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";

export default function App() {
  const token = useAuthStore((state) => state.token);
  if (!token) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <AppShell>
      <AppRoutes />
    </AppShell>
  );
}
