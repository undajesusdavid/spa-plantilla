import { ReactNode, SelectHTMLAttributes } from "react";

export interface SelectOption<T = string | number> {
  value: T;
  label: string;
  disabled?: boolean;
}

export interface SelectProps<T = string | number> extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'> {
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onValueChange?: (value: T) => void;
  error?: string;
  success?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onLeftIconClick?: (el: HTMLSelectElement | null) => void;
  onRightIconClick?: (el: HTMLSelectElement | null) => void;
  onLabelClick?: () => void;
  inputSize?: "small" | "medium" | "large";
  orientation?: "row" | "column";
  children?: ReactNode;
}

export interface SelectItemProps<T = string | number> {
  value: T;
  label?: string;
  children?: ReactNode;
  disabled?: boolean;
}

export interface SelectLabelProps {
  label?: string;
  htmlFor?: string;
  handleClick?: () => void;
  isRequired?: boolean;
}

export interface SelectIconProps {
  icon?: ReactNode;
  position: "left" | "right";
  onClick?: () => void;
  isClickable?: boolean;
}

export interface SelectErrorProps {
  message?: string;
}
