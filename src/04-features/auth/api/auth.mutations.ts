import { useMutation } from "@tanstack/react-query";
import { AuthUserRequestType } from "../model/schema";
import { authApi } from "./auth.api";
import { useSessionStore } from "@src/05-entities/session/model";

export const useLoginMutation = () => {
  const setSession = useSessionStore((state) => state.setSession);
  return useMutation({
    mutationFn: (body: AuthUserRequestType) => authApi.login(body),
    onSuccess: (result) => {
      setSession(result.token, result.id, result.username);
    },
    //onError: () => {},
  });
};