# Input Component

Componente de entrada de texto (Input) construido bajo el patrón de **Compound Components**.

## Características
- Patrón de **Compound Components** mediante `Input.Label`, `Input.Icon` e `Input.Error`.
- Soporte para iconos a la izquierda y derecha.
- Label clickeable para ejecutar funciones personalizadas.
- Estados de validación (error, success).
- Orientación configurable (row, column).
- Tamaños proporcionales (small, medium, large).

## Uso Básico
```tsx
<Input 
  label="Nombre" 
  placeholder="Ingrese su nombre" 
/>
```

## Con Iconos y Label Clickeable
```tsx
<Input
  label="Buscar"
  onLabelClick={() => console.log('Label click')}
  leftIcon={<SearchIcon />}
  onLeftIconClick={(input) => input?.focus()}
/>
```

## Uso de Sub-componentes (Avanzado)
Aunque el componente `Input` ya integra estas piezas, están disponibles para casos de composición especial:
```tsx
<Input.Label label="Custom Label" htmlFor="custom-id" />
<Input.Icon icon={<CustomIcon />} position="left" />
<Input.Error message="Error personalizado" />
```
