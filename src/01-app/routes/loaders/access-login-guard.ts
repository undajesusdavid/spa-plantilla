import { useSessionStore } from "@entities/session";
import { redirect } from "react-router-dom";

export function AccessLoginGuard() {
  const token = useSessionStore.getState().token;
  
  if (token) {
    return redirect("/dashboard");
  }

  return null;
}
