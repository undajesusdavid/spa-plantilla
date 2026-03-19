import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";
import { useLogin } from "../../hooks/useUsers";
import { AuthUserRequestDto } from "../../domain/schemas";
import { BigButton } from "../../../../shared/ui/BigButton";
import { Input } from "../../../../shared/ui/Input";
import styles from "./LoginForm.module.css";

export function LoginForm() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  // Aprovechamos las bondades de React Query (isPending)
  const loginMutation = useLogin(() => null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null); // Limpiar errores previos

    const formData = new FormData(event.currentTarget);
    const username = String(formData.get("username") ?? "");
    const password = String(formData.get("password") ?? "");

    // Validación con Zod
    const parsed = AuthUserRequestDto.safeParse({ username, password });

    if (!parsed.success) {
      setError("Por favor, completa los campos correctamente.");
      return;
    }

    try {
      const result = await loginMutation.mutateAsync(parsed.data);
      setAuth(result.token, result.id, result.username);
      navigate("/dashboard");
    } catch (err) {
      setError("Credenciales incorrectas o problema de conexión.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        label="Usuario"
        name="username"
        type="text"
        placeholder="Ej. jdoe"
        required
      />

      <Input
        label="Contraseña"
        name="password"
        type="password"
        placeholder="••••••••"
        required
      />

      {error && (
        <div className={styles.error}>
          <span>⚠️</span> {error}
        </div>
      )}

      <BigButton type="submit" disabled={loginMutation.isPending}>
        {loginMutation.isPending ? "Validando..." : "Ingresar al sistema"}
      </BigButton>
    </form>
  );
}
