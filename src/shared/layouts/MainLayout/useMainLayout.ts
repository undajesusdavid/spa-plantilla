// Tipos
import { HeaderData, SideBarData } from "./MainLayoutProps";
// Constantes
import { HEADER_LINKS } from "../../constants/layout.header-links";
import { MENU_ITEMS } from "../../constants/layout.menu-items";
// Hooks
import { useAuthStore } from "../../../modules/users";

//imagenes
import logo from '@/assets/logotipo.png';

export function useMainLayout() {
    const { logout, username } = useAuthStore();

    // Configuración del Header
    const HeaderConfig: HeaderData = {
        logo: logo,
        profile: {
            link: "/perfil",
            username: username || "Usuario",
            avatarUrl: undefined, // Aquí podrías agregar la URL del avatar si la tienes
        },
        onLogout: logout,
        links: HEADER_LINKS,
    };

    // Configuración del SideBar
    const SideBarConfig: SideBarData = {
        menuItems: MENU_ITEMS,
    };

    return { HeaderConfig, SideBarConfig };
}