// src/03-widgets/layout/model/useMainLayout.ts
import { useNavigate } from "react-router-dom";
import { useSessionStore, useAbility } from "@entities/session";
import { MENU_ITEMS } from "@config/layout.menu-items";
import { HEADER_LINKS } from "@config/layout.header-links";
import logo from '@assets/logotipo.png';

// Importamos las interfaces para asegurar el tipado de retorno
import { HeaderData, SideBarData } from "./MainLayoutProps";

export function useMainLayout() {
  const { logout, username } = useSessionStore();
  const navigate = useNavigate();
  const { can } = useAbility();

  /**
   * 1. Procesamos el Menú Lateral
   * Filtramos secciones y links basados en permisos.
   */
  const filteredMenuItems = MENU_ITEMS.map((item) => ({
    ...item,
    links: item.links.filter((link) => !link.permission || can(link.permission)),
  })).filter((item) => item.links.length > 0);

  /**
   * 2. Acción de Logout
   */
  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  /**
   * 3. Configuración del Header
   * Ajustado a tu interfaz HeaderData (con objeto profile y links)
   */
  const headerConfig: HeaderData = {
    logo: logo,
    profile: {
      link: "/perfil",
      username: username || "Usuario",
      avatarUrl: undefined, // Puedes vincularlo a una propiedad del store si existe
    },
    onLogout: handleLogout,
    links: HEADER_LINKS,
  };

  /**
   * 4. Configuración del SideBar
   */
  const sidebarConfig: SideBarData = {
    menuItems: filteredMenuItems,
  };

  return { 
    headerConfig, 
    sidebarConfig 
  };
}