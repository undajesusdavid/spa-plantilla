import { Select } from "@src/06-shared/ui/select";
const SearchIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
      fill="currentColor"
    />
  </svg>
);


export const TestComponent = () => {
 
  return (
  <Select required label="Categoría" onLabelClick={() => console.log('Label click')} leftIcon={< SearchIcon/>}>
    <Select.Item value="1">Electrónica</Select.Item>
    <Select.Item value="2">Hogar</Select.Item>
</Select>
 );
};