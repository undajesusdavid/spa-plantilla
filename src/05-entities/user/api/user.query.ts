import { useQuery } from '@tanstack/react-query';
import { userApi} from './user.api';

export const useGetUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: userApi.getUsers,
    staleTime: 1000 * 60,
  });
};
