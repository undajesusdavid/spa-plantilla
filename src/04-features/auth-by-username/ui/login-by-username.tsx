import { InputPassword } from "@entities/users/ui/inputs/InputPassword";
import { InputUsername } from "@entities/users/ui/inputs/InputUsername";
import { useNavigate } from "react-router-dom";
import { useSessionStore } from "@entities/session/model";
import { AuthUserRequestDto } from "../model/schema";
import { loginMutation } from "../api/auth-mutations";
import { BigButton } from "@ui-base/buttons/big-button";
import styles from "./login-by-username.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const LoginByUsername = () => {
  const setAuth = useSessionStore((state) => state.setSession);
  const navigate = useNavigate();
  const login = loginMutation(() => null);

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(AuthUserRequestDto),
  });

  const onSubmit = handleSubmit(async (data) => {
    const result = await login.mutateAsync(data);
    setAuth(result.token, result.id, result.username);
    navigate("/dashboard");
  });

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <InputUsername
        {...register("username", {
          required: { value: true, message: "El usuario es requerido" },
        })}
      />

      <InputPassword
        {...register("password", {
          required: { value: true, message: "La contraseña es requerida" },
        })}
      />

      {login.isError && (
        <div className={styles.error}>
          <span>⚠️</span> {login.error.message}
        </div>
      )}

      <BigButton type="submit" disabled={login.isPending}>
        {login.isPending ? "Validando..." : "Ingresar al sistema"}
      </BigButton>
    </form>
  );
};
