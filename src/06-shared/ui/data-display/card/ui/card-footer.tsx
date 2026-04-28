import { useCardContext } from "../_common/card.context";
import styles from "../_common/card.module.css";

export function CardFooter({ children }: { children?: React.ReactNode }) {
  const { options } = useCardContext();
  
  // If children provided, render them directly
  if (children) {
    return <div className={styles.footer}>{children}</div>;
  }
  
  // Auto-construction from options
  if (options?.footer) {
    return <div className={styles.footer}>{options.footer}</div>;
  }
  
  return null;
}