import { z } from "zod";

export const UserUpdateRequest = z.object({
  userId: z.string().min(1, "El ID del usuario es requerido"),
  name: z.string().min(1, "El nombre es requerido").optional(),
  email: z.string().email("Email inválido").optional()
});

export type UserUpdateRequestType = z.infer<typeof UserUpdateRequest>;