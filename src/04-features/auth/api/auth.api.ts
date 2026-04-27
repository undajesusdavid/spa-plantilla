import { apiClient } from '@api/axios-client';
import { AuthUserRequestType, AuthUserResponse } from "../model/schema";

export const authApi = {
  login: async (body: AuthUserRequestType) => {
    const { data } = await apiClient.post('/users/login', body);
    return AuthUserResponse.parse(data);
  }
};
