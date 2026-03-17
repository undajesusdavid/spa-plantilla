import { Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import UserCreate from "./UserCreate";

export default function UserRouter() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="create" element={<UserCreate />} />
    </Routes>
  );
}
