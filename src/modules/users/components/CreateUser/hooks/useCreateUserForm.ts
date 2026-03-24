import { useCreateUser } from "../../../hooks/useUsers";
import { useFormMutation } from "../../../../../shared/hooks/useFormMutation";
import { useQueryClient } from "@tanstack/react-query";
import { UserInputs } from "../../../types/user.types";

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