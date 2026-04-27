import { memo } from "react";
import { InputErrorProps } from "../model/types";
import styles from "../styles/input.module.css";

export const InputError = memo(({ message }: InputErrorProps) => {

  if (!message) return null;

  return (
    <div 
      className={styles.errorWrapper}
      role="alert"
      aria-live="polite"
    >
      <p className={styles.messageError}>
        {message}
      </p>
    </div>
  );
});

InputError.displayName = "InputError";