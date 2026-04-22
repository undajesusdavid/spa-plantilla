import { useCreateUser } from "@modules/users/hooks/useUsers";
import { useFormMutation } from "@hooks-ui/useFormMutation";
import { useQueryClient } from "@tanstack/react-query";
import { UserInputs } from "@modules/users/types/user.types";

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