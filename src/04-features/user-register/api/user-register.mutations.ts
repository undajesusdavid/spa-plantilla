import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserRegisterRequestType } from "../model/user-register.schema";
import { userRegisterApi } from "./user-register.api";

export const useUserRegisterMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UserRegisterRequestType) => userRegisterApi.createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    //onError: (error: any) => {},
  });
};
