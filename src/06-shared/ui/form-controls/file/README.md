# File Component

Componente de carga de archivos construido bajo el patrón de **Compound Components**.

## Características
- Patrón de **Compound Components** mediante `File.Label`, `File.Error` y `File.Preview`.
- Soporte para **carga múltiple**.
- **Previsualización** automática de imágenes y archivos.
- Tamaños de previsualización configurables (`small`, `medium`, `large`).
- Funcionalidad de **Drag and Drop**.
- Integración con `react-hook-form`.

## Uso Básico
```tsx
<File 
  label="Avatar" 
  accept="image/*" 
  onFilesChange={(files) => console.log(files)}
/>
```

## Carga Múltiple con Previsualización Grande
```tsx
<File
  label="Galería de Fotos"
  multiple
  showPreview
  previewSize="large"
  accept="image/*"
/>
```

## Uso con React Hook Form
```tsx
const { register, setValue } = useForm();

<File
  {...register("documents")}
  label="Documentos"
  multiple
  onFilesChange={(files) => setValue("documents", files)}
/>
```
