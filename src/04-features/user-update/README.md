# User Update Feature

Feature para actualizar usuarios del sistema.

## Estructura

```
user-update/
├── api/
│   ├── user-update.api.ts      # Instancia Axios y llamadas REST
│   └── user-update.mutations.ts # Hooks de TanStack Query
├── model/
│   └── user-update.schema.ts   # Validaciones Zod
├── ui/
│   └── user-update-button/
│       ├── UpdateUserButton.tsx  # Componente React
│       └── UpdateUserContent.tsx # Contenido del modal
└── index.ts                    # Public API
```

## Uso

```tsx
import { UpdateUserButton } from "@features/user-update";

<UpdateUserButton 
  userId="123"
  userName="Juan Pérez"
  userEmail="juan@email.com"
  userRole="admin"
/>
```

## Dependencias

- `@shared/api` - Cliente de Axios
- `@tanstack/react-query` - Gestión de estado de servidor
- `@entities/user` - Entidades de usuario
- `@context/ToastContext` - Notificaciones toast
- `@shared/lib/providers/ModalProvider` - Modal
- `@shared/ui/form-controls` - Componentes de formulario