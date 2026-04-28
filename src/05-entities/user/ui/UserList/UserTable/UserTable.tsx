import SmallButton from "@ui/buttons/small-button";
import { Column, Table } from "@src/06-shared/ui/data-display/table";
import { userType } from "@entities/user";
import styles from "../UserList.module.css";
import { ActionsTable } from "./ActionsTable";

interface UserTableProps {
  data: userType[];
}

export function UserTable({ data }: UserTableProps) {
  const columns: Column<userType>[] = [
    {
      header: "Usuario",
      key: "username",
      render: (user: userType) => (
        <span className={styles.username}>{user.username}</span>
      ),
    },
    {
      header: "Email",
      key: "email",
      render: (user: userType) => (
        <span className={styles.email}>{user.email}</span>
      ),
    },
    {
      header: "Estado",
      key: "active",
     //width: "100px",
      render: (user: userType) => (
        <SmallButton variant={user.active ? "success" : "outline-danger"}>
          {user.active ? "Activo" : "Inactivo"}
        </SmallButton>
      ),
    },
    {
      header: "Acciones",
      key: "id",
      //width: "300px",
      render: (user: userType) => <ActionsTable user={user} />,
    },
  ];

  return (
    <Table data={data} columns={columns} />
  );
}
