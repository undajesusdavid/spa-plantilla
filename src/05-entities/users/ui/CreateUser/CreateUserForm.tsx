import { FieldGroup } from "@ui/form-groups/field-group";
import { Form } from "@ui/form";
import { CreateUserRequest } from "@src/05-entities/users/model/schemas.user";
import { InputPassword, InputUserEmail, InputUsername } from "../inputs";
  

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
  handleSave,
}: CreateUserFormProps) {
  
  const validations = () => {
    return true;
  };

  return (
    <Form ref={formRef} onSubmit={handleSave} isValid={validations}>
      <FieldGroup
        title="Información Personal"
        orientation="vertical"
        columns={1}
      >
        <InputUsername
          name="username"
          required
          error={inputErrors.username}
        />

        <InputPassword
          name="password"
          required
          error={inputErrors.password}
        />

        <InputPassword
          label="Confirmar Contraseña"
          name="passwordConfirm"
          placeholder="Confirma la contraseña"
          required
          error={inputErrors.passwordConfirm}
        />

        <InputUserEmail
          label="Email"
          name="email"
          required
          error={inputErrors.email}
        />
      </FieldGroup>
    </Form>
  );
}
