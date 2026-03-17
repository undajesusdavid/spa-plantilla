import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./SmallButton.module.css";

interface SmallButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
}

const SmallButton: React.FC<SmallButtonProps> = ({
  children,
  variant = "primary",
  icon,
  className = "",
  ...props
}) => {
  // Combinamos las clases dinámicamente
  const buttonClass = `${styles.btn} ${styles[variant]} ${className}`;

  return (
    <button className={buttonClass} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default SmallButton;
