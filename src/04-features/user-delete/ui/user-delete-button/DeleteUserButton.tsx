import { Button } from "@src/06-shared/ui/buttons/button";
import { TrashIcon } from  "@ui/Icons";
import { DeleteUserContent } from "./DeleteUserContent";
import { useModal } from "@src/06-shared/lib/providers/ModalProvider";

interface UserDeleteButtonProps {
  userId: string;
  userName?: string;
}

export const DeleteUserButton = ({
  userId,
  userName,
}: UserDeleteButtonProps) => {
 
  const { openModal } = useModal();
  

  const handleOpenModal = () => {
    openModal({
      width: "400px",
      title: "Confirmar Eliminación",
      content: (
        <DeleteUserContent
          userName={userName}
          userId={userId}
        />
      )
    });
  };

  return (
    <Button type="button" size="sm" variant="danger" onClick={handleOpenModal}>
      <TrashIcon className="w-5 h-5" />
    </Button>
  );
};
