import { Table } from "@ui/data-display/table";
import { Loading } from "@ui/feedback/Loading";
import { ErrorDisplay } from "@ui/data-display/error-display";
import { useUserTable } from "./useUserTable";


export const UserTable = () => {
  const { users, isLoading, serverError } = useUserTable();

  if (isLoading) return <Loading label="Cargando Lista de Usuarios" />;
  if (serverError) return <ErrorDisplay />;

  return (
    <Table >
      <Table.Header>
        <Table.Row>
          <Table.Cell>Email</Table.Cell>
          <Table.Cell>Username</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {users.map(user => (
          <Table.Row key={user.id}>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.username}</Table.Cell>
            <Table.Cell>{user.active ? "Yes" : "No"}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
