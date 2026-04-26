import z from "zod";

export const AuthUserRequestDto = z.object({
  username: z.string().min(2),
  password: z.string().min(6),
});

export type AuthUserRequest = z.infer<typeof AuthUserRequestDto>;

export const AuthUserDtoResponse = z.object({
  token: z.string(),
  id: z.string(),
  username: z.string(),
});

export type AuthUserResponse = z.infer<typeof AuthUserDtoResponse>;

