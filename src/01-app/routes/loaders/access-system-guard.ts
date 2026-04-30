import { getSessionToken } from "@entities/session";

import { redirect } from "react-router-dom";

export const AccessSystemGuard = async () => {
  
  const token = getSessionToken();
  if (!token) {
    return redirect("/");
  }
  
  return null;
}
