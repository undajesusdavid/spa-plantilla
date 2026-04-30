import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";

interface BreadcrumbsProps {
  homeLabel?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ homeLabel = "Inicio" }) => {
  const location = useLocation();

  // Dividimos la ruta: /proyectos/web -> ["", "proyectos", "web"]
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="Breadcrumb">
      <ol className={styles.breadcrumbs}>
        {/* Enlace a Inicio siempre presente */}
        <li className={styles.item}>
          <Link title={homeLabel} to="/" className={styles.link}>
            {homeLabel}
          </Link>
        </li>

        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return (
            <li key={to} className={styles.item}>
              <span className={styles.separator}>/</span>
              {last ? (
                <span className={`${styles.active} ${styles.capitalize}`}>
                  {value.replace(/-/g, " ")}
                </span>
              ) : (
                <Link to={to} className={`${styles.link} ${styles.capitalize}`}>
                  {value.replace(/-/g, " ")}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};


