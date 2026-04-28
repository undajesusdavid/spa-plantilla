import { ReactNode } from "react";
import { useTableContext } from "../_common/table.context";
import styles from "../_common/table.module.css";

export const TableCell = ({
  children,
  variant = "data",
}: {
  children: ReactNode;
  variant?: "head" | "data";
}) => {
  const { dense } = useTableContext();

  const cellClasses = `${variant === "head" ? styles.th : styles.td} ${dense ? styles.dense : ""}`;

  return variant === "head" ? (
    <th className={cellClasses}>{children}</th>
  ) : (
    <td className={cellClasses}>{children}</td>
  );
};
