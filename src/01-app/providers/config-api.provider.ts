import { useSessionStore } from "@src/05-entities/session/model";
import { injectApiConfig } from "@src/06-shared/api";

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
