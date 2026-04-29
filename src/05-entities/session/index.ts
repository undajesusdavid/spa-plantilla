import { useSessionStore } from "./model/session.store";

// Segmento API
export * from "./api/session.query";


// Segmento Model
export * from "./model/session.types";
export * from "./model/session.store";


/**
 * Acceso imperativo para archivos no-React (ej. interceptores de API)
 */
export const getPermissions = () => useSessionStore.getState().permissions;
export const getRoles = () => useSessionStore.getState().roles;
export const getSessionToken = () => useSessionStore.getState().token;
export const sessionLogout = () => useSessionStore.getState().logout();