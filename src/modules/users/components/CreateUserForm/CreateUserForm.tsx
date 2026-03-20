import { ErrorDisplay } from "../../../../shared/ui/ErrorDisplay";
import { FieldGroup } from "../../../../shared/ui/FieldGroup";
import { Input } from "../../../../shared/ui/Input";
import { Form } from "../../../../shared/ui/Form"; // Usamos el orquestador
import { Button } from "../../../../shared/ui/Button";
import { useCreateUser } from "../../hooks/useUsers";
import { useApiErrors } from "../../../../api/hooks/useApiErrors";
import { useToast } from "../../../../shared/context/ToastContext";

// Definimos la interfaz aquí para tener Type Safety total
interface CreateUserPayload {
  username: string;
  password: string;
  email: string;
}

export function CreateUserForm() {
  const { mutate, isPending, isError, error, reset } = useCreateUser();
  const { inputErrors } = useApiErrors<CreateUserPayload>(error);
  const { addToast } = useToast();

  const handleSave = (
    data: CreateUserPayload,
    e?: React.FormEvent<HTMLFormElement>,
  ) => {
    const targetForm = e?.currentTarget;
    mutate(data, {
      onSuccess: () => {
        targetForm?.reset();
        reset();
        addToast("success","Registrado Exitosamente");
      },
      onError: () => {
         addToast("error","No se pudo registrar");
      },
    });
  };

  // if (isError) {
  //   return (
  //     <ErrorDisplay
  //       title="Error al crear usuario"
  //       message={error instanceof Error ? error.message : "Error desconocido"}
  //       onRetry={() => reset()}
  //       errorCode="AUTH_001"
  //     />
  //   );
  // }

  const actions = (
    <>
      <Button
        type="submit"
        disabled={isPending}
        variant={isPending ? "secondary" : "primary"}
      >
        {isPending ? "Guardando..." : "Crear Cuenta"}
      </Button>
    </>
  );

  return (
    <Form<CreateUserPayload> onSubmit={handleSave} actions={actions}>
      <FieldGroup
        title="Información Personal"
        orientation="vertical"
        columns={1}
      >
        <Input
          label="Usuario"
          name="username"
          placeholder="Ej. jdoe"
          required
          error={inputErrors.username} // Pasamos el error del server
        />
        <Input
          label="Contraseña"
          name="password"
          type="password"
          required
          error={inputErrors.password}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          required
          error={inputErrors.email}
        />
      </FieldGroup>

      {/* Opcional: Un mensaje general si el error no es de un campo específico */}
      {isError && !Object.keys(inputErrors).length && (
        <p>
          {error instanceof Error
            ? error.message
            : "Error interno del servidor"}
        </p>
      )}
    </Form>
  );
}
