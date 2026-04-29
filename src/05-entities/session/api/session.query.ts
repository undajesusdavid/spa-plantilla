import { useQuery } from '@tanstack/react-query';
import { sessionApi } from './session.api';
import { useSessionStore } from '../model/session.store';


export const getMePermissionsQuery = () => {
 
  return {
    queryKey: ['me-permissions'],
    queryFn: async () => {
      const data = await sessionApi.getMePermissions();
      //console.log(`Permissions data: ${JSON.stringify(data)}`);
      const { setPermissions, setRoles, permissions } = useSessionStore.getState();
      setPermissions(data.permissions);
      setRoles(data.roles);
      return data;
    },
    staleTime: 1000 * 60,
  }
}

export const useGetMePermissions = () => {
  return useQuery(getMePermissionsQuery());
};


