import { useState } from 'react';
import { Button } from '../../../shared/ui/BigButton';
import { useGetActaPdf } from '../hooks/useLoans';

export function LoanActaButton() {
  const [loanId, setLoanId] = useState('');
  const mutation = useGetActaPdf();

  const handleDownload = async () => {
    try {
      const blob = await mutation.mutateAsync(loanId);
      const url = window.URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = `acta-${loanId}.pdf`;
      link.click();
      window.URL.revokeObjectURL(url);
    } catch {
      alert('Error al descargar el acta.');
    }
  };

  return (
    <div style={{ display: 'grid', gap: '0.5rem', marginTop: '0.5rem' }}>
      <input value={loanId} onChange={(event) => setLoanId(event.target.value)} placeholder="ID préstamo" />
      <Button type="button" onClick={handleDownload} disabled={!loanId}>
        Descargar acta PDF
      </Button>
    </div>
  );
}
