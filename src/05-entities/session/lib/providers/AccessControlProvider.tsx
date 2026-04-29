// src/05-entities/session/lib/PermissionProvider.tsx
import { createContext, useContext, ReactNode } from "react";
import { useSessionStore } from "../../model/session.store";
import { Permission, checkPermission } from "@shared/lib/util/map-permissions";

interface PermissionContextType {
  can: (permission: Permission) => boolean;
  isRole: (role: string) => boolean;
}

const PermissionContext = createContext<PermissionContextType | null>(null);

export const PermissionProvider = ({ children }: { children: ReactNode }) => {
  const permissions = useSessionStore((state) => state.permissions);
  const roles = useSessionStore((state) => state.roles);

  const can = (permission: Permission) => { 
    if(permissions.includes("*:*")) return true; // Si el usuario tiene el permiso de admin, se le concede acceso a todo
    return checkPermission(permissions, permission); 
  };
  const isRole = (role: string) => roles.includes(role);

  return (
    <PermissionContext.Provider value={{ can, isRole }}>
      {children}
    </PermissionContext.Provider>
  );
};

// Hook personalizado para usarlo fácilmente
export const useAbility = () => {
  const context = useContext(PermissionContext);
  if (!context) throw new Error("useAbility debe usarse dentro de PermissionProvider");
  return context;
};