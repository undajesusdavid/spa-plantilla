import { forwardRef, useId, useRef, useEffect, useState } from "react";
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
    id: propId,
    ...rest
  } = props;

  const id = useId();
  const inputId = propId ?? id;
  const internalRef = useRef<HTMLInputElement | null>(null);
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState<boolean>(checked ?? defaultChecked ?? false);
  const [isFocused, setIsFocused] = useState(false);

  const handleRef = (instance: HTMLInputElement | null) => {
    internalRef.current = instance;

    if (!ref) return;
    if (typeof ref === "function") {
      ref(instance);
    } else {
      ref.current = instance;
    }
  };

  useEffect(() => {
    if (isControlled) {
      setInternalChecked(checked as boolean);
    }
  }, [checked, isControlled]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    const newValue = e.target.checked;
    if (!isControlled) {
      setInternalChecked(newValue);
    }

    props.onChange?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !disabled) {
      e.preventDefault();
      internalRef.current?.click();
    }
  };

  const currentChecked = isControlled ? checked : internalChecked;
  const displayLabel = showDynamicLabel
    ? (currentChecked ? activeLabel : inactiveLabel)
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
    currentChecked && styles.checked,
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
            id={inputId}
            ref={handleRef}
            disabled={disabled}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            aria-invalid={!!error}
            aria-checked={currentChecked}
            {...(isControlled ? { checked } : { defaultChecked })}
            {...rest}
          />
          <div
            className={switchClasses}
            onClick={() => !disabled && internalRef.current?.click()}
            role="switch"
            aria-checked={currentChecked}
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
            htmlFor={inputId}
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