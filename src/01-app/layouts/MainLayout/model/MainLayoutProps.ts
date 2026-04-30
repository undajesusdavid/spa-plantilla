// src/03-widgets/layout/ui/MainLayout.props.ts
import { Permission } from "@shared/lib/util/map-permissions";

export interface ItemLink {
  label: string;
  to: string;
  permission?: Permission; // 👈 Agregamos esto
}

export interface MenuItem {
  title: string;
  icon: React.ReactNode;
  links: ItemLink[];
}

export interface SideBarData {
  menuItems: MenuItem[];
}

export interface HeaderData {
  logo: string;
  profile: {
    link: string;
    username: string;
    avatarUrl?: string;
  };
  onLogout: () => void;
  links: ItemLink[];
}