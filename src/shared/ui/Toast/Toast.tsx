import React, { useEffect } from "react";
import styles from "./Toast.module.css";

export type ToastType = "success" | "error" | "warning" | "info";

export interface ToastProps {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
  onClose: (id: string) => void;
}

const icons: Record<ToastType, string> = {
  success: "check_circle",
  error: "error",
  warning: "warning",
  info: "info",
};

export const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`} role="alert">
      {/* Usando Google Material Symbols o cualquier librería de iconos */}
      <span className={`material-symbols-outlined ${styles.icon}`}>
        {icons[type]}
      </span>
      <div className={styles.content}>
        {title && <span className={styles.title}>{title}</span>}
        <p className={styles.message}>{message}</p>
      </div>
      <button
        className={styles.closeBtn}
        onClick={() => onClose(id)}
        aria-label="Cerrar"
      >
        &times;
      </button>
    </div>
  );
};
