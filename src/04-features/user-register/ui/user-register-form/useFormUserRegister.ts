import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRegisterRequest, UserRegisterRequestType } from "../../model/user-register.schema";
import { useUserRegisterMutation } from "../../api/user-register.mutations";
import { useToast } from "@context/ToastContext";

interface UseFormUserRegisterProps {
  onSuccess?: () => void;
}

export const useFormUserRegister = ({ onSuccess }: UseFormUserRegisterProps = {}) => {
  const { addToast } = useToast();
  const mutation = useUserRegisterMutation();

  const form = useForm<UserRegisterRequestType>({
    resolver: zodResolver(UserRegisterRequest),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    mode: "onChange",
  });

  const onSubmit = form.handleSubmit((data) => {
    mutation.mutate(data, {
      onSuccess: () => {
        addToast("success", "Usuario creado correctamente", "Éxito");
        form.reset();
        onSuccess?.();
      },
      onError: (error) => {
        addToast("error", error.message || "Error al crear el usuario", "Error");
      },
    });
  });

  return {
    form,
    onSubmit,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
  };
};
