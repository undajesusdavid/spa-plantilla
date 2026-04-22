import { ToastProvider } from "./shared/context/ToastContext";
import { ModalProvider } from "./shared/context/ModalContext";
import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return (
    <ToastProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </ToastProvider>
  );
}
