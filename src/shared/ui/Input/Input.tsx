import { useId } from "react"; // Hook nativo de React
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string; // Nueva prop para el mensaje
}

export function Input({ label, error, ...props }: InputProps) {
  const id = useId();
  const inputClass = `${styles.input} ${error ? styles.inputError : ""}`;

  return (
    <label htmlFor={id} className={styles.wrapper}>
      {label && <span className={styles.label}>{label}</span>}
      <input id={id} className={inputClass} {...props} />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </label>
  );
}
