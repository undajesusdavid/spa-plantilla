import { ButtonContainer } from "@src/06-shared/ui/buttons/button-container/ButtonContainer";
import Button from "@src/06-shared/ui/buttons/button/Button";
import { useToast } from "@shared/lib/providers/ToastProvider";
import { useUserUpdateMutation } from "../../api/user-update.mutations";
import { useEffect } from "react";
import { useModal } from "@shared/lib/providers/ModalProvider";
import { Loading } from "@ui/feedback";
import { useForm } from "react-hook-form";
import {
  InputCheckUserActive,
  InputUserEmail,
  InputUsername,
} from "@src/05-entities/user";
import { UserUpdateRequestType } from "../../model/user-update.schema";

export const UpdateUserContent = ({
  userId,
  name: userName,
  email: userEmail,
  active: userActive,
}: UserUpdateRequestType) => {
  const { addToast } = useToast();
  const { mutate, isPending } = useUserUpdateMutation();
  const { updateOptions, closeModal } = useModal();

  const defaultValues = {
    userId,
    name: userName || "",
    email: userEmail || "",
    active: userActive || false,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserUpdateRequestType>({ defaultValues });

  useEffect(() => {
    updateOptions({ restrictClose: isPending });
  }, [isPending, updateOptions]);

  const onSubmit = (data: UserUpdateRequestType) => {
    mutate(data, {
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
    });
  };

  return (
    <div className="user-update-form">
      {isPending ? (
        <Loading label="Actualizando usuario..." />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputUsername
            {...register("name", { required: "El nombre es requerido" })}
            error={errors.name?.message}
          />

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

          <InputCheckUserActive {...register("active")} />
            
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
