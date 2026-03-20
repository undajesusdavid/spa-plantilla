import styles from "./Form.module.css";

// Definimos un tipo genérico para que el onSubmit sea tipado desde afuera
interface FormProps<T> {
  children: React.ReactNode;
  // Actualizamos aquí: añadimos el parámetro opcional 'e'
  onSubmit: (data: T, e: React.FormEvent<HTMLFormElement>) => void;
  title?: string;
  actions?: React.ReactNode;
}

export function Form<T = Record<string, any>>({
  children,
  onSubmit,
  title,
  actions,
}: FormProps<T>) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Creamos el objeto manualmente para evitar problemas de tipos con entries()
    const data = {} as T;

    formData.forEach((value, key) => {
      // Esto asegura que captures todos los campos con 'name'
      (data as any)[key] = value;
    });

    // Enviamos los datos y el evento para poder hacer el reset() después
    onSubmit(data, e);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {title && <h2 className={styles.formTitle}>{title}</h2>}
      <div className={styles.content}>{children}</div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </form>
  );
}
