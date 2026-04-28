import { ReactNode } from "react";

export interface CardOptions {
  title?: string;
  subtitle?: string;
  footer?: ReactNode;
  variant?: "default" | "outlined" | "elevated";
  padding?: "none" | "small" | "medium" | "large";
}

export interface CardContextValue {
  options?: CardOptions;
}

export interface CardRootProps {
  options?: CardOptions;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}