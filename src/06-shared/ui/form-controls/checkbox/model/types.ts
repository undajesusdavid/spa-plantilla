import { ReactNode, InputHTMLAttributes } from "react";

/** Componente principal */

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  checkboxSize?: "small" | "medium" | "large";
  orientation?: "row" | "column";
  error?: string | null;
  success?: boolean;
  helperText?: ReactNode;
  labelPosition?: "left" | "right";
  onLabelClick?: () => void;
  isRequired?: boolean;
  /** Label shown when checkbox is checked (default: "Activo") */
  activeLabel?: string;
  /** Label shown when checkbox is unchecked (default: "Inactivo") */
  inactiveLabel?: string;
  /** If true, shows activeLabel/inactiveLabel instead of static label */
  showDynamicLabel?: boolean;
}

/** Sub-Componentes */

export interface CheckboxLabelProps {
  htmlFor: string;
  label?: string;
  isRequired?: boolean;
  className?: string;
  handleClick?: () => void;
}

export interface CheckboxErrorProps {
  message?: string | null;
  variant?: "error" | "success";
}

export interface CheckboxHelperTextProps {
  children?: ReactNode;
  className?: string;
}