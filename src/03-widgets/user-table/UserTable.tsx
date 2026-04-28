import { Table } from "@ui/data-display/table";
import { Loading } from "@ui/feedback/Loading";
import { ErrorDisplay } from "@ui/data-display/error-display";
import { useUserTable } from "./useUserTable";
import { ActionsCell } from "./ui/ActionsCell";

export const UserTable = () => {
  const { users, isLoading, serverError } = useUserTable();

  if (isLoading) return <Loading label="Cargando Lista de Usuarios" />;
  if (serverError) return <ErrorDisplay />;

  const columns = [
    { key: "email", header: "Email" },
    { key: "username", header: "Username" },
    {
      key: "active",
      header: "Active",
      render: (user: any) => (user.active ? "Yes" : "No"),
    },
    {
      key: "actions",
      header: "Actions",
      render: (user: any) => <ActionsCell user={user} />,
    },
  ];

  return (
    <Table data={users} columns={columns} emptyMessage="No hay usuarios disponibles" />
  );
};
