import { useMutation } from '@tanstack/react-query';
import { loansApi } from '../services/loans.service';
import { RequestLoanInput } from '../domain/schemas';

export const useRequestLoan = () => {
  return useMutation({
    mutationFn: (body: RequestLoanInput) => loansApi.requestLoan(body),
  });
};

export const useGetActaPdf = () => {
  return useMutation({
    mutationFn: (id: string) => loansApi.getActaPdf(id),
  });
};
