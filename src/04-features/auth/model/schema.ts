import z from "zod";

export const AuthUserRequest = z.object({
  username: z.string().min(1, "El nombre de usuario es requerido"),
  password: z.string().min(1,"La contraseña es requerida"),
});

export const AuthUserResponse = z.object({
  token: z.string(),
  id: z.string(),
  username: z.string(),
});

export type AuthUserRequestType = z.infer<typeof AuthUserRequest>;
export type AuthUserResponseType = z.infer<typeof AuthUserResponse>;

