import { forwardRef } from 'react'
import { Input } from "@ui/form-controls/input";
import { InputProps } from "@ui/form-controls/input/model/types";
import { EmailIcon } from "@ui/Icons";


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
        leftIcon={<EmailIcon/>}
        required
        ref={ref}
        {...rest}
    />
  )
})

