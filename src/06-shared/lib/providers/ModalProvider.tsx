import React, { createContext, useContext, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { Modal } from "@ui/overlay/modal";

interface ModalOptions {
  title: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  width?: string;
  restrictClose?: boolean;
}

interface ModalContextType {
  openModal: (options: ModalOptions) => void;
  updateOptions: (options: Partial<ModalOptions>) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [modalOptions, setModalOptions] = useState<ModalOptions | null>(null);

  const updateOptions = useCallback((options: Partial<ModalOptions>) => {
    setModalOptions((prev) => (prev ? { ...prev, ...options } : null));
  }, []);

  const openModal = useCallback((options: ModalOptions) => {
    setModalOptions(options);
  }, []);

  const closeModal = useCallback(() => {
    setModalOptions(null);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, updateOptions, closeModal }}>
      {children}
      {modalOptions &&
        typeof document !== "undefined" &&
        createPortal(
          <Modal
            isOpen={!!modalOptions}
            onClose={closeModal}
            title={modalOptions.title}
            footer={modalOptions.footer}
            width={modalOptions.width}
            restrictClose={modalOptions.restrictClose}
          >
            {modalOptions.content}
          </Modal>,
          document.body,
        )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("useModal debe usarse dentro de un ModalProvider");
  return context;
};
