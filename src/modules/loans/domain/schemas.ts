import { z } from 'zod';

export const RequestLoanBody = z.object({
  id: z.string().uuid().optional(),
  requesterId: z.string(),
  targetId: z.string(),
  targetType: z.string(),
  notes: z.string().optional(),
});

export const ApproveLoanBody = z.object({
  archivistId: z.string(),
  dueDate: z.string().refine((s) => !Number.isNaN(Date.parse(s)), 'Formato inválido'),
});

export type RequestLoanInput = z.infer<typeof RequestLoanBody>;
export type ApproveLoanInput = z.infer<typeof ApproveLoanBody>;
