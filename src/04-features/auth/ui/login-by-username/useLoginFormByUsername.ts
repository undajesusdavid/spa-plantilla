import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthUserRequest } from "../../model/schema";
import { useLoginMutation } from "../../api/auth.mutations";

export const useLoginFormByUsername = () => {
  const navigate = useNavigate();
  const login = useLoginMutation();

  const form = useForm({
    resolver: zodResolver(AuthUserRequest),
    mode: "onChange",
  });

  const onSubmit = form.handleSubmit(async (data) => {
    await login.mutateAsync(data);
    navigate("/dashboard");
  });

  return {
    form,
    onSubmit,
    isLoading: login.isPending,
    isServerError: login.isError,
    serverError: login.error,
  };
};