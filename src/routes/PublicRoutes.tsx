import { Routes, Route, Navigate, Form } from "react-router-dom";
import { LoginLayout } from "@/shared/layouts/LoginLayout";
import { LoginForm } from "@/modules/users/components/LoginForm";

export const PublicRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginLayout children={<LoginForm />} />} />
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
);
