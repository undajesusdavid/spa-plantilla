import { Outlet } from "react-router-dom";
import { ModalProvider } from "./ModalProvider";
import { ToastProvider } from "./ToastProvider";

export const UiProvider = () => {
  return (
    <ToastProvider>
      <ModalProvider>
        <Outlet />
      </ModalProvider>
    </ToastProvider>
  );
};
