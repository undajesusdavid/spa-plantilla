import { useGetUsers } from "@src/05-entities/user/api/user.query";
import { Loading } from "@ui/feedback/Loading";
import { ErrorDisplay } from "@ui/data-display/error-display";
import { UserTable } from "./UserTable/UserTable";

export function UserList() {
  const { data, isLoading, error } = useGetUsers();

  if (isLoading) return <Loading label="Cargando Lista de Usuarios" />;
  if (error) return <ErrorDisplay />;

  return (
    <UserTable data={data ?? []} />
  );
}
