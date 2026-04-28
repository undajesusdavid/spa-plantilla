import { ButtonContainer } from "@src/06-shared/ui/buttons/button-container/ButtonContainer";
import Button from "@src/06-shared/ui/buttons/button/Button";
import { useToast } from "@src/01-app/providers/ToastContext";
import { useUserDeleteMutation } from "../../api/user-delete.mutations";
import { useEffect } from "react";
import { useModal } from "@src/06-shared/lib/providers/ModalProvider";
import { Loading } from "@src/06-shared/ui/feedback/Loading";

interface DeleteUserContentProps {
  userId: string;
  userName?: string;
}

export const DeleteUserContent = ({
  userId,
  userName,
}: DeleteUserContentProps) => {
  const { addToast } = useToast();
  const { mutate, isPending } = useUserDeleteMutation();
  const { updateOptions, closeModal } = useModal();

  useEffect(() => {
    updateOptions({ restrictClose: isPending });
  }, [isPending, updateOptions]);

  const onConfirm = () => {
    mutate(
      { userId },
      {
        onSuccess: () => {
          addToast("success", "Usuario eliminado correctamente", "Éxito");
        },
        onError: (err) => {
          addToast(
            "error",
            err.message || "Error al eliminar el usuario",
            "Error",
          );
        },
      },
    );
  };

  return (
    <div className="user-delete-form">
      {isPending ? (
        <Loading label="Eliminando usuario..." />
      ) : (
        <>
          <p>
            ¿Está seguro de que desea eliminar el usuario{" "}
            <strong>{userName || userId}</strong>?
          </p>
          <p className="text-muted">Esta acción no se puede deshacer.</p>
        </>
      )}

      <ButtonContainer align="right" className="mt-6">
        <Button
          type="button"
          variant="ghost"
          onClick={closeModal}
          disabled={isPending}
        >
          Cancelar
        </Button>

        <Button
          type="button"
          variant="danger"
          onClick={onConfirm}
          disabled={isPending}
        >
          {isPending ? "Eliminando..." : "Eliminar Usuario"}
        </Button>
      </ButtonContainer>
    </div>
  );
};
