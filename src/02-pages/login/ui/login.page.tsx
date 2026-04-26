import styles from "./LoginPage.module.css";
import { useLoginLayout } from "../lib/useLoginPage";
import { LoginByUsername } from "@features";


export function LoginPage() {
  const { config } = useLoginLayout();
  
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginCard}>
        <div className={styles.logoContainer}>
          <img src={config.logo} alt="Logo" className={styles.logoImage} />
        </div>

        <header className={styles.header}>
          <h1 className={styles.title}>{config.title}</h1>
          <p className={styles.subtitle}>
            {config.description}
          </p>
        </header>

        <div className={styles.formContainer}>
           <LoginByUsername />
        </div>

        <footer style={{ marginTop: "2.5rem" }}>
          <p style={{ fontSize: "0.75rem", color: "#94a3b8", fontWeight: 500 }}>
            CENTRO DE MANEJO DE PROYECTOS
          </p>
        </footer>
      </div>
    </div>
  );
}
