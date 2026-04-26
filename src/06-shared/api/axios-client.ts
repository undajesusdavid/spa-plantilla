import axios from 'axios';


interface ApiConfig {
  getToken: () => string | null;
  onUnauthorized: () => void; // Aquí irá el logout
}

let config: ApiConfig = {
  getToken: () => null,
  onUnauthorized: () => {}, // Operación vacía por defecto
};

export const injectApiConfig = (newConfig: Partial<ApiConfig>) => {
  config = { ...config, ...newConfig };
};

export const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

apiClient.interceptors.request.use((req) => {
  const token = config.getToken();
  if (token) {
    req.headers = req.headers ?? {};
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      config.onUnauthorized();
    }
    return Promise.reject(error);
  }
);
