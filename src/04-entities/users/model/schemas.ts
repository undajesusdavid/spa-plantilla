import { z } from 'zod';

export const MyPermissionsResponse = z.object({
  permissions: z.string().array(),
  roles: z.string().array(),
});

export const AuthUserRequestDto = z.object({
  username: z.string().min(2),
  password: z.string().min(6),
});

export const AuthUserDtoResponse = z.object({
  token: z.string(),
  id: z.string(),
  username: z.string(),
});

export const CreateUserRequestDto = z.object({
  username: z.string().min(2),
  password: z.string().min(6),
  passwordConfirm: z.string().min(6),
  email: z.string().email(),
});

export const GetUserDtoResponse = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string().email(),
  active: z.boolean(),
});

export const UpdateUserRequestDto = z.object({
  username: z.string().min(2).optional(),
  email: z.string().email().optional(),
  active: z.boolean().optional(),
});

export type MyPermissionsResponse = z.infer<typeof MyPermissionsResponse>;
export type AuthUserRequest = z.infer<typeof AuthUserRequestDto>;
export type AuthUserResponse = z.infer<typeof AuthUserDtoResponse>;
export type CreateUserRequest = z.infer<typeof CreateUserRequestDto>;
export type GetUserResponse = z.infer<typeof GetUserDtoResponse>;
export type UpdateUserRequest = z.infer<typeof UpdateUserRequestDto>;
