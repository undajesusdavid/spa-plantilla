import { useState } from "react";
import { Schema } from "zod";


export const useInput = <T>() => {
    const [internalError, setInternalError] = useState<string | undefined>(undefined);
    const [success, setSuccess] = useState<boolean>(false);

    const validation = (schema: Schema, value: T) => {
        const result = schema.safeParse(value);
        if (!result.success) {
            setSuccess(false);
            setInternalError(result.error.errors[0].message);
        } else {
            setSuccess(true);
            setInternalError(undefined);
        }
    };

    return {
        internalError,
        success,
        validation
    }
}