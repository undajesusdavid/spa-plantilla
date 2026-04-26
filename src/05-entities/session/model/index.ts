import { useSessionStore } from "./store";

// entities/session/model/index.ts
export * from "./types.domain";
export * from "./types.ui";
export * from "./store";

/**
 * Acceso imperativo para archivos no-React (ej. interceptores de API)
 */
export const getSessionToken = () => useSessionStore.getState().token;
export const sessionLogout = () => useSessionStore.getState().logout();