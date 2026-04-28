import { apiClient } from "@shared/api";
import { UserRegisterRequestType } from "../model/user-register.schema";

export const userRegisterApi = {
    createUser: async (body: UserRegisterRequestType) => {
        const { data } = await apiClient.post('/users/create', body);
        return data;
    },
}