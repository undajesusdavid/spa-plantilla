export interface ItemLink {
    label: string;
    to: string;
}

export interface MenuItem {
    title: string,
    icon: React.ReactNode,
    links: ItemLink[]
}

export type SideBarData = {
    menuItems: MenuItem[];
}

export type HeaderData = {
    logo: string,
    profile: {
        link: string;
        username: string;
        avatarUrl?: string;
    };
    onLogout: () => void;
    links: ItemLink[];
}