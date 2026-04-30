// src/shared/lib/router/PermissionGuard.tsx
import { Navigate, Outlet, useMatches } from "react-router-dom";
import { useAbility } from "@entities/session";

export function PermissionGuard() {
  const matches = useMatches();
  const { can } = useAbility();

  // Buscamos si alguna de las rutas actuales (padre o hija) tiene un permiso requerido
  const requiredPermission = matches.find((m) => (m.handle as any)?.permission)?.handle as any;
  const permission = requiredPermission?.permission;
  // Si la ruta pide permiso y el usuario NO lo tiene, bloqueamos
  if (permission && !can(permission)) {
    return <Navigate to="/403" replace />;
  }

  return <Outlet />;
}