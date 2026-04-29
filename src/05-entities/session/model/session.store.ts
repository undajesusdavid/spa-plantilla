
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { SessionStore } from './session.types';

const LOCAL_KEY = 'undasystems_session';

export const useSessionStore = create<SessionStore>()(
    persist(
        (set) => ({
            token: null,
            userId: null,
            username: null,
            permissions: [],
            roles: [],

            setSessionAuth: (token, userId, username) =>
                set({ token, userId, username }),

            setPermissions: (permissions) =>
                set({ permissions }),

            setRoles: (roles) =>
                set({ roles }),

            logout: () =>
                set({ token: null, userId: null, username: null, permissions: [], roles: [] }),
        }),
        {
            name: LOCAL_KEY,
            storage: createJSONStorage(() => localStorage),
        }
    )
);

// Selectores útiles para no importar todo el store
export const useIsAuth = () => useSessionStore((state) => !!state.token);
export const useToken = () => useSessionStore((state) => state.token);
export const usePermissions = () => useSessionStore((state) => state.permissions);
export const useRoles = () => useSessionStore((state) => state.roles);