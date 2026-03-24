import { FieldGroup } from "../../../../shared/ui/FieldGroup";
import { Input } from "../../../../shared/ui/Input";
import { Form } from "../../../../shared/ui/Form";
import { CreateUserRequest } from "../../domain/schemas";

export interface CreateUserFormProps {
  formRef: React.RefObject<HTMLFormElement>;
  inputErrors: Partial<Record<keyof CreateUserRequest, string>>;
  handleSave: (
    data: CreateUserRequest,
    e?: React.FormEvent<HTMLFormElement>,
  ) => void;
}

export function CreateUserForm({
  formRef,
  inputErrors,
  handleSave
}: CreateUserFormProps) {
  return (
    <Form ref={formRef} onSubmit={handleSave}>
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
          error={inputErrors.username}
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
    </Form>
  );
}
