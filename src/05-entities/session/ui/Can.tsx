// src/05-entities/session/ui/Can.tsx
import { ReactNode } from "react";
import { useAbility } from "../lib/hooks/useMapPermissions"; // 👈 Nueva ruta al hook de Zustand
import { Permission } from "@shared/lib/util/map-permissions";

interface CanProps {
  perform: Permission;
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Componente Guardián de UI
 * Renderiza los hijos solo si el usuario tiene el permiso requerido.
 */
export const Can = ({ perform, children, fallback = null }: CanProps) => {
  const { can } = useAbility();

  // Si can(perform) es true, mostramos el contenido. 
  // Si no, mostramos el fallback (que por defecto es null).
  return can(perform) ? <>{children}</> : <>{fallback}</>;
};