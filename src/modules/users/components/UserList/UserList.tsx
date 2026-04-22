import { useUsersList } from "@modules/users/hooks/useUsers";
import { Loading } from "@ui-base/feedback/Loading";
import { ErrorDisplay } from "@ui-modules/data-display/ErrorDisplay";
import { UserTable } from "./UserTable/UserTable";

export function UserList() {
  const { data, isLoading, error } = useUsersList();

  if (isLoading) return <Loading label="Cargando Lista de Usuarios" />;
  if (error) return <ErrorDisplay />;

  return (
    <UserTable data={data ?? []} />
  );
}
