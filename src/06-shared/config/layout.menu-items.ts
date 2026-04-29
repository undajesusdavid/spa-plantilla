import { Permission } from "@shared/lib/util/map-permissions";

interface MenuLink {
  label: string;
  to: string;
  permission?: Permission;
}

interface MenuItem {
  icon: string;
  title: string;
  links: MenuLink[];
  permission?: Permission;
}

export const MENU_ITEMS: MenuItem[] = [
    {
        icon: "👥",
        title: "Usuarios",
        
        links: [
            { label: "Lista de Usuarios", to: "/users", permission: "user:read" },
            { label: "Crear Usuario", to: "/users/create", permission: "user:create" },
        ],
    },
    {
        icon: "🫆",
        title: "Seguridad",
        links: [
            { label: "Lista de Roles", to: "/security/roles", permission: "role:read" },
            { label: "Lista de Permisos", to: "/security/permissions", permission: "permission:read" },
        ],
    },
];