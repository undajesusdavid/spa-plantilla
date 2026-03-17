import React from "react";
import styles from "./Navbar.module.css";

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => (
  <li>
    <a href={href} className={styles.link}>
      {label}
    </a>
  </li>
);

export default NavItem;
