export interface ItemLink {
    label: string;
    to: string;
}

export interface MenuItem {
    title: string,
    icon: React.ReactNode,
    links: ItemLink[]
}


export interface HeaderItems {
    logo?: React.ReactNode;
    links: ItemLink[];
    actions?: React.ReactNode;
    className?: string; // Para permitir estilos extra desde fuera
}