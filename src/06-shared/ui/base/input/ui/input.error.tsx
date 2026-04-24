import { InputErrorProps } from "../model/types";
import styles from "../styles/input-error.module.css";


export const InputError = ({ message }: InputErrorProps) => {
  if (!message) return null;
  
  return (
    <div className={styles.errorWrapper}>
        <p className={styles.messageError}>{message}</p>
    </div>
  );
};