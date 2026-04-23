import { useMemo } from 'react';

// Añadimos <T> para que el hook sepa qué campos esperar
export function useApiErrors<T>(error: any) {
  return useMemo(() => {
    const apiData = error?.response?.data;
    const errorDetail = apiData?.error;

    // Tipamos el resultado como Partial<Record<keyof T, string>>
    // Esto significa: "un objeto cuyas llaves son las de T y sus valores son strings"
    const inputErrors = (Array.isArray(errorDetail?.message)
      ? errorDetail.message[0]
      : {}) as Partial<Record<keyof T, string>>;

    return {
      inputErrors,
      errorCode: errorDetail?.code || null,
    };
  }, [error]);
}