import { useId } from "react"; // Hook nativo de React
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, ...props }: InputProps) {
  const id = useId(); // Genera un ID único como ":r1:"

  return (
    <label htmlFor={id} className={styles.wrapper}>
      {label && <span className={styles.label}>{label}</span>}
      <input id={id} className={styles.input} {...props} />
    </label>
  );
}
