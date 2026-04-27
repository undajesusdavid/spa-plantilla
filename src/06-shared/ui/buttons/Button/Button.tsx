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
    | "outline-danger"
    | "info";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean; // <-- Nueva prop
  loadingText?: string; // <-- Opcional: para cambiar el texto al cargar
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  fullWidth = false,
  className = "",
  isLoading = false, // Por defecto no está cargando
  loadingText,
  disabled,
  ...props
}) => {
  const buttonClass = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    isLoading ? styles.loading : "", // Clase para estados visuales de carga
    className,
  ].join(" ");

  return (
    <button
      className={buttonClass}
      // Se deshabilita si isLoading es true O si viene la prop disabled manualmente
      disabled={isLoading || disabled}
      {...props}
    >
      {/* Si está cargando, podemos mostrar un spinner o nada si hay loadingText */}
      {isLoading && <span className={styles.spinner}></span>}

      {/* Mostramos el icono solo si NO está cargando */}
      {!isLoading && icon && <span className={styles.icon}>{icon}</span>}

      {/* Si hay loadingText y está cargando, lo mostramos, si no, los hijos normales */}
      <span className={styles.label}>
        {isLoading && loadingText ? loadingText : children}
      </span>
    </button>
  );
};

export default Button;
