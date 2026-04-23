import { ReactNode } from "react";
import styles from "./Table.module.css";

export interface Column<T> {
  header: string;
  key: keyof T | string;
  render?: (item: T) => ReactNode;
  width?: string;
}

interface Props<T> {
  data: T[];
  columns: Column<T>[];
  keyExtractor: (item: T) => string | number;
}

export function Table<T>({ data, columns, keyExtractor }: Props<T>) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th key={i} style={{ width: col.width }}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={keyExtractor(item)}>
                {columns.map((col, i) => (
                  <td key={i}>
                    {col.render
                      ? col.render(item)
                      : (item[col.key as keyof T] as ReactNode)}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className={styles.empty}>
                No se encontraron registros.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
