import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserUpdateRequestType } from "../model/user-update.schema";
import { userUpdateApi } from "./user-update.api";

export const useUserUpdateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UserUpdateRequestType) => userUpdateApi.updateUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    // onError: (error: any) => {
    //   console.error("Error updating user:", error);
    // },
  });
};