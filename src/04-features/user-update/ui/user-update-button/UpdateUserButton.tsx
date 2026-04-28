import { Button } from "@src/06-shared/ui/buttons/button";
import { PencilIcon } from  "@ui/Icons";
import { UpdateUserContent } from "./UpdateUserContent";
import { useModal } from "@src/06-shared/lib/providers/ModalProvider";

interface UserUpdateButtonProps {
  userId: string;
  userName?: string;
  userEmail?: string;
  userActive?: boolean;
}

export const UpdateUserButton = ({
  userId,
  userName,
  userEmail,
  userActive
  
}: UserUpdateButtonProps) => {
 
  const { openModal } = useModal();
  

  const handleOpenModal = () => {
    openModal({
      width: "600px",
      title: "Actualizar Usuario",
      content: (
        <UpdateUserContent
          userName={userName}
          userId={userId}
          userEmail={userEmail}
          userActive={userActive}
        />
      )
    });
  };

  return (
    <Button type="button" size="sm" variant="warning" onClick={handleOpenModal}>
      <PencilIcon size={18}  />
    </Button>
  );
};