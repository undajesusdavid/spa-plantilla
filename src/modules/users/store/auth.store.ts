import create from 'zustand';

type AuthState = {
  token: string | null;
  userId: string | null;
  username: string | null;
  setAuth: (token: string, userId: string, username: string) => void;
  logout: () => void;
};

const LOCAL_KEY = 'archivo_auth';

const loadInitial = (): Omit<AuthState, 'setAuth' | 'logout'> => {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (!raw) return { token: null, userId: null, username: null };
    return JSON.parse(raw);
  } catch {
    return { token: null, userId: null, username: null };
  }
};

export const useAuthStore = create<AuthState>((set) => ({
  ...loadInitial(),
  setAuth: (token, userId, username) => {
    const next = { token, userId, username };
    localStorage.setItem(LOCAL_KEY, JSON.stringify(next));
    set(next);
  },
  logout: () => {
    localStorage.removeItem(LOCAL_KEY);
    set({ token: null, userId: null, username: null });
  },
}));

export const getAuthToken = () => {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (!raw) return null;
    return JSON.parse(raw).token as string | null;
  } catch {
    return null;
  }
};

export const logout = () => {
  useAuthStore.getState().logout();
};
