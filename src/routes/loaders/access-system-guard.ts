import { useAuthStore } from "@modules/users";
import { redirect } from "react-router-dom";

export function AccessSystemGuard() {
  const token = useAuthStore.getState().token;
 
  if (!token) {
    return redirect("/");
  }
  
  return null;
}
