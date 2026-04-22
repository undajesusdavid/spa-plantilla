import UserCreatePage from "@/pages/users/UserCreatePage";
import UserListPage from "@/pages/users/UserListPage";

export const usersRouter = [
  { index: true, element: <UserListPage /> },
  { path: "create", element: <UserCreatePage /> },
];
