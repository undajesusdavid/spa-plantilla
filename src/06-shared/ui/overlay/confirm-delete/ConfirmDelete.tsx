import { useModal } from "@context/ModalContext";
import { Button } from "@src/06-shared/ui/buttons/button";

interface ConfirmDeleteProps {
  title?: string;
  message: string;
  onConfirm: () => void;
  children: React.ReactNode; // El botón o elemento que dispara la confirmación
}

export function ConfirmDelete({
  title = "Confirmación",
  message,
  onConfirm,
  children,
}: ConfirmDeleteProps) {
  const { openModal, closeModal } = useModal();

  const handleOpenConfirm = () => {
    openModal({
      title: title,
      content: <p>{message}</p>,
      footer: (
        <>
          <Button size="sm" variant="ghost" onClick={closeModal}>
            Cancelar
          </Button>
          <Button
            size="sm"
            variant="danger"
            onClick={() => {
              onConfirm();
              closeModal();
            }}
          >
            Aceptar
          </Button>
        </>
      ),
    });
  };

  // Retornamos el elemento que al hacer click abre el modal
  return (
    <Button
      size="sm"
      variant="danger"
      onClick={handleOpenConfirm}
      style={{ display: "inline-block" }}
    >
      {children}
    </Button>
  );
}
