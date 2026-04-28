import { useCardContext } from "../_common/card.context";
import styles from "../_common/card.module.css";

export function CardHeader({ children }: { children?: React.ReactNode }) {
  const { options } = useCardContext();
  
  // If children provided, render them directly
  if (children) {
    return <div className={styles.header}>{children}</div>;
  }
  
  // Auto-construction from options
  if (options?.title || options?.subtitle) {
    return (
      <div className={styles.header}>
        {options.title && <h3 className={styles.title}>{options.title}</h3>}
        {options.subtitle && <p className={styles.subtitle}>{options.subtitle}</p>}
      </div>
    );
  }
  
  return null;
}