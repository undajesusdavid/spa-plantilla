import { useGetUsers } from "@src/05-entities/user";


export const useUserTable = () => {
    const { data, isLoading, error } = useGetUsers();
    return {
        users: data || [],
        isLoading,
        serverError: error,
    };
}