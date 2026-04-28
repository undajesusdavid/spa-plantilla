import { UserList } from "@src/05-entities/user";
import Page from "../Page";

export default function UserListPage() {
  return (
    <Page title="Listado de usuarios">
      <UserList />
    </Page>
  );
}
