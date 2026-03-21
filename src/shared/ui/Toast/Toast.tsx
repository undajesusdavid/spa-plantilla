import React, { useEffect, useState, useCallback } from "react";
import styles from "./Toast.module.css";
import {
  SuccessIcon,
  ErrorIcon,
  WarningIcon,
  InfoIcon,
  CloseIcon,
} from "./Icons";

export type ToastType = "success" | "error" | "warning" | "info";

export interface ToastProps {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
  onClose: (id: string) => void;
}

const iconMap: Record<ToastType, React.ReactNode> = {
  success: <SuccessIcon size="100%" />,
  error: <ErrorIcon size="100%" />,
  warning: <WarningIcon size="100%" />,
  info: <InfoIcon size="100%" />,
};

export const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose,
}) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => onClose(id), 250);
  }, [id, onClose]);

  useEffect(() => {
    const timer = setTimeout(handleClose, duration);
    return () => clearTimeout(timer);
  }, [duration, handleClose]);

  return (
    <div
      className={`
        ${styles.toast} 
        ${styles[type]} 
        ${isExiting ? styles.fadeOut : styles.fadeIn}
      `}
      role="alert"
    >
      <div className={styles.accentLine} />

      <div className={styles.mainContent}>
        <div className={styles.iconWrapper}>{iconMap[type]}</div>

        <div className={styles.textWrapper}>
          {title && <h1 className={styles.title}>{title}</h1>}
          <p className={styles.message}>{message}</p>
        </div>
      </div>

      <button
        className={styles.closeBtn}
        onClick={handleClose}
        aria-label="Cerrar"
      >
        <div className={styles.closeIconWrapper}>
          <CloseIcon size="100%" />
        </div>
      </button>
    </div>
  );
};
