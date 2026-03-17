import React from "react";
import styles from "./Navbar.module.css";

const NavActions: React.FC = () => (
  <div className={styles.actions}>
    <button className={styles.btnSecondary} type="button">
      Login
    </button>
    <button className={styles.btnPrimary} type="button">
      Empezar
    </button>
  </div>
);

export default NavActions;
