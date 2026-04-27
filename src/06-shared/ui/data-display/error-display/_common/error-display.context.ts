import { createContext, useContext } from "react";
import type { ErrorDisplayContextValue } from "./error-display.types";

const ErrorDisplayContext = createContext<ErrorDisplayContextValue | null>(null);

export function useErrorDisplayContext(): ErrorDisplayContextValue {
  const ctx = useContext(ErrorDisplayContext);
  if (!ctx) {
    return { options: {} };
  }
  return ctx;
}

export { ErrorDisplayContext };