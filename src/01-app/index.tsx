import { RouterProvider } from "react-router-dom";
import { ToastProvider } from "@context/ToastContext";
import { ModalProvider } from "@context/ModalContext";
import { router } from "@routes";
import "./styles/main.css";

const App = () => {
  return (
    <ToastProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </ToastProvider>
  );
}

export default App;
