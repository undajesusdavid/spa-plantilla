import UserCreatePage from "@src/02-pages/users-page/UserCreatePage";
import UserListPage from "@src/02-pages/users-page/UserListPage";
import { UsersPage } from "@src/02-pages/users-page/UsersPage";

export const UserRouter = [
  { index: true, element: <UsersPage /> },
  { path: "create", element: <UserCreatePage /> },
];
