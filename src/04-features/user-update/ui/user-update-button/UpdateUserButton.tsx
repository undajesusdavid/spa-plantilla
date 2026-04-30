import { Button } from "@src/06-shared/ui/buttons/button";
import { PencilIcon } from "@ui/Icons";
import { UpdateUserContent } from "./UpdateUserContent";
import { useModal } from "@src/06-shared/lib/providers/ModalProvider";
import { useAbility } from "@src/05-entities/session";

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
  userActive,
}: UserUpdateButtonProps) => {
  const { openModal } = useModal();
  const {can, notify} = useAbility();
  const canUpdate = can("user:update");

  const handleOnClick = () => {
    if (canUpdate) {
      openModal({
        width: "600px",
        title: "Actualizar Usuario",
        content: (
          <UpdateUserContent
            userId={userId}
            name={userName}
            email={userEmail}
            active={userActive}
          />
        ),
      });
    }else{
      notify("No posee permisos para actualizar los datos de usuarios");
    }
  };

  return (
    <Button type="button" size="sm" variant="warning" disabled={!canUpdate} onClick={handleOnClick}>
      <PencilIcon size={18} />
    </Button>
  );
};
