import { apiClient } from '../../../api/axios-client';
import { AuthUserRequest, AuthUserDtoResponse, CreateUserRequest } from '../domain/schemas';

export const usersApi = {
  login: async (body: AuthUserRequest) => {
    const { data } = await apiClient.post('/users/login', body);
    return AuthUserDtoResponse.parse(data);
  },
  createUser: async (body: CreateUserRequest) => {
    const { data } = await apiClient.post('/users/create', body);
    return data;
  },
  listUsers: async () => {
    const { data } = await apiClient.get('/users');
    return data;
  },
};
