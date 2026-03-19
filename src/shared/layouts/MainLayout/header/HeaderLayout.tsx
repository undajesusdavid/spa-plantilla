import { NavLink } from "react-router-dom";
import styles from "./HeaderLayout.module.css";
import { HeaderItems } from "../../TypeLayoutProps";

interface HeaderProps {
  headerItems: HeaderItems;
}

export function HeaderLayout({ headerItems }: HeaderProps) {

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.logo}>📁</span>
        <div className={styles.title}>
          Archivos CMP
          <div className={styles.subtitle}>sistema de archivos</div>
        </div>
        
      </div>
      <nav className={styles.nav}>
        {headerItems.links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? styles.navLinkActive : styles.navLink
            }
          >
            {link.label}
          </NavLink>
        ))}
        {headerItems.actions}
      </nav>
    </header>
  );
}
