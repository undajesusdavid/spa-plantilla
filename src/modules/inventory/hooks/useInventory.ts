import { useMutation, useQuery } from '@tanstack/react-query';
import { inventoryApi } from '../services/inventory.service';

export const useCreateBox = () => {
  return useMutation({ mutationFn: inventoryApi.createBox });
};

export const useInventoryByType = (type: string) => {
  return useQuery({ queryKey: ['inventory', type], queryFn: () => inventoryApi.getInventoryByType(type) });
};
