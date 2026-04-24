import { ReactNode, InputHTMLAttributes } from "react";

// 1. Definimos las variantes para facilitar cambios globales (e.g. temas)
export type InputSize = "small" | "medium" | "large";
export type InputOrientation = "row" | "column";

// 2. Props específicas de nuestra abstracción de UI
interface InputCustomProps {
  label?: string;
  inputSize?: InputSize;
  orientation?: InputOrientation;
  error?: string;
  success?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  // Simplificamos los clicks: si el usuario necesita el input, usará la Ref
  onLeftIconClick?: (input: HTMLInputElement | null) => void;
  onRightIconClick?: (input: HTMLInputElement | null) => void;
  onLabelClick?: () => void;
  isRequired?: boolean;
}

// 3. Componemos con las props nativas de HTML
// Usamos Interface en lugar de Type para mejor compatibilidad con forwardRef
export interface InputProps extends InputCustomProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {}

/**
 * Props para sub-componentes internos (Composición)
 */
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
  // Añadimos un flag para saber si debe tener puntero de mouse
  isClickable?: boolean;
}

export interface InputErrorProps {
  message?: string;
  variant?: 'error' | 'success'; // Tip: Puedes reutilizar este componente para success
}