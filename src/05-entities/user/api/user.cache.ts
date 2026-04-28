import { useQueryClient } from '@tanstack/react-query';

export const useUserFromCache = (userId: string) => {
  const queryClient = useQueryClient();

  const getUserById = () => {
    // La clave ['users', userId] debe coincidir exactamente con la que usas en useQuery
    return queryClient.getQueryData(['users', userId]);
  };

  return { getUserById };
};