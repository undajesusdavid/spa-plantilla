import { useMutation } from "@tanstack/react-query";
import { AuthUserRequest } from "../model/schema";
import { authApi } from "./auth-api";

export const loginMutation = (onSuccess: () => void) => {
  return useMutation({
    mutationFn: (body: AuthUserRequest) => authApi.login(body),
    onSuccess,
  });
};