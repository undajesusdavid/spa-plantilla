import { useAuthStore } from "@modules/users";
import { redirect } from "react-router-dom";

export function AccessLoginGuard() {
  const token = useAuthStore.getState().token;
  
  if (token) {
    return redirect("/dashboard");
  }

  return null;
}
