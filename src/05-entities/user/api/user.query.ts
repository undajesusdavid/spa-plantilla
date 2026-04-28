import { useMutation, useQuery } from '@tanstack/react-query';
import {  userApi } from './user.api';

export const useMyPermissions = (onSuccess: () => void) => {
  return useMutation({
    mutationFn: (body: null) => userApi.myPermissions(body),
    onSuccess,
  });
};


export const useDeleteUser = () => {
  return useMutation({
    mutationFn: (id: string) => userApi.deleteUser(id),
  });
}

export const useGetUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: userApi.getUsers,
    staleTime: 1000 * 60,
  });
};
