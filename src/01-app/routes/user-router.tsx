import UserCreatePage from "@pages/users-page/UserCreatePage";
import { UsersPage } from "@pages/users-page/UsersPage";

export const UserRouter = [
  { index: true, element: <UsersPage />, handle: { permission: "user:read"} },
  { path: "create", element: <UserCreatePage />,  handle: { permission: "user:create"}  },
];
