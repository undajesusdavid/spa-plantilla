
export interface SessionAuth {
    token: string | null;
    userId: string | null;
    username: string | null;
}

export interface SessionDataAccess {
    permissions: string[];
    roles: string[];
}

// Tipos de acciones
export interface SessionActions {
    setSessionAuth: (token: string, userId: string, username: string) => void;
    setPermissions: (permissions: string[]) => void;
    setRoles: (roles: string[]) => void;
    logout: () => void;
}

export type SessionStore = SessionAuth & SessionDataAccess & SessionActions;