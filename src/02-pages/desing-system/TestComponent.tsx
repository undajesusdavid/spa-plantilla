import { File } from "@src/06-shared/ui/form-controls/file";

export const TestComponent = () => {
 
  return (
 <File
  label="Galería de Fotos"
  showPreview
  previewSize="large"
  accept="image/*"
/>
 );
};