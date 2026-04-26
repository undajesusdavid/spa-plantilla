import { useMutation, useQuery } from '@tanstack/react-query';
import { userApi } from './user-api';
import { CreateUserRequest } from '../model/schemas.user';

export const useMyPermissions = (onSuccess: () => void) => {
  return useMutation({
    mutationFn: (body: null) => userApi.myPermissions(body),
    onSuccess,
  });
};

export const useCreateUser = () => {
  return useMutation({
    mutationFn: (body: CreateUserRequest) => userApi.createUser(body),
  });
};

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: (id: string) => userApi.deleteUser(id),
  });
}

export const useUsersList = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: userApi.listUsers,
    staleTime: 1000 * 60,
  });
};
