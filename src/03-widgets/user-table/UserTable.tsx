import { Table } from "@ui/data-display/table";
import { Loading } from "@ui/feedback/Loading";
import { ErrorDisplay } from "@ui/data-display/error-display";
import { DeleteUserButton } from "@features/user-delete";
import { useGetUsers } from "@entities/user";
import { UpdateUserButton } from "@src/04-features/user-update";

export const UserTable = () => {
  const { data: users, isLoading, error: serverError } = useGetUsers();

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
      render: (user: any) => (
        <>
          <DeleteUserButton userId={user.id} userName={user.username} />
          <UpdateUserButton
            userId={user.id}
            userName={user.username}
            userEmail={user.email}
            userActive={user.active}
          />
        </>
      ),
    },
  ];

  return (
    <Table
      data={users}
      columns={columns}
      emptyMessage="No hay usuarios disponibles"
    />
  );
};
