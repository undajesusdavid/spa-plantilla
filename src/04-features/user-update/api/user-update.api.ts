import { apiClient } from "@shared/api";
import { UserUpdateRequestType } from "../model/user-update.schema";

export const userUpdateApi = {
    updateUser: async (body: UserUpdateRequestType) => {
        const { data } = await apiClient.put('/users/update/'+body.userId, body);
        return data;
    },
}