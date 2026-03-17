import styles from "./Loading.module.css";

interface LoadingProps {
  /** Texto opcional a mostrar debajo del spinner */
  label?: string;
  /** Si es true, ocupa todo el alto de la pantalla (centrado) */
  fullScreen?: boolean;
}

export function Loading({ label, fullScreen = false }: LoadingProps) {
  return (
    <div
      className={`${styles.container} ${fullScreen ? styles.fullScreen : ""}`}
    >
      <div className={styles.spinnerWrapper}>
        {/* Spinner SVG Elegante */}
        <svg
          className={styles.spinner}
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Círculo de fondo (pálido) */}
          <circle
            className={styles.carter}
            cx="25"
            cy="25"
            r="20"
            strokeWidth="4"
          />
          {/* Arco animado (color primario) */}
          <circle
            className={styles.path}
            cx="25"
            cy="25"
            r="20"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}
