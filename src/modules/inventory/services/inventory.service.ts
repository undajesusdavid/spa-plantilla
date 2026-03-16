import { apiClient } from '../../../api/axios-client';
import { CreateBoxBodyType } from '../domain/schemas';

export const inventoryApi = {
  createBox: async (body: CreateBoxBodyType) => {
    const { data } = await apiClient.post('/inventory/boxes', body);
    return data;
  },
  getInventoryByType: async (type: string) => {
    const { data } = await apiClient.get(`/inventory/${type}`);
    return data;
  },
};
