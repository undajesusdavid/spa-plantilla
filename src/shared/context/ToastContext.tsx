import React, { createContext, useContext, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { Toast, ToastType } from "../ui/Toast";
import styles from "../ui/Toast/Toast.module.css";

interface ToastItem {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
}

interface ToastContextType {
  addToast: (type: ToastType, message: string, title?: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  // Función para añadir una notificación con ID único
  const addToast = useCallback(
    (type: ToastType, message: string, title?: string) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, type, message, title }]);
    },
    [],
  );

  // Función para eliminar (se pasa al componente Toast para el auto-close)
  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      {/* El Portal: Renderiza los toasts al final del <body> */}
      {typeof document !== "undefined" &&
        createPortal(
          <div className={styles.toastContainer}>
            {toasts.map((t) => (
              <Toast
                key={t.id}
                id={t.id}
                type={t.type}
                title={t.title}
                message={t.message}
                onClose={removeToast}
              />
            ))}
          </div>,
          document.body,
        )}
    </ToastContext.Provider>
  );
};

// Hook personalizado para usar en tus formularios
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast debe usarse dentro de un ToastProvider");
  }
  return context;
};
