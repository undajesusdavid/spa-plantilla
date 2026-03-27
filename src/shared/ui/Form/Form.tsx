import { forwardRef } from "react";
import styles from "./Form.module.css";

// Definimos un tipo genérico para que el onSubmit sea tipado desde afuera
interface FormProps<T> {
  children: React.ReactNode;
  // Actualizamos aquí: añadimos el parámetro opcional 'e'
  onSubmit: (data: T, e: React.FormEvent<HTMLFormElement>) => void;
  title?: string;
  actions?: React.ReactNode;
  isValid: () => boolean;
  id?: string; // Añadimos el ID opcional
}

export const Form = forwardRef<HTMLFormElement, FormProps<any>>(
  ({ children, onSubmit, title, actions, isValid, id }, ref) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = {} as any;
      formData.forEach((value, key) => {
        data[key] = value;
      });

      if (isValid()) {
        onSubmit(data, e);
      }
    };

    return (
      <form
        ref={ref} // <--- Aquí conectamos el "control remoto"
        id={id}
        onSubmit={handleSubmit}
        className={styles.form}
      >
        {title && <h2>{title}</h2>}
        <div>{children}</div>
      </form>
    );
  },
);
