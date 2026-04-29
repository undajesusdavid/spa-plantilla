import { getSessionToken, getMePermissionsQuery } from "@entities/session";
import { queryClient } from "@src/06-shared/api/query-client";
import { redirect } from "react-router-dom";

export const AccessSystemGuard = async () => {
  
  const token = getSessionToken();
  if (!token) {
    return redirect("/");
  }

  // try {
  //   const permissions = await queryClient.ensureQueryData(getMePermissionsQuery());
  //   return { permissions };
  // } catch (error) {
  //   // Si falla (ej. 401/403), redirigimos al login
  //   return redirect('/');
  // }
  
  
  return null;
}
