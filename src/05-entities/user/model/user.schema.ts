import { z } from 'zod';

export const id = z.string().uuid();
export type idType = z.infer<typeof id>;

export const username = z.string()
  .min(4, "El nombre de usuario debe tener al menos 4 caracteres")
  .max(20, "El nombre de usuario no puede exceder los 20 caracteres")
  .regex(/^[a-z0-9_]*$/,"Solo se permiten minúsculas, números y guiones bajos (_)");
export type usernameType = z.infer<typeof username>;


export const password = z.string()
  .min(8, "La contraseña debe tener al menos 8 caracteres")
  .regex(/[A-Z]/, "Debe contener al menos una mayúscula")
  .regex(/[a-z]/, "Debe contener al menos una minúscula")
  .regex(/[0-9]/, "Debe contener al menos un número");
export type passwordType = z.infer<typeof password>;


export const email = z.string()
  .email("El formato del correo electrónico no es válido");
export type emailType = z.infer<typeof email>;


export const User = z.object({
  id: id,
  username: username,
  email: email,
  active: z.boolean()
});
export type userType = z.infer<typeof User>;


export const MyPermissionsResponse = z.object({
  permissions: z.string().array(),
  roles: z.string().array(),
});


export const UpdateUserRequestDto = z.object({
  username: z.string().min(2).optional(),
  email: z.string().email().optional(),
  active: z.boolean().optional(),
});

export type MyPermissionsResponse = z.infer<typeof MyPermissionsResponse>;
export type UpdateUserRequest = z.infer<typeof UpdateUserRequestDto>;
