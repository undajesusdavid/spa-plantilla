import { FieldGroup } from "../../../../shared/ui/FieldGroup";
import { Input } from "../../../../shared/ui/Input";
import { Form } from "../../../../shared/ui/Form";
import { CreateUserFormProps } from "../../types/typesUserCreate";


export function CreateUserForm({ formRef, handleSave, inputErrors }: CreateUserFormProps) {
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
