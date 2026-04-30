// src/03-widgets/layout/ui/MainLayout.tsx
import { useEffect } from "react";
import { 
  useGetMePermissions, 
  useAbility, 
  useSessionStore 
} from "@entities/session";
import { DashboardSkeleton } from "@shared/ui/feedback";
import { useToast } from "@shared/lib/providers/ToastProvider";
import { useMainLayout } from "./model/useMainLayout";
import { MainLayoutView } from "./MainLayoutView";

/**
 * Orquestador del Layout Principal.
 * Se encarga de la lógica de permisos, estados de carga y redirecciones.
 */
export function MainLayout() {
  const toast = useToast();
  
  // 1. Datos de configuración para Header y Sidebar
  const { headerConfig, sidebarConfig } = useMainLayout();
  
  // 2. Estado de la sesión y permisos
  const token = useSessionStore((state) => state.token);
  const { hasPermissions } = useAbility();
  
  // 3. Petición al servidor (React Query)
  const { 
    isLoading, 
    isError, 
    isSuccess, 
    isFetching 
  } = useGetMePermissions();

  /**
   * Efecto de control de acceso:
   * Valida si el usuario tiene permisos una vez que la petición termina.
   */
  useEffect(() => {
    // Si no hay token, el usuario está haciendo logout o no ha entrado.
    // Salimos del efecto para evitar Toasts innecesarios.
    if (!token) return;

    // Solo validamos cuando la petición ha tenido éxito y no se está refrescando
    if (isSuccess && !isFetching) {
      if (!hasPermissions) {
        toast.addToast("warning", "Cuenta sin permisos asignados.");
        headerConfig.onLogout();
      }
    }

    // Si la API de permisos falla (ej: 401, 403 o error de red)
    if (isError) {
      toast.addToast("error", "Error al recuperar sesión o permisos.");
      headerConfig.onLogout();
    }
  }, [isError, isSuccess, isFetching, hasPermissions, token]);

  /**
   * LÓGICA DE RENDERIZADO (Prioridades):
   */

  // A. Estado de Carga: Mientras se verifica el token y no hay permisos en RAM
  if ((isLoading || isFetching) && !hasPermissions) {
    return <DashboardSkeleton message="Configurando entorno de trabajo..." />;
  }

  // B. Éxito: Si tenemos permisos (ya sea por carga inicial o persistencia en RAM)
  if (hasPermissions) {
    return (
      <MainLayoutView 
        headerConfig={headerConfig} 
        sidebarConfig={sidebarConfig} 
      />
    );
  }

  // C. Fallback: Si no hay token o la validación falló, el useEffect 
  // redirigirá al login, por lo que aquí no mostramos nada.
  return null;
}