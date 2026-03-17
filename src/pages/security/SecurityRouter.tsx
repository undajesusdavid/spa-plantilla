import { Route, Routes } from "react-router-dom";
import RoleList from "./RoleList";
import PermissionList from "./PermissionList";
import { SecurityDashboard } from "./SecurityDashboard";


export default function SecurityRouter() {
  return (
    <Routes>
      <Route path="/" element={<SecurityDashboard />} />
      <Route path="/roles" element={<RoleList />} />
      <Route path="/permissions" element={<PermissionList />} />
    </Routes>
  );
}
