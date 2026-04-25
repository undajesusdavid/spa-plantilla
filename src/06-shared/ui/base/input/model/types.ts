import { ReactNode, InputHTMLAttributes, ChangeEvent } from "react";

/** componentes principales */

export interface InputBaseProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  inputSize?: "small" | "medium" | "large";
  orientation?: "row" | "column";
  error?: string;
  success?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onLeftIconClick?: (input: HTMLInputElement | null) => void;
  onRightIconClick?: (input: HTMLInputElement | null) => void;
  onLabelClick?: () => void;
  isRequired?: boolean;
}

export interface InputProps extends Omit<InputBaseProps, "success"> {
  handleValidation?: (e: ChangeEvent<HTMLInputElement>) => string | null;
  successColor?: boolean;
}

/** Sub-Componentes */

export interface InputLabelProps {
  htmlFor: string;
  label?: string;
  isRequired?: boolean;
  className?: string;
  handleClick?: () => void;
}

export interface InputIconProps {
  icon: ReactNode;
  position: 'left' | 'right';
  onClick?: () => void;
  isClickable?: boolean;
}

export interface InputErrorProps {
  message?: string;
  variant?: 'error' | 'success'; // Tip: Puedes reutilizar este componente para success
}