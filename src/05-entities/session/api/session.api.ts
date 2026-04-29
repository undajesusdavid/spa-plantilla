import { apiClient } from '@api/axios-client';
import { MePermissionsResponse } from '../model/session.schema';


export const sessionApi = {
 
  getMePermissions: async () => {
    const { data } = await apiClient.get('/users/me/permission');
    return MePermissionsResponse.parse(data);
  },

  
};
