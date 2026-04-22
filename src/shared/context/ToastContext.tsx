import React, { createContext, useContext, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { Toast, ToastType } from "../components/overlay/Toast";
import styles from "../components/overlay/Toast/Toast.module.css";

const DEFAULT_POSITION: ToastPosition = "top-center";
const DEFAULT_WIDTH = "320px";

// Definimos las posiciones posibles
export type ToastPosition =
  | "top-right"
  | "top-left"
  | "top-center"
  | "bottom-right"
  | "bottom-left"
  | "bottom-center";

interface ToastItem {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
}

interface ToastContextType {
  addToast: (type: ToastType, message: string, title?: string) => void;
  // Permitimos configurar la posición y ancho globalmente
  config: (position: ToastPosition, width?: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  // --- CONFIGURACIÓN POR DEFECTO AQUÍ ---
  const [position, setPosition] = useState<ToastPosition>(DEFAULT_POSITION);
  const [customWidth, setCustomWidth] = useState<string>(DEFAULT_WIDTH);

  const addToast = useCallback(
    (type: ToastType, message: string, title?: string) => {
      const id = window.crypto.randomUUID();
      setToasts((prev) => [...prev, { id, type, message, title }]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Función para cambiar la configuración en caliente si fuera necesario
  const config = useCallback((pos: ToastPosition, width?: string) => {
    setPosition(pos);
    if (width) setCustomWidth(width);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, config }}>
      {children}
      {typeof document !== "undefined" &&
        createPortal(
          <div
            className={`${styles.toastContainer} ${styles[position]}`}
            style={{ "--container-width": customWidth } as React.CSSProperties}
          >
            {toasts.map((t) => (
              <Toast key={t.id} {...t} onClose={removeToast} />
            ))}
          </div>,
          document.body,
        )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context)
    throw new Error("useToast debe usarse dentro de un ToastProvider");
  return context;
};
