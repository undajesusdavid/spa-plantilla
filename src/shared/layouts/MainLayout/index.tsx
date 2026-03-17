import { ReactNode} from "react";
import styles from "./MainLayout.module.css";

import Breadcrumbs from "./breadcrumbs";
import { HeaderLayout } from "./header/HeaderLayout";
import { MenuLayout } from "./menu/MenuLayout";
import { HeaderItems, MenuItem } from "../TypeLayoutProps";

interface MainLayoutProps {
  children: ReactNode;
  menuItems: MenuItem[];
  headerItems: HeaderItems;
}

export function MainLayout({ children, menuItems, headerItems }: MainLayoutProps) {
  return (
    <div className={styles.rootLayout}>
      <HeaderLayout headerItems={headerItems}/>
      <section className={styles.appMain}>
        <MenuLayout items={menuItems} />
        <main className={styles.mainContent}>
          <Breadcrumbs homeLabel="Home" />
          {children}
        </main>
      </section>
    </div>
  );
}
