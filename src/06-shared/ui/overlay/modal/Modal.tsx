import React, { useEffect } from "react";
import styles from "./Modal.module.css";
import { CloseIcon } from "@ui/Icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  width?: string;
  restrictClose?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  restrictClose = false,
  width = "450px",
}) => {
  // Cerrar con la tecla Esc
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={ !restrictClose ? onClose : undefined }>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        style={{ "--modal-width": width } as React.CSSProperties}
      >
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            className={styles.closeBtn}
            onClick={!restrictClose ? onClose : undefined}
            aria-label="Cerrar"
          >
            <CloseIcon size={18} />
          </button>
        </header>

        <div className={styles.content}>{children}</div>

        {footer && <footer className={styles.footer}>{footer}</footer>}
      </div>
    </div>
  );
};
