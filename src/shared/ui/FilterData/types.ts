export interface FilterConfig<T> {
    searchProperty: keyof T; // Propiedad para el buscador de texto
    categoryProperty?: keyof T; // Propiedad para el dropdown de categorías
}

export interface FilterDataProps<T> {
    data: T[];
    config: FilterConfig<T>;
    onFilter: (filteredData: T[]) => void;
    placeholder?: string;
}