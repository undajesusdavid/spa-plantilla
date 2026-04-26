import { useSessionStore } from "@src/05-entities/session/model";
import { redirect } from "react-router-dom";

export function AccessSystemGuard() {
  const token = useSessionStore.getState().token;
 
  if (!token) {
    return redirect("/");
  }
  
  return null;
}
