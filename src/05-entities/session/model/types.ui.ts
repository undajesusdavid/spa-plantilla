import { Session } from "./types.domain";

export interface SessionActions {
    setSession: (token: string, userId: string, username: string) => void;
    logout: () => void;
}

export type SessionStore = Session & SessionActions;