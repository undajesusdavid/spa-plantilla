import { useUsersList } from "../../hooks/useUsers";
import { Loading } from "../../../../shared/ui/feedback/Loading";
import { ErrorDisplay } from "../../../../shared/components/data-display/ErrorDisplay";
import { UserTable } from "./UserTable/UserTable";

export function UserList() {
  const { data, isLoading, error } = useUsersList();

  if (isLoading) return <Loading label="Cargando Lista de Usuarios" />;
  if (error) return <ErrorDisplay />;

  return (
    <UserTable data={data ?? []} />
  );
}
