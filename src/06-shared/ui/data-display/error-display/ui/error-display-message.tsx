import { useErrorDisplayContext } from "../_common/error-display.context";
import styles from "../_common/error-display.module.css";

interface ErrorDisplayMessageProps {
  children?: string;
}

export function ErrorDisplayMessage({ children }: ErrorDisplayMessageProps) {
  const { options } = useErrorDisplayContext();
  const message =
    children ??
    options?.message ??
    "No pudimos cargar la información en este momento. Por favor, inténtalo de nuevo.";

  return <p className={styles.message}>{message}</p>;
}