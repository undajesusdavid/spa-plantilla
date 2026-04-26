
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { SessionStore } from './types.ui';

const LOCAL_KEY = 'undasystems_session';

export const useSessionStore = create<SessionStore>()(
    persist(
        (set) => ({
            token: null,
            userId: null,
            username: null,

            setSession: (token, userId, username) =>
                set({ token, userId, username }),

            logout: () =>
                set({ token: null, userId: null, username: null }),
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