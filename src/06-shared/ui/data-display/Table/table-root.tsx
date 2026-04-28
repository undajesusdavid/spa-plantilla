import { TableProps } from './table.types';
import { TableProvider } from './_common/table.context';
import { TableHeader } from './ui/table-header';
import { TableBody } from './ui/table-body';
import { TableRow } from './ui/table-row';
import { TableCell } from './ui/table-cell';
import styles from './_common/table.module.css';
import { ReactNode } from 'react';

export const TableRoot = <T,>(props: TableProps<T>) => {
  const { data, columns, children, className, emptyMessage = 'No hay datos disponibles' } = props;
  const hasData = data && data.length > 0;

  return (
    <TableProvider>
      <div className={styles.wrapper}>
        <table className={`${styles.table} ${className ?? ''}`}>
          {/* Lógica Híbrida */}
          {data && columns ? (
            <>
              <TableHeader>
                <TableRow>
                  {columns.map((col) => (
                    <TableCell key={String(col.key)} variant="head">
                      {col.header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {hasData ? (
                  data.map((item, idx) => (
                    <TableRow key={idx}>
                      {columns.map((col) => (
                        <TableCell key={String(col.key)}>
                          {col.render ? col.render(item) : (item[col.key as keyof T] as ReactNode)}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className={styles.empty}>
                      {emptyMessage}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </>
          ) : (
            children
          )}
        </table>
      </div>
    </TableProvider>
  );
};