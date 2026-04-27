import { CreateUser } from "@features/user-register";
import Page from "../Page";
import { useNavigate } from "react-router-dom";

export default function UserCreatePage() {
  const navigate = useNavigate();
  
  return (
    <Page title="Crear Usuarios">
      <CreateUser 
        onSuccess={() => navigate("/users")}
        onCancel={() => navigate("/users")}
      />
    </Page>
  );
}

