export interface ColumnConfig<T> {
    header: string;
    key: keyof T;
    render?: (value: any, item: T) => React.ReactNode;
}

export interface TableProps<T> {
    data: T[];
    columns: ColumnConfig<T>[];
    selectedIds: Set<string | number>;
    onSelect: (ids: Set<string | number>) => void;
}