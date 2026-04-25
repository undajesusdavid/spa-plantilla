import { memo } from "react";
import { InputIconProps } from "../model/types";
import styles from "../styles/input.module.css";

export const InputIcon = memo(({ 
  icon, 
  position, 
  onClick,
  isClickable
}: InputIconProps) => {
  
  if (!icon) return null;

  const containerClasses = [
    styles.iconContainer,
    styles[position], // styles.left o styles.right
    isClickable && styles.isClickable
  ].join(" ").trim();

  // Si tiene onClick, debe comportarse como un botón para accesibilidad
  if (onClick) {
    return (
      <button
        type="button" // Evita que dispare el submit del formulario
        className={containerClasses}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClick();
        }}
        tabIndex={-1} // Opcional: suele ser mejor que el foco se quede en el input
        aria-hidden="true" // Evita que el lector de pantalla se confunda (el input es lo principal)
      >
        {icon}
      </button>
    );
  }

  // Si no tiene onClick, es puramente decorativo
  return (
    <div className={containerClasses} aria-hidden="true">
      {icon}
    </div>
  );
});

InputIcon.displayName = "InputIcon";