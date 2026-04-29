import { QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "@shared/lib/providers/ModalProvider";
import { ToastProvider } from "@shared/lib/providers/ToastProvider";
import { Outlet, useNavigation } from "react-router-dom";
import "./styles/main.css";
import { queryClient } from "@shared/api/query-client";
import { TopProgressBar } from "@src/06-shared/ui/feedback";

const App = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <QueryClientProvider client={queryClient}>
      {isLoading && <TopProgressBar />}
      <ToastProvider>
        <ModalProvider>
          <Outlet />
        </ModalProvider>
      </ToastProvider>
    </QueryClientProvider>
  );
};

export default App;
