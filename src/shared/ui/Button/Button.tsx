import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "ghost"
    | "danger"
    | "warning"
    | "success"
    | "outline-danger";
  size?: "sm" | "md" | "lg"; // <-- Manejamos el tamaño aquí
  icon?: ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md", // Por defecto mediano
  icon,
  fullWidth = false,
  className = "",
  ...props
}) => {
  const buttonClass = [
    styles.btn,
    styles[variant],
    styles[size], // Clase para el tamaño
    fullWidth ? styles.fullWidth : "",
    className,
  ].join(" ");

  return (
    <button className={buttonClass} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
