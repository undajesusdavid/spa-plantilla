import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ToastProvider } from "@context/ToastContext";
import { ModalProvider } from "@context/ModalContext";
import { router } from "@routes";
import "./styles/main.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </ToastProvider>
    </QueryClientProvider>
  );
};

export default App;
