import { useRef, useCallback } from "react";
import { UseMutateFunction } from "@tanstack/react-query";
import { useToast } from "../../shared/context/ToastContext";
import { useApiErrors } from "../../api/hooks/useApiErrors";

interface UseFormMutationOptions<TData, TError, TVariables> {
    mutation: {
        mutate: UseMutateFunction<TData, TError, TVariables, unknown>;
        isPending: boolean;
        isError: boolean;
        error: TError | null;
        reset: () => void;
    };
    successMessage?: string;
    errorMessage?: string;
    onSuccess?: (data: TData) => void;
}

export function useFormMutation<
    TVariables,
    TData = any,
    TError = any,
    TInputErrors = any
>({
    mutation,
    successMessage = "Operación exitosa",
    errorMessage = "Ha ocurrido un error",
    onSuccess,
}: UseFormMutationOptions<TData, TError, TVariables>) {

    const { addToast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);

    // Extraemos errores específicos de los campos (inputs)
    const { inputErrors } = useApiErrors<TInputErrors>(mutation.error);

    const executeSubmit = useCallback(() => {
        if (formRef.current) {
            formRef.current.requestSubmit();
        }
    }, []);

    const handleSave = (
        data: TVariables,
        e?: React.FormEvent<HTMLFormElement>
    ) => {
        const targetForm = e?.currentTarget;

        mutation.mutate(data, {
            onSuccess: (responseData) => {
                targetForm?.reset();
                mutation.reset();
                addToast("success", successMessage);
                if (onSuccess) onSuccess(responseData);
            },
            onError: () => {
                // Solo mostramos toast de error general si no hay errores de validación de campos
                if (Object.keys(inputErrors as object).length === 0) {
                    addToast("error", errorMessage);
                }
            },
        });
    };

    return {
        formRef,
        executeSubmit,
        handleSave,
        inputErrors,
        isPending: mutation.isPending,
        isError: mutation.isError,
        error: mutation.error,
        reset: mutation.reset,
    };
}