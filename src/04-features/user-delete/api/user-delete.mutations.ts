import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserDeleteRequestType } from "../model/user-delete.schema";
import { userDeleteApi } from "./user-delete.api";

export const useUserDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UserDeleteRequestType) => userDeleteApi.deleteUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    // onError: (error: any) => {
    //   console.error("Error deleting user:", error);
    // },
  });
};