import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./SideBarLayout.module.css";
import { SideBarData } from "../MainLayoutProps";

export function SideBarLayout({ config }: { config: SideBarData }) {
  const { pathname } = useLocation();
  const [openModule, setOpenModule] = useState<string | null>(null);

  // Lógica para abrir el módulo si alguna de sus sub-rutas está activa
  useEffect(() => {
    const activeModule = config.menuItems.find((module) =>
      module.links.some((link) => {
        // Si el link es la raíz '/', comparamos exacto, si no, usamos startsWith
        return link.to === "/"
          ? pathname === "/"
          : pathname.startsWith(link.to);
      }),
    );
    if (activeModule) setOpenModule(activeModule.title);
  }, [pathname, config.menuItems]);

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {config.menuItems.map((module) => {
          const isOpen = openModule === module.title;

          // El módulo se resalta si estamos dentro de cualquiera de sus rutas
          const isModuleActive = module.links.some((link) =>
            link.to === "/" ? pathname === "/" : pathname.startsWith(link.to),
          );

          return (
            <div key={module.title} className={styles.moduleWrapper}>
              <div
                className={`${styles.moduleHeader} ${isModuleActive ? styles.activeHeader : ""}`}
                onClick={() => setOpenModule(isOpen ? null : module.title)}
              >
                <span className={styles.icon}>{module.icon}</span>
                <span className={styles.title}>{module.title}</span>
                <span
                  className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}
                />
              </div>

              <div
                className={`${styles.collapsible} ${isOpen ? styles.expanded : ""}`}
              >
                <div className={styles.submenuContent}>
                  {module.links.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      /* AGREGAMOS 'end' para evitar el doble activo */
                      end
                      className={({ isActive }) =>
                        `${styles.link} ${isActive ? styles.linkActive : ""}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
