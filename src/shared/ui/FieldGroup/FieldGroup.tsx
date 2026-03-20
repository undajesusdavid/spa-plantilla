import { ReactNode } from "react";
import styles from "./FieldGroup.module.css";

interface FieldGroupProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  columns?: 1 | 2 | 3;
  orientation?: "vertical" | "horizontal"; // Nueva prop
}

export function FieldGroup({
  title,
  description,
  children,
  columns = 1,
  orientation = "vertical",
}: FieldGroupProps) {
  const gridClass = styles[`columns${columns}`];
  const orientationClass = styles[orientation]; // "vertical" o "horizontal"

  return (
    <fieldset className={`${styles.fieldset} ${orientationClass}`}>
      {title && <legend className={styles.legend}>{title}</legend>}
      {description && <p className={styles.description}>{description}</p>}
      <div className={`${styles.container} ${gridClass}`}>{children}</div>
    </fieldset>
  );
}
