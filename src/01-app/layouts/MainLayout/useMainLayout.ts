// Tipos
import { HeaderData, SideBarData } from "./MainLayoutProps";
// Constantes
import { HEADER_LINKS } from "@config/layout.header-links";
import { MENU_ITEMS } from "@config/layout.menu-items";
// Hooks
import { useSessionStore } from "@entities/session";

//imagenes
import logo from '@assets/logotipo.png';
import { useNavigate } from "react-router";


export function useMainLayout() {
    const { logout, username } = useSessionStore();
    const navigate = useNavigate();

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
        menuItems: MENU_ITEMS,
    };

    return { HeaderConfig, SideBarConfig };
}