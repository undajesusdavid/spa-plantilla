import { forwardRef, ChangeEvent, useState } from "react";
import { InputBase } from "./input.base";
import { InputProps } from "../model/types";

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    handleValidation,
    error: externalError,
    successColor,
    ...rest
  } = props;

  const [error, setError] = useState<string | null>(null);
  const [isSuccessFul, setIsSuccessFul] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (handleValidation) {
      const result = handleValidation(e);
      setError(result)
      if (result) {
        e.target.value === "" &&  setError(null);
        setIsSuccessFul(false);
      } else {
        setIsSuccessFul(!!(successColor && !externalError));
      }
    }

    rest.onChange?.(e);
  };

  return (
    <InputBase
      {...rest}
      ref={ref}
      error={error || externalError}
      success={isSuccessFul}
      onChange={handleChange}
    />
  );
});

Input.displayName = "Input";
