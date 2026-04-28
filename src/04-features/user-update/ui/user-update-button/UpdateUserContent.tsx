import { ButtonContainer } from "@src/06-shared/ui/buttons/button-container/ButtonContainer";
import Button from "@src/06-shared/ui/buttons/button/Button";
import { useToast } from "@src/01-app/providers/ToastContext";
import { useUserUpdateMutation } from "../../api/user-update.mutations";
import { useEffect } from "react";
import { useModal } from "@src/06-shared/lib/providers/ModalProvider";
import { Loading } from "@src/06-shared/ui/feedback/Loading";
import { useForm } from "react-hook-form";
import { InputUserEmail, InputUsername } from "@src/05-entities/user";
import { Checkbox } from "@src/06-shared/ui/form-controls/checkbox";

interface UpdateUserContentProps {
  userId: string;
  userName?: string;
  userEmail?: string;
  userRole?: string;
  userActive?: boolean;
}

interface FormValues {
  name: string;
  email: string;
  active: boolean;
}

export const UpdateUserContent = ({
  userId,
  userName,
  userEmail,
  userActive,
}: UpdateUserContentProps) => {
  const { addToast } = useToast();
  const { mutate, isPending } = useUserUpdateMutation();
  const { updateOptions, closeModal } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: userName || "",
      email: userEmail || "",
      active: userActive || false,
    },
  });

  useEffect(() => {
    updateOptions({ restrictClose: isPending });
  }, [isPending, updateOptions]);

  const onSubmit = (data: FormValues) => {
    mutate(
      { userId, ...data },
      {
        onSuccess: () => {
          addToast("success", "Usuario actualizado correctamente", "Éxito");
          closeModal();
        },
        onError: (err) => {
          addToast(
            "error",
            err.message || "Error al actualizar el usuario",
            "Error",
          );
          closeModal();
        },
      },
    );
  };

  return (
    <div className="user-update-form">
      {isPending ? (
        <Loading label="Actualizando usuario..." />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: "16px" }}>
            <InputUsername
              {...register("name", { required: "El nombre es requerido" })}
              error={errors.name?.message}
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <InputUserEmail
              {...register("email", {
                required: "El email es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido",
                },
              })}
              error={errors.email?.message}
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <Checkbox
              showDynamicLabel
              activeLabel="Estatus Activo"
              inactiveLabel="Estatus Inactivo"
              
              checkboxSize="medium"
              orientation="column"
              labelPosition="right"
              helperText="El usuario podrá iniciar sesión si está activo"
            />
          </div>
          <ButtonContainer>
            <Button
              type="button"
              variant="secondary"
              onClick={closeModal}
              disabled={isPending}
            >
              Cancelar
            </Button>
            <Button type="submit" variant="primary" disabled={isPending}>
              Guardar
            </Button>
          </ButtonContainer>
        </form>
      )}
    </div>
  );
};
