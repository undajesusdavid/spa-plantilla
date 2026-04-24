import { useCreateUser } from "@entities/users/api/use-user";
import { useFormMutation } from "@hooks-ui/useFormMutation";
import { useQueryClient } from "@tanstack/react-query";
import { UserInputs } from "@src/05-entities/users/model/types.user";

export function useCreateUserForm() {
  const queryClient = useQueryClient();
  const createUserMutation = useCreateUser();

  return useFormMutation<UserInputs, any, any, UserInputs>({
    mutation: createUserMutation,
    successMessage: "Usuario registrado exitosamente",
    errorMessage: "No se pudo registrar al usuario",
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    }
  });
}