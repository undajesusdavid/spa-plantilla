// src/05-entities/session/model/useAbility.ts
import { useSessionStore } from "@entities/session";
import { Permission, checkPermission } from "@shared/lib/util/map-permissions";
import { useToast } from "@src/06-shared/lib/providers/ToastProvider";
import { useEffect } from "react";

export function useAbility() {
  const permissions = useSessionStore((state) => state.permissions);
  const roles = useSessionStore((state) => state.roles);
  const { addToast, config } = useToast();


  useEffect(() => {
    config({
      width:"400px",
      limit: 1,
      position: "top-center"
    });
  },[])

  const can = (required: Permission) => {
    // 1. Acceso total para SuperAdmin
    if (permissions.includes("*:*")) return true;

    // 2. Verificación estándar
    return checkPermission(permissions, required);
  };

  const notify = (message = "No posee el permiso requerido") => {

    addToast("error", message, {
      title: "Acción Denegada",

    });
  }

  const isRole = (role: string) => roles.includes(role);

  // Devolvemos también los arrays por si el Layout los necesita para validar carga
  return { can, isRole, notify, hasPermissions: permissions.length > 0 };
}