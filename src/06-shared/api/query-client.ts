import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query';
// Imagina que tienes un sistema de notificaciones

export const queryClient = new QueryClient({
  // Configuración por defecto para todas las queries
  defaultOptions: {
    queries: {
      retry: 1, // Reintenta 1 vez antes de fallar
      refetchOnWindowFocus: false, // Evita peticiones innecesarias al cambiar de pestaña
      staleTime: 1000 * 60 * 5, // Los datos se consideran "frescos" por 5 minutos
      gcTime: 1000 * 60 * 60, // Mantener en memoria (Garbage Collection) por 1 hora
    },
  },
  // Manejo global de errores (opcional pero muy recomendado)
  queryCache: new QueryCache({
    onError: (error) => {
      console.error('Global Query Error:', error);
      // Aquí podrías disparar un toast global
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      console.error('Global Mutation Error:', error);
      // Las mutaciones suelen requerir feedback visual inmediato
      // toast.error('Ocurrió un error al procesar la acción');
    },
  }),
});