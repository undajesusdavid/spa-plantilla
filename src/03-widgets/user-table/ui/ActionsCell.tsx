import { Button } from "@ui/buttons/button";
import { PencilIcon, TrashIcon, ViewIcon } from "@ui/Icons";
import { userType } from "@entities/user";
import { DeleteUserButton } from "@features/user-delete";

interface ActionsTableProps {
  user: userType;
}

export function ActionsCell({ user }: ActionsTableProps) {
  
  return (
    < >
      {/* Boton para ver detalles */}
      <Button size="sm" variant="info" onClick={() => null}>
        <ViewIcon size={"16px"} />
      </Button>

      {/* Boton para editar usuarios */}
      <Button size="sm" variant="warning" onClick={() => null}>
        <PencilIcon size={"16px"} />
      </Button>

      {/* Boton para eliminar usuarios */}
      <DeleteUserButton userId={user.id} userName={user.username} />
    </>
  );
}
