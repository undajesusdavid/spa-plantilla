import { NavLink } from "react-router-dom";
import styles from "./HeaderLayout.module.css";
import SmallButton from "@ui-base/buttons/small-button";
import { HeaderData } from "../MainLayoutProps";


export function HeaderLayout({ config }: { config: HeaderData }) {
 
  /** Renderizado de enlaces de navegación:
   * - Se mapean los enlaces definidos en HEADER_LINKS.
   * - Se añade un enlace dinámico para el perfil del usuario.
   */

  const renderLinks = () => (
    <div className={styles.navGroup}>
      {config.links.map((link) => (
        <NavLink key={link.to} to={link.to} className={styles.navLink}>
          {link.label}
        </NavLink>
      ))}
      {/* Link dinámico */}
      <NavLink to={config.profile.link} className={styles.navLink}>
        {config.profile.username}
      </NavLink>
    </div>
  );

  /** Renderizado de acciones:
   * - Se muestra un botón de notificaciones (simulado con un emoji).
   * - Se muestra un botón de "Salir" que ejecuta la función de logout.
   */

  const renderActions = () => (
    <div className={styles.actionsGroup}>
      <SmallButton variant="primary" onClick={config.onLogout}>
        Salir
      </SmallButton>
    </div>
  );

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.logo}>
          <img src={config.logo} alt="Logo" className={styles.logoImage} />
        </span>
        {/* <div className={styles.title}>
          Archivos CMP
          <div className={styles.subtitle}>sistema de archivos</div>
        </div> */}
      </div>
      <nav className={styles.nav}>
        {renderLinks()}
        {renderActions()}
      </nav>
    </header>
  );
}
