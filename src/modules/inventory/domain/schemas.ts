import { z } from 'zod';

export const CreateBoxBody = z.object({
  id: z.string(),
  locationCode: z.string(),
  metadata: z.record(z.any()).optional(),
  conservationStatus: z.string().optional(),
});

export const InventoryType = z.enum(['box', 'folder', 'record', 'document']);
export type InventoryType = z.infer<typeof InventoryType>;
export type CreateBoxBodyType = z.infer<typeof CreateBoxBody>;
