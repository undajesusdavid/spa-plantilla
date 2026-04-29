// src/06-shared/ui/TopProgressBar/TopProgressBar.tsx
import styles from './TopProgressBar.module.css';

export const TopProgressBar = () => {
  return (
    <div className={styles.container} role="progressbar" aria-valuemall="indeterminate">
      <div className={styles.bar}>
        {/* Este div interno crea el efecto de luz al final de la barra */}
        <div className={styles.peg} />
      </div>
    </div>
  );
};