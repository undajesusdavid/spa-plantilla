import { useAuthStore } from "@/modules/users/store/auth.store";
import { Navigate, Outlet, useLocation } from "react-router-dom";


export const ProtectedRoute = () => {
  const { token } = useAuthStore();
  console.log("Token actual en Guard:", token); // Mira esto en la consola (F12)
  const location = useLocation();

  if (!token) {
    // Guardamos la ruta donde estaba el usuario para volver después del login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />; 
};