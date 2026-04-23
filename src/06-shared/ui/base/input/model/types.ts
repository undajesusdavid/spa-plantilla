import { ReactNode } from "react";

export type InputProps = {
    label?: string;
    inputSize?: "small" | "medium" | "large";
    orientation?: "row" | "column";
    error?: string;
    success?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    leftIconClick?: (input: HTMLInputElement) => void;
    rightIconClick?: (input: HTMLInputElement) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;


export type InputLabelProps = {
    htmlFor: string;
    label?: string;
    isRequired?: boolean;
    className?: string;
};

export type InputIconProps = {
  icon?: ReactNode;             // Puede ser un SVG, un componente de Lucide, etc.
  position: 'left' | 'right';   // Determina el anclaje absoluto
  onClick?: () => void;         // Por si el icono es interactivo (ej. limpiar campo)
}