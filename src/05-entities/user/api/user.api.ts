import z from 'zod';
import { apiClient } from '@api/axios-client';
import {  User, MyPermissionsResponse } from '../model/user.schema';

export const userApi = {
 
  myPermissions: async (body: null) => {
    const { data } = await apiClient.get('/users/me/permissions', { params: body });
    return MyPermissionsResponse.parse(data);
  },

  deleteUser: async (id: string) => {
    const { data } = await apiClient.delete('/users/delete/'+id);
    return data;
  },
  
  getUsers: async () => {
    const { data } = await apiClient.get('/users');
    return z.array(User).parse(data);
  },
};
