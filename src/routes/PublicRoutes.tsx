import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";

export const PublicRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
);
