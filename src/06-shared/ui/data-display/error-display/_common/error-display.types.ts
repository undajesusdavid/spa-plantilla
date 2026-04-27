import { ReactNode } from "react";

export interface ErrorDisplayOptions {
  title?: string;
  message?: string;
  errorCode?: string | number;
  onRetry?: () => void;
}

export interface ErrorDisplayContextValue {
  options?: ErrorDisplayOptions;
}

export interface ErrorDisplayRootProps {
  options?: ErrorDisplayOptions;
  children?: ReactNode;
  className?: string;
}