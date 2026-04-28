
import { Table, Column } from '@ui/data-display/table';


// 05-entities/user/model/user.types.ts
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  status: 'active' | 'inactive';
}

export const MOCK_USERS: User[] = [
  { id: 1, name: 'Juan Pérez', email: 'juan@dev.com', role: 'admin', status: 'active' },
  { id: 2, name: 'Ana García', email: 'ana@dev.com', role: 'editor', status: 'active' },
  { id: 3, name: 'Luis Moore', email: 'luis@dev.com', role: 'viewer', status: 'inactive' },
];

export const TestComponent = () => {
  
  const columns: Column<User>[] = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Usuario' },
    { key: 'email', header: 'Correo Electrónico' },
    { 
      key: 'status', 
      header: 'Estado',
      render: (user) => (
        <span style={{ color: user.status === 'active' ? 'green' : 'red' }}>
          {user.status.toUpperCase()}
        </span>
      )
    },
  ];
  
  return (
    <section>
      <h2>Lista de Usuarios (Nivel 1)</h2>
      <Table data={MOCK_USERS} columns={columns} />
    </section>
  );
};