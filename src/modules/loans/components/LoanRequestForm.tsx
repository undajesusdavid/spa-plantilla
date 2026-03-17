import { FormEvent, useState } from 'react';
import { Button } from '../../../shared/ui/BigButton';
import { Input } from '../../../shared/ui/Input';
import { useRequestLoan } from '../hooks/useLoans';
import styles from './LoanRequestForm.module.css';

export function LoanRequestForm() {
  const [message, setMessage] = useState<string | null>(null);
  const mutation = useRequestLoan();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = {
      id: String(form.get('id') || ''),
      requesterId: String(form.get('requesterId') || ''),
      targetId: String(form.get('targetId') || ''),
      targetType: String(form.get('targetType') || ''),
      notes: String(form.get('notes') || ''),
    };
    try {
      await mutation.mutateAsync(body);
      setMessage('Solicitud enviada correctamente.');
    } catch {
      setMessage('Error al crear solicitud.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Solicitar préstamo</h3>
      <Input name="id" label="ID" placeholder="UUID" />
      <Input name="requesterId" label="ID solicitante" placeholder="UUID archivista" />
      <Input name="targetId" label="ID target" placeholder="UUID caja / documento" />
      <Input name="targetType" label="Tipo" placeholder="box, folder, record, document" />
      <Input name="notes" label="Notas" placeholder="Motivo" />
      <Button type="submit">Solicitar</Button>
      {message && <div>{message}</div>}
    </form>
  );
}
