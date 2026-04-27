import { apiClient } from '@api/axios-client';
import { AuthUserRequest, AuthUserDtoResponse } from "../model/schema";

export const authApi = {
  login: async (body: AuthUserRequest) => {
    const { data } = await apiClient.post('/users/login', body);
    return AuthUserDtoResponse.parse(data);
  }
};
