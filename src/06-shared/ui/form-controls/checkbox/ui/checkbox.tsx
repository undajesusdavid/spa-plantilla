import { forwardRef, useId, useImperativeHandle, useRef, useEffect, useState } from "react";
import styles from "../_common/checkbox.module.css";
import { CheckboxProps } from "../model/types";
import { CheckboxLabel } from "./checkbox.label";
import { CheckboxError } from "./checkbox.error";
import { CheckboxHelperText } from "./checkbox.helper-text";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    label,
    checkboxSize = "medium",
    orientation = "row",
    error,
    success,
    helperText,
    labelPosition = "right",
    onLabelClick,
    className,
    checked,
    defaultChecked,
    disabled,
    activeLabel = "Activo",
    inactiveLabel = "Inactivo",
    showDynamicLabel = false,
    ...rest
  } = props;

  const id = useId();
  const internalRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(checked ?? defaultChecked ?? false);
  const [isFocused, setIsFocused] = useState(false);

  useImperativeHandle(ref, () => internalRef.current!);

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const newValue = e.target.checked;
    setIsChecked(newValue);
    props.onChange?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !disabled) {
      e.preventDefault();
      internalRef.current?.click();
    }
  };

  // Determinar el label a mostrar
  const displayLabel = showDynamicLabel
    ? (isChecked ? activeLabel : inactiveLabel)
    : label;

  const containerClasses = [
    styles.checkboxContainer,
    styles[orientation],
    labelPosition === "left" ? styles.labelLeft : "",
    className,
  ].filter(Boolean).join(" ");

  const switchClasses = [
    styles.switchContainer,
    styles[checkboxSize],
    isChecked && styles.checked,
    disabled && styles.disabled,
    isFocused && styles.focused,
    error && styles.error,
    success && styles.success,
  ].filter(Boolean).join(" ");

  return (
    <div className={containerClasses}>
      <div className={styles.fieldGroup}>
        <div className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            className={styles.checkboxInput}
            id={id}
            ref={internalRef}
            checked={isChecked}
            disabled={disabled}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            {...rest}
          />
          <div
            className={switchClasses}
            onClick={() => !disabled && internalRef.current?.click()}
            role="switch"
            aria-checked={isChecked}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : 0}
          >
            <div className={styles.switchTrack} />
            <div className={styles.switchThumb} />
          </div>
        </div>

        {displayLabel && (
          <CheckboxLabel
            label={displayLabel}
            htmlFor={id}
            handleClick={onLabelClick}
            isRequired={rest.required}
            disabled={disabled}
          />
        )}
      </div>

      {error && <CheckboxError message={error} />}
      {success && !error && <CheckboxError message={success ? "Válido" : null} variant="success" />}
      {helperText && !error && <CheckboxHelperText>{helperText}</CheckboxHelperText>}
    </div>
  );
});

Checkbox.displayName = "Checkbox";