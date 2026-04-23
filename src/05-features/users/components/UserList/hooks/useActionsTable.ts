import { useQueryClient } from "@tanstack/react-query";
import { useDeleteUser } from "@features/users/hooks/useUsers";
import { useModal } from "@context/ModalContext";
import { useToast } from "@context/ToastContext";

export function useActionsTable() {
    const queryClient = useQueryClient();
    const { mutate: deleteUser } = useDeleteUser();

    const { closeModal } = useModal();
    const { addToast, config } = useToast();

    const handleDelete = (id: string) => {
        deleteUser(id, {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["users"] });
                config("top-center", "500px");
                addToast(
                    "success",
                    "El usuario ha sido eliminado",
                    "Proceso Finalizado",
                );
                closeModal();
            },
            onError: () => {
                addToast("error", "No se pudo eliminar el usuario", "Error");
            },
        });
    };

    return {handleDelete}
}