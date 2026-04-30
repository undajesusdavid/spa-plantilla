import React, { 
  createContext, 
  useContext, 
  useState, 
  useCallback, 
  useMemo 
} from "react";
import { createPortal } from "react-dom";

/** --- TIPOS --- **/
export type ToastType = "success" | "error" | "info" | "warning";
export type ToastPosition = "top-right" | "top-left" | "top-center" | "bottom-right" | "bottom-left" | "bottom-center";

export interface ToastOptions {
  duration?: number;
  title?: string;
}

interface ToastItem extends ToastOptions {
  id: string;
  type: ToastType;
  message: string;
}

interface ToastConfig {
  position: ToastPosition;
  width: string;
  limit: number;
  stack: boolean;
  duration: number;
}

interface ToastContextType {
  addToast: (type: ToastType, message: string, options?: ToastOptions) => void;
  removeToast: (id: string) => void;
  config: (newConfig: Partial<ToastConfig>) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

/** --- COMPONENTE VISUAL MEJORADO --- **/
const ToastComponent: React.FC<ToastItem & { onClose: () => void }> = ({
  type,
  title,
  message,
  onClose,
}) => {
  // Configuración de colores e iconos por tipo
  const config = {
    success: { color: "#10b981", icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> },
    error: { color: "#ef4444", icon: <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /> },
    warning: { color: "#f59e0b", icon: <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /> },
    info: { color: "#3b82f6", icon: <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
  };

  const active = config[type];

  return (
    <div style={toastCardStyles} onClick={onClose}>
      {/* Indicador lateral de color */}
      <div style={{ ...accentBarStyles, backgroundColor: active.color }} />
      
      {/* Icono */}
      <div style={{ ...iconContainerStyles, color: active.color }}>
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ width: 24, height: 24 }}>
          {active.icon}
        </svg>
      </div>

      {/* Contenido de texto */}
      <div style={textContainerStyles}>
        {title && <div style={titleStyles}>{title}</div>}
        <div style={messageStyles}>{message}</div>
      </div>

      {/* Botón cerrar */}
      <button style={closeButtonStyles}>&times;</button>
    </div>
  );
};

/** --- PROVEEDOR --- **/
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [globalConfig, setGlobalConfig] = useState<ToastConfig>({
    position: "top-right",
    width: "380px",
    limit: 5,
    stack: true,
    duration: 5000,
  });

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback((type: ToastType, message: string, options?: ToastOptions) => {
    const id = window.crypto.randomUUID();
    setToasts((prev) => {
      const newToast = { id, type, message, ...options };
      if (!globalConfig.stack) return [newToast];
      const updated = [...prev, newToast];
      return updated.length > globalConfig.limit ? updated.slice(-globalConfig.limit) : updated;
    });
    const timeout = options?.duration ?? globalConfig.duration;
    if (timeout !== Infinity) setTimeout(() => removeToast(id), timeout);
  }, [globalConfig, removeToast]);

  const config = useCallback((newConfig: Partial<ToastConfig>) => {
    setGlobalConfig((prev) => ({ ...prev, ...newConfig }));
  }, []);

  const contextValue = useMemo(() => ({ addToast, removeToast, config }), [addToast, removeToast, config]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {typeof document !== "undefined" && createPortal(
        <div style={getContainerStyles(globalConfig)}>
          {toasts.map((t) => (
            <ToastComponent key={t.id} {...t} onClose={() => removeToast(t.id)} />
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast debe usarse dentro de ToastProvider");
  return context;
};

/** --- ESTILOS MEJORADOS (OBJETOS CSS) --- **/

const toastCardStyles: React.CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "flex-start",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  padding: "16px",
  marginBottom: "8px",
  cursor: "pointer",
  overflow: "hidden",
  pointerEvents: "auto",
  border: "1px solid #f3f4f6",
  animation: "toast-in 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
};

const accentBarStyles: React.CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  width: "4px",
};

const iconContainerStyles: React.CSSProperties = {
  marginRight: "12px",
  marginTop: "2px",
  flexShrink: 0,
};

const textContainerStyles: React.CSSProperties = {
  flexGrow: 1,
  paddingRight: "20px",
};

const titleStyles: React.CSSProperties = {
  fontWeight: 700,
  fontSize: "14px",
  color: "#111827", // Gris muy oscuro/negro
  marginBottom: "4px",
  lineHeight: "1.25",
};

const messageStyles: React.CSSProperties = {
  fontSize: "13px",
  color: "#6b7280", // Gris suave para el contenido
  lineHeight: "1.4",
};

const closeButtonStyles: React.CSSProperties = {
  position: "absolute",
  top: "12px",
  right: "12px",
  background: "none",
  border: "none",
  color: "#9ca3af",
  fontSize: "18px",
  cursor: "pointer",
  lineHeight: 1,
};

function getContainerStyles(config: ToastConfig): React.CSSProperties {
  const isTop = config.position.startsWith("top");
  const isCenter = config.position.endsWith("center");
  const isRight = config.position.endsWith("right");

  return {
    position: "fixed",
    zIndex: 9999,
    padding: "20px",
    width: config.width,
    maxWidth: "90vw",
    top: isTop ? 0 : "auto",
    bottom: isTop ? "auto" : 0,
    left: isCenter ? "50%" : isRight ? "auto" : 0,
    right: isRight ? 0 : "auto",
    transform: isCenter ? "translateX(-50%)" : "none",
    display: "flex",
    flexDirection: isTop ? "column" : "column-reverse",
    pointerEvents: "none",
  };
}