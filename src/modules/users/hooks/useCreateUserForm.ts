import { useCreateUser } from "./useUsers";
import { useFormMutation } from "../../../shared/hooks/useFormMutation";
import { InputsError, CreateUserPayload } from "../types/typesUserCreate";
import { useQueryClient } from "@tanstack/react-query";

export function useCreateUserForm() {
  const queryClient = useQueryClient();
  const createUserMutation = useCreateUser();

  return useFormMutation<CreateUserPayload, any, any, InputsError>({
    mutation: createUserMutation,
    successMessage: "Usuario registrado exitosamente",
    errorMessage: "No se pudo registrar al usuario",
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    }
  });
}