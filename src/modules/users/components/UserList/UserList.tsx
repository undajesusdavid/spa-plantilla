import { Table, Column } from "../../../../shared/ui/Table/Table";
import { useUsersList } from "../../hooks/useUsers";
import { GetUserResponse } from "../../domain/schemas"; // Tu tipo de dominio
import { Loading } from "../../../../shared/ui/Loading";
import { ErrorDisplay } from "../../../../shared/ui/ErrorDisplay";
import styles from "./UserList.module.css";
import SmallButton from "../../../../shared/ui/SmallButton";
import { Button } from "../../../../shared/ui/Button";
import { TrashIcon, PencilIcon } from "../../../../shared/ui/Icons";

export function UserList() {
  const { data, isLoading, error } = useUsersList();

  const columns: Column<GetUserResponse>[] = [
    {
      header: "Usuario",
      key: "username",
      render: (user) => <span className={styles.username}>{user.username}</span>
    },
    {
      header: "Email",
      key: "email",
      render: (user) => <span className={styles.email}>{user.email}</span>
    },
    {
      header: "Estado",
      key: "active",
      width: "100px",
      render: (user) => (
        <SmallButton variant={user.active ? "success" : "outline-danger"}>
          {user.active ? "Activo" : "Inactivo"}
        </SmallButton>
      ),
    },
    {
      header: "Acciones",
      key: "id",
      width: "300px",
      render: (user) => (
        <>
          <Button
            size="sm"
            variant="warning"
            onClick={() => console.log("Edit:", user.id)}
          >
            <PencilIcon />
          </Button>

          <Button
            size="sm"
            variant="danger"
            onClick={() => null}
          >
            <TrashIcon />
          </Button>
        </>
      ),
    },
  ];

  if (isLoading) return <Loading />;
  if (error) return <ErrorDisplay />;

  return (
    <Table data={data ?? []} columns={columns} keyExtractor={(u) => u.id} />
  );
}
