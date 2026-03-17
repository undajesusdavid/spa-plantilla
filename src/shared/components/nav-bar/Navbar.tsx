import React, { ReactNode } from "react";
import styles from "./Navbar.module.css";
import NavItem from "./NavItem";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logo: ReactNode;
  links: NavLink[];
  actions?: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ logo, links, actions }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>{logo}</div>

        <ul className={styles.navLinks}>
          {links.map((link) => (
            <NavItem key={link.label} {...link} />
          ))}
        </ul>

        <div className={styles.actionsContainer}>{actions}</div>
      </div>
    </nav>
  );
};

export default Navbar;
