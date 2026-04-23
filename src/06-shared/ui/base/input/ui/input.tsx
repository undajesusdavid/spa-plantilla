import { forwardRef, useId, useImperativeHandle, useRef } from "react";
import styles from "../styles/input.module.css";
import { InputProps } from "../model/types";
import { InputLabel } from "./input.label";
import { InputIcon } from "./input.icon";

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    inputSize,
    orientation,
    error,
    success,
    leftIcon,
    rightIcon,
    leftIconClick,
    rightIconClick,
    ...rest
  } = props;
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current!);

  const inputClasses = [
    styles.input,
    inputSize ? styles[inputSize] : styles.medium,
    error && styles.inputError,
    success && styles.inputSuccess,
    leftIcon && styles.hasLeftIcon,
    rightIcon && styles.hasRightIcon,
    rest.className, // Clases extra que vengan por props
  ]
    .filter(Boolean)
    .join(" ");

  const containerClasses = [
    styles.inputContainer,
    orientation ? styles[orientation] : styles.column,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClickLeftIcon = () => {
    if (leftIconClick) {
      if (leftIconClick && inputRef.current) {
        leftIconClick(inputRef.current);
      }
    }
  };

  const handleClickRightIcon = () => {
    if (rightIconClick) {
      if (rightIconClick && inputRef.current) {
        rightIconClick(inputRef.current);
      }
    }
  };

  return (
    <div className={containerClasses}>
      <InputLabel label={label} htmlFor={id} isRequired={rest.required} />
      <div className={styles.inputWrapper}>
        <input className={inputClasses} id={id} {...rest} ref={inputRef} />
        <InputIcon
          icon={leftIcon}
          position="left"
          onClick={!rest.disabled ? handleClickLeftIcon : undefined}
        />
        <InputIcon
          icon={rightIcon}
          position="right"
          onClick={!rest.disabled ? handleClickRightIcon : undefined}
        />
      </div>
    </div>
  );
});
