# Checkbox (Switch)

Componente de checkbox con apariencia de switch/toggle, construido con React y CSS Modules sin dependencias externas.

## Instalación

```tsx
import { Checkbox } from "@src/06-shared/ui/form-controls/checkbox";
```

## Uso Básico

```tsx
<Checkbox label="Aceptar términos" />
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `label` | `string` | - | Label estático del checkbox |
| `checkboxSize` | `"small" \| "medium" \| "large"` | `"medium"` | Tamaño del switch |
| `orientation` | `"row" \| "column"` | `"row"` | Orientación del layout |
| `labelPosition` | `"left" \| "right"` | `"right"` | Posición del label respecto al switch |
| `checked` | `boolean` | - | Estado controlado (boolean) |
| `defaultChecked` | `boolean` | - | Estado inicial no controlado |
| `disabled` | `boolean` | `false` | Deshabilita el switch |
| `error` | `string \| null` | - | Mensaje de error |
| `success` | `boolean` | - | Muestra estado de éxito |
| `helperText` | `ReactNode` | - | Texto de ayuda |
| `activeLabel` | `string` | `"Activo"` | Label cuando está marcado |
| `inactiveLabel` | `string` | `"Inactivo"` | Label cuando está desmarcado |
| `showDynamicLabel` | `boolean` | `false` | Activa label dinámico |
| `onLabelClick` | `() => void` | - | Callback al hacer click en el label |
| `isRequired` | `boolean` | - | Marca el label como requerido |
| `className` | `string` | - | Clases CSS adicionales |
| `onChange` | `(e: ChangeEvent<HTMLInputElement>) => void` | - | Callback al cambiar estado |

## Tamaños

```tsx
// Small - 36x20px
<Checkbox checkboxSize="small" label="Pequeño" />

// Medium - 48x26px (default)
<Checkbox checkboxSize="medium" label="Mediano" />

// Large - 60x32px
<Checkbox checkboxSize="large" label="Grande" />
```

## Estados

```tsx
// Checked
<Checkbox label="Activo" checked={true} />

// Unchecked
<Checkbox label="Inactivo" checked={false} />

// Disabled
<Checkbox label="Deshabilitado" disabled />

// Error
<Checkbox label="Con error" error="Campo requerido" />

// Success
<Checkbox label="Válido" success />
```

## Label Dinámico

El switch puede mostrar diferentes labels según su estado:

```tsx
// Con labels por defecto
<Checkbox showDynamicLabel defaultChecked />
// true → "Activo", false → "Inactivo"

// Con labels personalizados
<Checkbox 
  showDynamicLabel
  activeLabel="Habilitado"
  inactiveLabel="Deshabilitado"
/>
```

## Orientación

```tsx
// Horizontal (default)
<Checkbox orientation="row" label="Fila" />

// Vertical
<Checkbox orientation="column" label="Columna" />
```

## Posición del Label

```tsx
// Label a la derecha (default)
<Checkbox labelPosition="right" label="Derecha" />

// Label a la izquierda
<Checkbox labelPosition="left" label="Izquierda" />
```

## Con React Hook Form

```tsx
import { useForm } from "react-hook-form";

function FormExample() {
  const { register, handleSubmit } = useForm();
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Checkbox 
        label="Aceptar términos"
        {...register("terms", { required: true })}
      />
    </form>
  );
}
```

## Con Control de React Hook Form

```tsx
import { useController } from "react-hook-form";

function ControlledCheckbox({ control, name }) {
  const { field } = useController({ name, control });
  
  return (
    <Checkbox
      label="Notificaciones"
      checked={field.value}
      onChange={(e) => field.onChange(e.target.checked)}
    />
  );
}
```

## Accesibilidad

- Rol `switch` con `aria-checked`
- Soporte para keyboard (Enter para togglear)
- Focus visible con ring
- Labels asociados correctamente via `htmlFor`
- Soporte para `disabled` con aria apropiado

## Estilos

El componente utiliza CSS Modules con las siguientes clases:

- `.checkboxContainer` - Contenedor principal
- `.switchContainer` - Contenedor del switch
- `.switchTrack` - Track del switch (fondo)
- `.switchThumb` - Thumb del switch (circulo móvil)
- `.checkboxLabel` - Label del switch
- `.checkboxError` - Mensaje de error
- `.checkboxHelperText` - Texto de ayuda

## Personalización

Puedes personalizar el componente mediante:

1. **CSS Modules**: Sobreescribiendo las clases en `checkbox.module.css`
2. **className**: Agregando clases adicionales
3. **Props de tamaño**: `checkboxSize`
4. **Props de orientación**: `orientation`, `labelPosition`

## Ejemplo Completo

```tsx
<Checkbox
  label="Notificaciones push"
  checkboxSize="large"
  orientation="row"
  labelPosition="right"
  showDynamicLabel
  activeLabel="Activado"
  inactiveLabel="Desactivado"
  helperText="Recibirás notificaciones en tu dispositivo"
  onChange={(e) => console.log("Changed:", e.target.checked)}
/>
```