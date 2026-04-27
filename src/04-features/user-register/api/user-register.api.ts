import { apiClient } from "@shared/api";
import { UserRegisterType } from "../model/user-register.schema";

export const userRegisterApi = {
    createUser: async (body: UserRegisterType) => {
        const { data } = await apiClient.post('/users/create', body);
        return data;
    },
}