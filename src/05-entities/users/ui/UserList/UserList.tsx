import { useUsersList } from "@entities/users/api/use-user";
import { Loading } from "@ui/feedback/Loading";
import { ErrorDisplay } from "@ui/data-display/error-display";
import { UserTable } from "./UserTable/UserTable";

export function UserList() {
  const { data, isLoading, error } = useUsersList();

  if (isLoading) return <Loading label="Cargando Lista de Usuarios" />;
  if (error) return <ErrorDisplay />;

  return (
    <UserTable data={data ?? []} />
  );
}
