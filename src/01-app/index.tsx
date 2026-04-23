import { ToastProvider } from "@context/ToastContext";
import { ModalProvider } from "@context/ModalContext";
import { router } from "@routes";
import { RouterProvider } from "react-router-dom";

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
