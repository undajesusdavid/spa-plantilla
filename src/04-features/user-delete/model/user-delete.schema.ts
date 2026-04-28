import { z } from "zod";

export const UserDeleteRequest = z.object({
  userId: z.string().min(1, "El ID del usuario es requerido"),
});

export type UserDeleteRequestType = z.infer<typeof UserDeleteRequest>;