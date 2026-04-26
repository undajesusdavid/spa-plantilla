import { forwardRef, useId, useImperativeHandle, useRef } from "react";
import styles from "../styles/input.module.css";
import { InputProps } from "../model/types";
import { InputLabel } from "./input.label";
import { InputIcon } from "./input.icon";
import { InputError } from "./input.error";

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    inputSize = "medium",
    orientation = "column",
    error,
    success,
    leftIcon,
    rightIcon,
    onLeftIconClick,
    onRightIconClick,
    onLabelClick,
    className,
    ...rest
  } = props;
  const id = useId();
  const internalRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => internalRef.current!);

  const inputClasses = [
    styles.input,
    styles[inputSize],
    error ? styles.inputError : "",
    success && styles.inputSuccess,
    leftIcon && styles.hasLeftIcon,
    rightIcon && styles.hasRightIcon,
    className,
  ].filter(Boolean).join(" ");

  const handleIconClick = (handler?: (el: HTMLInputElement | null) => void) => {
    if (!handler || rest.disabled) return;
    handler(internalRef.current);
  };

  return (
    <div className={[styles.inputContainer, styles[orientation]].join(" ")}>
      <InputLabel
        label={label}
        htmlFor={id}
        handleClick={onLabelClick}
        isRequired={rest.required}
      />

      {/* Nuevo contenedor: Agrupa el Input y el Error verticalmente */}
      <div className={styles.fieldGroup}>
        <div className={styles.inputWrapper}>
          <input className={inputClasses} id={id} {...rest} ref={internalRef} />
          <InputIcon
            icon={leftIcon}
            position="left"
            onClick={() => handleIconClick(onLeftIconClick)}
            isClickable={!!onLeftIconClick}
          />
          <InputIcon
            icon={rightIcon}
            position="right"
            onClick={() => handleIconClick(onRightIconClick)}
            isClickable={!!onRightIconClick}
          />
        </div>

        <InputError message={error} />
      </div>
    </div>
  );
});
