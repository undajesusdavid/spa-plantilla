import { zodResolver } from "@hookform/resolvers/zod";
import { InputPassword } from "@entities/users/ui/inputs/InputPassword";
import { password } from "@src/05-entities/users/model";
import { useForm } from "react-hook-form";
import { z } from "zod";
// Tu schema base de password

// 1. Definimos el esquema
const registerSchema = z.object({
  password: password,
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

export const TestComponent = () => {
  const {
    register,
    formState: { errors, dirtyFields, isValid },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange", // <--- Esto activa el tiempo real
  });

  return (
    <form className="space-y-4">
      <InputPassword
        {...register("password")}
        label="Contraseña"
        error={errors.password?.message}
        // Se pone verde solo si el campo es válido individualmente
        successColor={!errors.password && dirtyFields.password}
      />

      <InputPassword
        {...register("confirmPassword")}
        label="Confirmar contraseña"
        error={errors.confirmPassword?.message}
        // Se pone verde si todo el objeto (incluyendo el refine) es válido
        successColor={isValid && !!dirtyFields.confirmPassword}
      />
    </form>
  );
};