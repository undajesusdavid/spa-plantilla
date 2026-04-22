import { useMutation, useQuery } from '@tanstack/react-query';
import { usersApi } from '../services/users.service';
import { AuthUserRequest, CreateUserRequest } from '../domain/schemas';

export const useLogin = (onSuccess: () => void) => {
  return useMutation({
    mutationFn: (body: AuthUserRequest) => usersApi.login(body),
    onSuccess,
  });
};

export const useMyPermissions = (onSuccess: () => void) => {
  return useMutation({
    mutationFn: (body: null) => usersApi.myPermissions(body),
    onSuccess,
  });
};


export const useCreateUser = () => {
  return useMutation({
    mutationFn: (body: CreateUserRequest) => usersApi.createUser(body),
  });
};

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: (id: string) => usersApi.deleteUser(id),
  });
}

export const useUsersList = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: usersApi.listUsers,
    staleTime: 1000 * 60,
  });
};
