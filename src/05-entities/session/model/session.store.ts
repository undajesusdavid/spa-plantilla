
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { SessionStore } from './session.types';
import { jwtDecode } from 'jwt-decode';
import { queryClient } from '@shared/api/query-client';

const LOCAL_KEY = 'undasystems_session';


export const useSessionStore = create<SessionStore>()(
    persist(
        (set) => ({
            token: null,
            userId: null,
            username: null,
            permissions: [],
            roles: [],

            setSessionAuth: (token) => {

                try {
                    const decoded: any = jwtDecode(token);
                    set({
                        token,
                        username: decoded.sub || decoded.username,
                        userId: decoded.id
                    });
                } catch (error) {
                    console.error("Token inválido", error);
                }
            },

            setPermissions: (permissions) =>
                set({ permissions }),

            setRoles: (roles) =>
                set({ roles }),

            logout: () => {
                set({ token: null, userId: null, username: null, permissions: [], roles: [] });
                useSessionStore.persist.clearStorage();
                queryClient.clear();
                window.location.href = '/login';
            }

        }),
        {
            name: LOCAL_KEY,
            storage: createJSONStorage(() => localStorage),
            //Con Partialize, solo persistimos el token
            partialize: (state) => ({ 
                token: state.token, 
                //permissions: state.permissions 
            }),
            onRehydrateStorage: (state) => {
                if (state?.token) {
                    try {
                        const decoded: any = jwtDecode(state.token);
                        state.username = decoded.sub || decoded.username;
                        state.userId = decoded.id;
                    } catch {
                        state.logout(); // Si el token está mal, limpiamos todo
                    }
                }
            }
        }
    )
);




// Selectores útiles para no importar todo el store
export const useIsAuth = () => useSessionStore((state) => !!state.token);
export const useToken = () => useSessionStore((state) => state.token);
export const usePermissions = () => useSessionStore((state) => state.permissions);
export const useRoles = () => useSessionStore((state) => state.roles);