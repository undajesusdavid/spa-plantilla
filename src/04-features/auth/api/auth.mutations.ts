import { useMutation } from "@tanstack/react-query";
import { AuthUserRequestType } from "../model/schema";
import { authApi } from "./auth.api";
import { useSessionStore } from "@entities/session";

export const useLoginMutation = () => {
  const setSessionAuth = useSessionStore((state) => state.setSessionAuth);
  return useMutation({
    mutationFn: (body: AuthUserRequestType) => authApi.login(body),
    onSuccess: (result) => {
      setSessionAuth(result.token, result.id, result.username);
    },
    //onError: () => {},
  });
};