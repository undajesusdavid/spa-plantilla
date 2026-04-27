# Select Component

Componente de selección (Dropdown) construido bajo el patrón de **Compound Components** con **Complejidad Gradual**.

## Características
- Soporta autoconstrucción mediante la prop `options`.
- Soporta composición pura mediante `Select.Item` o `children`.
- Label clickeable para ejecutar funciones personalizadas.
- Soporte para iconos a la izquierda y derecha.
- Estados de validación (error, success).
- Orientación configurable (row, column).
- Tamaños proporcionales (small, medium, large).

## Uso Básico (Nivel 1: Options)
```tsx
<Select 
  label="País" 
  options={[
    { value: 'es', label: 'España' },
    { value: 'mx', label: 'México' }
  ]} 
/>
```

## Uso Compuesto (Nivel 3: Children)
```tsx
<Select label="Categoría">
  <Select.Item value="1">Electrónica</Select.Item>
  <Select.Item value="2">Hogar</Select.Item>
</Select>
```

## Con Iconos y Label Clickeable
```tsx
<Select
  label="Buscar"
  onLabelClick={() => console.log('Label click')}
  leftIcon={<SearchIcon />}
  rightIcon={<ArrowIcon />}
/>
```
