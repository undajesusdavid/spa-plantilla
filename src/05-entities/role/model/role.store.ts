import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Role } from "./role.schema";

interface RoleState {
    roles: Role[];
    currentRole: Role | null;
    isLoading: boolean;
    actions: {
        setRoles: (roles: Role[]) => void;
        setCurrentRole: (role: Role | null) => void;
        updateRoleInList: (updatedRole: Role) => void;
        clearStorage: () => void;
    };
}

/**
 * Store de Dominio para Roles
 * Mantenemos las acciones separadas del estado para optimizar renders
 */
export const useRoleStore = create<RoleState>()(
    devtools(
        (set) => ({
            roles: [],
            currentRole: null,
            isLoading: false,
            actions: {
                setRoles: (roles) =>
                    set({ roles }, false, "role/setRoles"),

                setCurrentRole: (role) =>
                    set({ currentRole: role }, false, "role/setCurrentRole"),

                updateRoleInList: (updatedRole) =>
                    set(
                        (state) => ({
                            roles: state.roles.map((r) => (r.id === updatedRole.id ? updatedRole : r)),
                        }),
                        false,
                        "role/updateRoleInList"
                    ),

                clearStorage: () =>
                    set({ roles: [], currentRole: null }, false, "role/clearStorage"),
            },
        }),
        { name: "RoleEntityStore" }
    )
);

/**
 * Selectores (Hooks) para consumo en componentes
 */
export const useRoles = () => useRoleStore((s) => s.roles);
export const useCurrentRole = () => useRoleStore((s) => s.currentRole);
export const useRoleActions = () => useRoleStore((s) => s.actions);