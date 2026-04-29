import styles from "./MainLayout.module.css";
import { useGetMePermissions, useSessionStore } from "@entities/session";
import Breadcrumbs from "./breadcrumbs";
import { HeaderLayout } from "./header/HeaderLayout";
import { SideBarLayout } from "./sidebar/SideBarLayout";
import { useMainLayout } from "./useMainLayout";
import {  Outlet, useNavigate } from "react-router-dom";
import { DashboardSkeleton } from "@ui/feedback";
import { useToast } from "@shared/lib/providers/ToastProvider";
import { useEffect } from "react";



export function MainLayout() {
  const navigate = useNavigate();
  const toast = useToast();

  const { HeaderConfig, SideBarConfig } = useMainLayout();
  const { isLoading, isError } = useGetMePermissions();

  const logout = useSessionStore((state) => state.logout);
  const permissions = useSessionStore((state) => state.permissions);
  const roles = useSessionStore((state) => state.roles);
  const hasDataInStore = permissions.length > 0 || roles.length > 0;
  const showSkeleton = isLoading && !hasDataInStore;

  // Manejo de errores mediante un efecto
  useEffect(() => {
    if (isError) {
      // 1. Informamos al usuario
      toast.addToast("info", "No se pudieron cargar los permisos. Por favor, inicie sesión nuevamente.");
      
      // 2. Limpiamos la sesión en Zustand
      logout();
      
      // 3. Redirigimos al login (esto saca al usuario del skeleton)
      navigate("/login", { replace: true });
    }
  }, [isError, logout, navigate, toast]);

  if (showSkeleton) {
   return <DashboardSkeleton message="Cargando Recursos.." />;
  }

  return (
    <div className={styles.rootLayout}>
      <HeaderLayout config={HeaderConfig} />
      <section className={styles.appMain}>
        <SideBarLayout config={SideBarConfig} />
        <main className={styles.mainContent}>
          <Breadcrumbs homeLabel="Home" />
          <Outlet />
        </main>
      </section>
    </div>
  );
}
