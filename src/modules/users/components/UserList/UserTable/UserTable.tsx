import SmallButton from "../../../../../shared/ui/SmallButton";
import { Column, Table } from "../../../../../shared/ui/Table";
import { User } from "../../../types";
import styles from "../UserList.module.css";
import { ActionsTable } from "./ActionsTable";

interface UserTableProps {
  data: User[];
}

export function UserTable({ data }: UserTableProps) {
  const columns: Column<User>[] = [
    {
      header: "Usuario",
      key: "username",
      render: (user: User) => (
        <span className={styles.username}>{user.username}</span>
      ),
    },
    {
      header: "Email",
      key: "email",
      render: (user: User) => (
        <span className={styles.email}>{user.email}</span>
      ),
    },
    {
      header: "Estado",
      key: "active",
      width: "100px",
      render: (user: User) => (
        <SmallButton variant={user.active ? "success" : "outline-danger"}>
          {user.active ? "Activo" : "Inactivo"}
        </SmallButton>
      ),
    },
    {
      header: "Acciones",
      key: "id",
      width: "300px",
      render: (user: User) => <ActionsTable user={user} />,
    },
  ];

  return (
    <Table data={data} columns={columns} keyExtractor={(u) => u.id} />
  );
}
