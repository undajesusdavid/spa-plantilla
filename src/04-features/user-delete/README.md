# User Delete Feature

Feature para eliminar usuarios del sistema.

## Estructura

```
user-delete/
├── api/
│   ├── user-delete.api.ts      # Instancia Axios y llamadas REST
│   └── user-delete.mutations.ts # Hooks de TanStack Query
├── model/
│   └── user-delete.schema.ts   # Validaciones Zod
├── ui/
│   └── user-delete-form/
│       ├── UserDeleteForm.tsx  # Componente React
│       └── useUserDeleteForm.ts # Hook con lógica de UI
└── index.ts                    # Public API
```

## Uso

```tsx
import { UserDeleteForm } from "@features/user-delete";

<UserDeleteForm 
  userId="123"
  userName="Juan Pérez"
  onSuccess={() => console.log("Usuario eliminado")}
  onCancel={() => console.log("Cancelado")}
/>
```

## Dependencias

- `@shared/api` - Cliente de Axios
- `@tanstack/react-query` - Gestión de estado de servidor
- `@entities/user` - Entidades de usuario
- `@context/ToastContext` - Notificaciones toast