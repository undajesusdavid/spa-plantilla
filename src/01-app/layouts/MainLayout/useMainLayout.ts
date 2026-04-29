// Tipos
import { HeaderData, SideBarData } from "./MainLayoutProps";
// Constantes
import { HEADER_LINKS } from "@config/layout.header-links";
import { MENU_ITEMS } from "@config/layout.menu-items";
// Hooks
import { useAbility, useSessionStore } from "@entities/session";

//imagenes
import logo from '@assets/logotipo.png';
import { useNavigate } from "react-router";


export function useMainLayout() {
    const { logout, username } = useSessionStore();
    const navigate = useNavigate();
    const { can } = useAbility();

    // Filtramos el menú según los permisos del usuario
    const filteredMenu = MENU_ITEMS.map(item => ({
        ...item,
        // Solo dejamos los links que el usuario SÍ puede ver
        links: item.links.filter(link => !link.permission || can(link.permission))
    })).filter(item => item.links.length > 0); // Opcional: ocultar sección si no tiene links visibles

    // Configuración del Header
    const HeaderConfig: HeaderData = {
        logo: logo,
        profile: {
            link: "/perfil",
            username: username || "Usuario",
            avatarUrl: undefined, // Aquí podrías agregar la URL del avatar si la tienes
        },
        onLogout: () => {
            logout();
            navigate("/login", { replace: true });
        },
        links: HEADER_LINKS,
    };

    // Configuración del SideBar
    const SideBarConfig: SideBarData = {
        menuItems: filteredMenu,
    };

    return { HeaderConfig, SideBarConfig };
}