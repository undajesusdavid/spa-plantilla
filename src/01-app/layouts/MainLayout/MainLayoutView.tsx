import { Outlet } from "react-router-dom";
import { HeaderLayout,SideBarLayout, Breadcrumbs } from "./ui";
import { HeaderData, SideBarData } from "./model/MainLayoutProps";
import styles from "./MainLayout.module.css";

interface MainLayoutViewProps {
  headerConfig: HeaderData;
  sidebarConfig: SideBarData;
}

export const MainLayoutView = ({ headerConfig, sidebarConfig }: MainLayoutViewProps) => (
  <div className={styles.rootLayout}>
    <HeaderLayout config={headerConfig} />
    <section className={styles.appMain}>
      <SideBarLayout config={sidebarConfig} />
      <main className={styles.mainContent}>
        <Breadcrumbs homeLabel="Home" />
        <Outlet />
      </main>
    </section>
  </div>
);