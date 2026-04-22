import React from "react";
import styles from "./ErrorDisplay.module.css";

interface ErrorDisplayProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  errorCode?: string | number;
  className?: string;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  title = "Algo no salió como esperábamos",
  message = "No pudimos cargar la información en este momento. Por favor, inténtalo de nuevo.",
  onRetry,
  errorCode,
  className = "",
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.iconWrapper}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={styles.icon}
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>

      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>{message}</p>

      {errorCode && <span className={styles.code}>Error ref: {errorCode}</span>}

      {onRetry && (
        <button
          onClick={onRetry}
          className={styles.retryButton}
          aria-label="Reintentar carga"
        >
          Reintentar
        </button>
      )}
    </div>
  );
};

