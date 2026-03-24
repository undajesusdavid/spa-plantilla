import { Button } from "../../../../../shared/ui/Button";
import { PencilIcon, TrashIcon, ViewIcon } from "../../../../../shared/ui/Icons";
import { User } from "../../../types";
import { useActionsTable } from "../hooks/useActionsTable";
import { ConfirmDelete } from "../../../../../shared/components/ConfirmDelete";

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
