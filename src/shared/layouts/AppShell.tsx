import { ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AppShell.module.css';
import { useAuthStore } from '../../modules/users/store/auth.store';

interface AppShellProps { children: ReactNode; }

const menu = [
  { 
    icon: '👥', title: 'Usuarios', 
    links: [{ label: 'Lista', to: '/users' }, { label: 'Crear', to: '/users/create' }] 
  },
  { 
    icon: '🗂️', title: 'Inventario', 
    links: [{ label: 'Cajas', to: '/inventory/boxes' }, { label: 'Buscar item', to: '/inventory/search' }] 
  },
];

export function AppShell({ children }: AppShellProps) {
  const { logout } = useAuthStore();
  const [openModule, setOpenModule] = useState('Usuarios');

  return (
    <div className={styles.appShell}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.logo}>📁</span>
          <div className={styles.title}>Archivos CMP</div>
        </div>
        <nav className={styles.nav}>
          <NavLink to="/dashboard" className={({isActive}) => isActive ? styles.active : styles.navLink}>Dashboard</NavLink>
          <button onClick={logout} className={styles.logoutBtn}>Salir</button>
        </nav>
      </header>

      <section className={styles.appMain}>
        <aside className={styles.sideMenu}>
          {menu.map((module) => (
            <div key={module.title}>
              <button 
                className={styles.moduleButton} 
                onClick={() => setOpenModule(openModule === module.title ? '' : module.title)}
              >
                {module.icon} {module.title}
              </button>
              {openModule === module.title && (
                <ul className={styles.submenu}>
                  {module.links.map(link => (
                    <li key={link.label}>
                      <NavLink to={link.to} className={styles.subLink}>{link.label}</NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </aside>
        <main className={styles.mainContent}>{children}</main>
      </section>
    </div>
  );
}