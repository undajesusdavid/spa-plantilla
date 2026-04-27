import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateUserRequest } from "@entities/users/model/schemas.user";
import { userRegisterApi } from "./user-register.api";

export const useUserRegisterMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateUserRequest) => userRegisterApi.createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    //onError: (error: any) => {},
  });
};
