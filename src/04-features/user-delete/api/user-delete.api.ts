import { apiClient } from "@shared/api";
import { UserDeleteRequestType } from "../model/user-delete.schema";

export const userDeleteApi = {
    deleteUser: async (body: UserDeleteRequestType) => {
        const { data } = await apiClient.delete('/users/delete/'+body.userId);
        return data;
    },
} 