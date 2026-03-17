import { ReactNode } from "react";
import styles from "./Page.module.css";

interface PageProps {
  children?: ReactNode;
  title: string;
}

export default function Page({ children, title }: PageProps) {
  return (
    <div className={styles.RootPage}>
      <h1 className={styles.titlePage}>{title}</h1>
      <div className={styles.contentPage}>{children}</div>
    </div>
  );
}
