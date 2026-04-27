import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userApi } from "@entities/users/api/user-api";
import { CreateUserRequest } from "@entities/users/model/schemas.user";

interface UseCreateUserOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const useCreateUserMutation = (options?: UseCreateUserOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateUserRequest) => userApi.createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      options?.onSuccess?.();
    },
    onError: (error: any) => {
      options?.onError?.(error);
    },
  });
};
