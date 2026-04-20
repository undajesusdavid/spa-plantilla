export const MENU_ITEMS = [
    {
        icon: "👥",
        title: "Usuarios",
        links: [
            { label: "Lista de Usuarios", to: "/users" },
            { label: "Crear Usuario", to: "/users/create" },
        ],
    },
    {
        icon: "🫆",
        title: "Seguridad",
        links: [
            { label: "Lista de Roles", to: "/security/roles" },
            { label: "Lista de Permisos", to: "/security/permissions" },
        ],
    },
];