import { apiClient } from '@api/axios-client';
import {  Users } from '../model/user.schema';

export const userApi = {
  getUsers: async () => {
    const { data } = await apiClient.get('/users');
    return Users.parse(data);
  },
};
