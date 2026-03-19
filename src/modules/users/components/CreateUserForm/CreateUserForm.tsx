import { ErrorDisplay } from "../../../../shared/ui/ErrorDisplay";
import { Loading } from "../../../../shared/ui/Loading";
import { useCreateUser } from "../../hooks/useUsers";

export function CreateUserForm() {
  const { mutate, isPending, isError, error, reset } = useCreateUser();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userData = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
      email: formData.get("email") as string,
    };
    // Ejecutamos la mutación
    mutate(userData);
  };

  // 1. Estado de Error: Si la mutación falla, mostramos el componente elegante
  if (isError) {
    return (
      <ErrorDisplay
        title="Error al crear usuario"
        message={
          error instanceof Error
            ? error.message
            : "Hubo un problema con el servidor."
        }
        onRetry={() => reset()} // reset() limpia el estado de error de la mutación
        errorCode="AUTH_001"
      />
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Nombre de Usuario" required />
      <input type="password" name="password" placeholder="Contraseña" required />
      <input name="email" type="email" placeholder="Email" required />

      <button type="submit" disabled={isPending}>
        {isPending ? "Guardando..." : "Crear Cuenta"}
      </button>
    </form>
  );
}
