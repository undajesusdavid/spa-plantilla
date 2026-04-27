import { useErrorDisplayContext } from "../_common/error-display.context";
import styles from "../_common/error-display.module.css";

interface ErrorDisplayTitleProps {
  children?: string;
}

export function ErrorDisplayTitle({ children }: ErrorDisplayTitleProps) {
  const { options } = useErrorDisplayContext();
  const title = children ?? options?.title ?? "Algo no salió como esperábamos";

  return <h2 className={styles.title}>{title}</h2>;
}