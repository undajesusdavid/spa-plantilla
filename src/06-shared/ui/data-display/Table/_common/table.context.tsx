import { createContext, useContext, ReactNode } from 'react';

interface TableContextValue {
    hoverable?: boolean;
    dense?: boolean;
}

const TableContext = createContext<TableContextValue | undefined>(undefined);

export const TableProvider = ({
    children,
    value = { hoverable: true, dense: false }
}: {
    children: ReactNode;
    value?: TableContextValue
}) => {
    return (
        <TableContext.Provider value= { value } >
        { children }
        </TableContext.Provider>
  );
};

export const useTableContext = () => {
    const context = useContext(TableContext);
    // No lanzamos error obligatoriamente si queremos que los 
    // sub-componentes funcionen de forma atómica con defaults.
    return context || { hoverable: true, dense: false };
};