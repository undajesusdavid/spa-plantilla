import { forwardRef, useId, useImperativeHandle, useRef } from "react";
import styles from "../_common/select.module.css";
import { SelectProps } from "../model/types";
import { SelectLabel } from "./select.label";
import { SelectIcon } from "./select.icon";
import { SelectError } from "./select.error";

export const Select = forwardRef<HTMLSelectElement, SelectProps<any>>((props, ref) => {
  const {
    label,
    options,
    value,
    onChange,
    onValueChange,
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
    children,
    ...rest
  } = props;

  const id = useId();
  const internalRef = useRef<HTMLSelectElement>(null);
  useImperativeHandle(ref, () => internalRef.current!);

  const selectClasses = [
    styles.select,
    styles[inputSize],
    error ? styles.selectError : "",
    success && styles.selectSuccess,
    leftIcon && styles.hasLeftIcon,
    rightIcon && styles.hasRightIcon,
    className,
  ].filter(Boolean).join(" ");

  const handleIconClick = (handler?: (el: HTMLSelectElement | null) => void) => {
    if (!handler || rest.disabled) return;
    handler(internalRef.current);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e);
    }
    if (onValueChange) {
      onValueChange(e.target.value as any);
    }
  };

  return (
    <div className={[styles.selectContainer, styles[orientation]].join(" ")}>
      <SelectLabel
        label={label}
        htmlFor={id}
        handleClick={onLabelClick}
        isRequired={rest.required}
      />

      <div className={styles.fieldGroup}>
        <div className={styles.selectWrapper}>
          <select
            className={selectClasses}
            id={id}
            value={value}
            onChange={handleChange}
            ref={internalRef}
            {...rest}
          >
            {options
              ? options.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                    {opt.label}
                  </option>
                ))
              : children}
          </select>
          <SelectIcon
            icon={leftIcon}
            position="left"
            onClick={() => handleIconClick(onLeftIconClick)}
            isClickable={!!onLeftIconClick}
          />
          <SelectIcon
            icon={rightIcon}
            position="right"
            onClick={() => handleIconClick(onRightIconClick)}
            isClickable={!!onRightIconClick}
          />
        </div>

        <SelectError message={error} />
      </div>
    </div>
  );
});

Select.displayName = "Select";
