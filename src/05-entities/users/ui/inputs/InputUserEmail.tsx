import { forwardRef } from 'react'
import { Input } from '@src/06-shared/ui/base/input'
import { InputProps } from "@shared/ui/base/input";


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

