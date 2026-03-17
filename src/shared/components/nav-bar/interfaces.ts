export interface NavItemConfig {
    label: string;
    href: string;
}

export interface NavbarProps {
    logo?: React.ReactNode;
    links: NavItemConfig[];
    actions?: React.ReactNode;
    className?: string; // Para permitir estilos extra desde fuera
}