import React from "react";
import styles from "./ButtonContainer.module.css";

type Alignment = "left" | "center" | "right";

interface ButtonContainerProps {
  children: React.ReactNode;
  align?: Alignment;
  className?: string;
}

export const ButtonContainer: React.FC<ButtonContainerProps> = ({
  children,
  align = "left",
  className = "",
}) => {
  // Mapeo de alineación a clases CSS
  const alignmentClass = {
    left: styles.alignLeft,
    center: styles.alignCenter,
    right: styles.alignRight,
  }[align];

  return (
    <div className={`${styles.container} ${alignmentClass} ${className}`}>
      {children}
    </div>
  );
};
