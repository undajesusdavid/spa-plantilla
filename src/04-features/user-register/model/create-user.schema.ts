import { z } from "zod";
import { username, password, email } from "@entities/users/model/schemas.user";

export const CreateUserSchema = z.object({
  username: username,
  email: email,
  password: password,
  passwordConfirm: z.string().min(1, "La confirmación de contraseña es requerida"),
}).refine((data) => data.password === data.passwordConfirm, {
  message: "Las contraseñas no coinciden",
  path: ["passwordConfirm"],
});

export type CreateUserFormValues = z.infer<typeof CreateUserSchema>;
