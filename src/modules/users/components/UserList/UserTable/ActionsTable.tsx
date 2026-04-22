import { Button } from "@ui-base/buttons/Button";
import { PencilIcon, TrashIcon, ViewIcon } from "@ui-base/Icons";
import { User } from "@modules/users/types";
import { useActionsTable } from "../hooks/useActionsTable";
import { ConfirmDelete } from "@ui-modules/overlay/ConfirmDelete";

interface ActionsTableProps {
  user: User;
}

export function ActionsTable({ user }: ActionsTableProps) {
  const { handleDelete } = useActionsTable();

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
      <ConfirmDelete
        title="Confirmación"
        message={`¿Estás seguro de que quieres eliminar el usuario ${user.username}`}
        onConfirm={() => handleDelete(user.id)}
      >
        <TrashIcon size={"16px"} /> {/* Este es el children */}
      </ConfirmDelete>
    </>
  );
}
