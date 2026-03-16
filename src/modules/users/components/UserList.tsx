import { useUsersList } from '../hooks/useUsers';
import styles from './UserList.module.css';

export function UserList() {
  const { data, isLoading, error } = useUsersList();

  if (isLoading) return <div>Cargando usuarios...</div>;
  if (error) return <div>Error cargando usuarios.</div>;

  return (
    <ul className={styles.list}>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((user: any) => (
          <li key={user.id} className={styles.item}>
            <div>{user.username}</div>
            <small>{user.email}</small>
          </li>
        ))
      ) : (
        <li>No hay usuarios</li>
      )}
    </ul>
  );
}
