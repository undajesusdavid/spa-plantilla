import { UserList } from "../../modules/users";
import Page from "../Page";

export default function UserListPage() {
  return (
    <Page title="Listado de usuarios">
      <UserList />
    </Page>
  );
}
