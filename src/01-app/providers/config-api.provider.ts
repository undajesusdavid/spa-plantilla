import { useSessionStore } from "@entities/session";
import { injectApiConfig } from "@shared/api";

export const setupApi = () => {
    injectApiConfig({
        getToken: () => useSessionStore.getState().token,
        onUnauthorized: () => {
            // Aquí tienes todo el poder:
            useSessionStore.getState().logout();
            window.location.href = "/login"; // Redirección forzada
        },
    });
};
