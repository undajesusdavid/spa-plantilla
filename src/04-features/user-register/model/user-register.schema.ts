import { z } from "zod";
import { username, password, email } from "@entities/user";

export const UserRegisterRequest = z.object({
  username: username,
  email: email,
  password: password,
  passwordConfirm: z.string().min(1, "La confirmación de contraseña es requerida"),
}).refine((data) => data.password === data.passwordConfirm, {
  message: "Las contraseñas no coinciden",
  path: ["passwordConfirm"],
});




export type UserRegisterRequestType = z.infer<typeof UserRegisterRequest>;
