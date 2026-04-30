import { useIsMutating } from "@tanstack/react-query";
import styles from "./LoginPage.module.css";
import { useLoginLayout } from "./useLoginPage";
import { LoginByUsername } from "@features";
import { TopProgressBar } from "@src/06-shared/ui/feedback";


export function LoginPage() {
  const { config } = useLoginLayout();
  const isMutating = useIsMutating();
  
  
  return (
    <div className={styles.loginWrapper}>

      {isMutating && <TopProgressBar />}
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
