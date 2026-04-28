import { z } from "zod";

/**
 * Esquema base para un Rol basado en RoleResponseDto
 */
export const roleSchema = z.object({
    id: z.string().uuid("El ID debe ser un UUID válido"),
    name: z.string().min(1, "El nombre es requerido"),
    description: z.string().min(1, "La descripción es requerida"),
    permissions: z.array(z.number()).optional().default([]),
});

/**
 * Tipo inferido para uso en toda la aplicación
 */
export type Role = z.infer<typeof roleSchema>;

/**
 * Esquema para listas de roles (común en respuestas de index)
 */
export const roleListSchema = z.array(roleSchema);