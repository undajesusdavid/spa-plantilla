import { ErrorDisplay } from "@ui-modules/data-display/error-display";
import { Button } from "@ui-base/buttons/button";
import { ButtonContainer } from "@ui-base/buttons/button-container";
import { CreateUserForm } from "./CreateUserForm";
import { useCreateUserForm } from "./hooks/useCreateUserForm";

export function CreateUser() {
  const form = useCreateUserForm();
  const { isPending, isError, inputErrors, executeSubmit, reset, error } = form;

  const hasCriticalError = isError && !Object.keys(inputErrors).length;
  if (hasCriticalError) {
    return (
      <ErrorDisplay
        title="Error al crear usuario"
        message={error instanceof Error ? error.message : "Error desconocido"}
        onRetry={reset}
        errorCode="AUTH_001"
      />
    );
  }

  return (
    <>
      <CreateUserForm
        handleSave={form.handleSave}
        inputErrors={form.inputErrors}
        formRef={form.formRef}
      />
      <ButtonContainer align="center">
        <Button onClick={executeSubmit} disabled={isPending} variant="primary">
          {isPending ? "Registrando..." : "Registrar Usuario"}
        </Button>
      </ButtonContainer>
    </>
  );
}
