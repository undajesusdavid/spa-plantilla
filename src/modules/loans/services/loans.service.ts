import { apiClient } from '../../../api/axios-client';
import { RequestLoanInput, ApproveLoanInput } from '../domain/schemas';

export const loansApi = {
  requestLoan: async (body: RequestLoanInput) => {
    const { data } = await apiClient.post('/loans/requests', body);
    return data;
  },
  approveLoan: async (id: string, body: ApproveLoanInput) => {
    const { data } = await apiClient.post(`/loans/${id}/approve`, body);
    return data;
  },
  getActaPdf: async (id: string) => {
    const response = await apiClient.get(`/loans/${id}/acta`, { responseType: 'blob' });
    return response.data;
  },
};
