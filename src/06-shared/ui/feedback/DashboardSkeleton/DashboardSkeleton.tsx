// src/06-shared/ui/skeletons/DashboardSkeleton/DashboardSkeleton.tsx
import styles from "./DashboardSkeleton.module.css";

interface Props {
  message?: string;
}

export const DashboardSkeleton = ({
  message = "Cargando configuración...",
}: Props) => {
  return (
    <div className={styles.wrapper}>
      {/* Estructura Gris de Fondo */}
      <div className={styles.backgroundSkeleton} aria-hidden="true">
        <header className={styles.header}>
          <div
            className={styles.skeletonItem}
            style={{ width: "100px", height: "24px" }}
          />
          <div
            className={styles.skeletonItem}
            style={{ width: "32px", height: "32px", borderRadius: "50%" }}
          />
        </header>
        <div className={styles.body}>
          <aside className={styles.sidebar}>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={styles.skeletonItem}
                style={{ height: "32px" }}
              />
            ))}
          </aside>
          <main className={styles.content}>
            <div
              className={styles.skeletonItem}
              style={{ width: "200px", height: "32px" }}
            />
            <div className={styles.grid}>
              <div
                className={styles.skeletonItem}
                style={{ height: "140px" }}
              />
              <div
                className={styles.skeletonItem}
                style={{ height: "140px" }}
              />
            </div>
          </main>
        </div>
      </div>

      {/* Mensaje Central */}
      <div className={styles.messageOverlay}>
        <div className={styles.messageCard}>
          <div className={styles.spinner} />
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};
