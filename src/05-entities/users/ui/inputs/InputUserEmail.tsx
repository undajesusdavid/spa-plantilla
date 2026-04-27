import { forwardRef } from 'react'
import { Input } from "@ui/input";
import { InputProps } from "@ui/input/model/types";


interface InputUserEmailProps extends Omit<InputProps, "type"  > {}

export const  InputUserEmail = forwardRef<HTMLInputElement, InputUserEmailProps>((props, ref) => {
  const {
    name="email", 
    label="Email", 
    placeholder="Ingrese un correo electrónico", 
    ...rest} = props;
  return (
    <Input
        type='email' 
        name={name}
        label={label}
        placeholder={placeholder}
        ref={ref}
        {...rest}
    />
  )
})

