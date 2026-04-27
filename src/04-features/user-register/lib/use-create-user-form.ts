import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserSchema, CreateUserFormValues } from "../model/create-user.schema";
import { useCreateUserMutation } from "../api/create-user.service";
import { useToast } from "@context/ToastContext";

interface UseCreateUserFormProps {
  onSuccess?: () => void;
}

export const useCreateUserForm = ({ onSuccess }: UseCreateUserFormProps = {}) => {
  const { addToast } = useToast();
  
  const form = useForm<CreateUserFormValues>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    mode: "onTouched",
  });

  const mutation = useCreateUserMutation({
    onSuccess: () => {
      addToast("success", "Usuario creado correctamente", "Éxito");
      form.reset();
      onSuccess?.();
    },
    onError: (error) => {
      addToast("error", error.message || "Error al crear el usuario", "Error");
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    mutation.mutate(data);
  });

  return {
    form,
    onSubmit,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
  };
};
