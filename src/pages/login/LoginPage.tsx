import { Navigate } from "react-router-dom";
import { LoginForm } from "../../modules/users/components/LoginForm";
import { useAuthStore } from "../../modules/users/store/auth.store";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const token = useAuthStore((state) => state.token);

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginCard}>
        {/* Espacio para el Logo */}
        <div className={styles.logoContainer}>
          {/* Si tienes un archivo de imagen, cámbialo por un <img /> */}
          <span className={styles.logoEmoji}>📁</span>
          {/* <img src="/logo-organizacion.png" alt="Logo" className={styles.logoImage} /> */}
        </div>

        <header className={styles.header}>
          <h1 className={styles.title}>Archivo CMP</h1>
          <p className={styles.subtitle}>
            Ingresa tus credenciales para acceder al sistema de gestión.
          </p>
        </header>

        <div className={styles.formContainer}>
          <LoginForm />
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
