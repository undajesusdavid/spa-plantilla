import { ReactNode } from 'react';

export interface Column<T> {
    key: keyof T | string;
    header: string;
    render?: (item: T) => ReactNode;
}

export interface TableProps<T> {
    data?: T[];           // Nivel 1
    columns?: Column<T>[]; // Nivel 1
    children?: ReactNode;  // Nivel 3
    className?: string;
    emptyMessage?: string;
}

export interface TableContextProps {
    isStriped?: boolean;
}