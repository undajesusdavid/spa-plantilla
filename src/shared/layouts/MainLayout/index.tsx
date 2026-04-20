import { ReactNode} from "react";
import styles from "./MainLayout.module.css";
import Breadcrumbs from "./breadcrumbs";
import { HeaderLayout } from "./header/HeaderLayout";
import { SideBarLayout } from "./sidebar/SideBarLayout";
import { useMainLayout } from "./useMainLayout";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {

  const { HeaderConfig, SideBarConfig } = useMainLayout();

  return (
    <div className={styles.rootLayout}>
      <HeaderLayout config={HeaderConfig} />
      <section className={styles.appMain}>
        <SideBarLayout config={SideBarConfig} />
        <main className={styles.mainContent}>
          <Breadcrumbs homeLabel="Home" />
          {children}
        </main>
      </section>
    </div>
  );
}
