import styles from "./MainLayout.module.css";
import Breadcrumbs from "./breadcrumbs";
import { HeaderLayout } from "./header/HeaderLayout";
import { SideBarLayout } from "./sidebar/SideBarLayout";
import { useMainLayout } from "./useMainLayout";
import { Outlet } from "react-router-dom";


export function MainLayout() {

  const { HeaderConfig, SideBarConfig } = useMainLayout();

  return (
    <div className={styles.rootLayout}>
      <HeaderLayout config={HeaderConfig} />
      <section className={styles.appMain}>
        <SideBarLayout config={SideBarConfig} />
        <main className={styles.mainContent}>
          <Breadcrumbs homeLabel="Home" />
          <Outlet />
        </main>
      </section>
    </div>
  );
}
