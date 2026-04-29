import { useFormUserRegister } from "./useFormUserRegister";
import { Button } from "@src/06-shared/ui/buttons/button";
import { FieldGroup } from "@ui/form-groups/field-group";
import { ButtonContainer } from "@ui/buttons/button-container";
import { InputPassword, InputUserEmail, InputUsername } from "@entities/user";

interface CreateUserFeatureProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export const FormUserRegister = ({
  onSuccess,
  onCancel,
}: CreateUserFeatureProps) => {
  const { form, onSubmit, isLoading } = useFormUserRegister({ onSuccess });
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={onSubmit}>
      <FieldGroup title="Datos de Usuario" orientation="vertical" columns={1}>
        <InputUsername
          error={errors.username?.message}
          {...register("username")}
        />

        <InputUserEmail
          error={errors.email?.message}
          {...register("email")}
        />

        <InputPassword
          error={errors.password?.message}
          {...register("password")}
        />

        <InputPassword
          label="Confirmar Contraseña"
          placeholder="********"
          error={errors.passwordConfirm?.message}
          {...register("passwordConfirm")}
        />
      </FieldGroup>

      <ButtonContainer align="right" className="mt-6">
        {onCancel && (
          <Button type="button" variant="ghost" onClick={onCancel} disabled={isLoading}>
            Cancelar
          </Button>
        )}
        <Button type="submit" variant="primary" disabled={isLoading}>
          {isLoading ? "Creando..." : "Crear Usuario"}
        </Button>
      </ButtonContainer>
    </form>
  );
};
