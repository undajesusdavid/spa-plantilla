import { Route, Routes } from "react-router-dom";
import UserListPage from "./UserListPage";
import UserCreatePage from "./UserCreatePage";

export default function UserRouter() {
  return (
    <Routes>
      <Route path="/" element={<UserListPage />} />
      <Route path="create" element={<UserCreatePage />} />
    </Routes>
  );
}
