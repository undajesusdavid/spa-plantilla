import { forwardRef, useId, useRef, useState } from "react";
import { FileProps } from "../model/types";
import { FileLabel } from "./file.label";
import { FileError } from "./file.error";
import { FilePreview } from "./file.preview";
import styles from "../_common/file.module.css";

export const File = forwardRef<HTMLInputElement, FileProps>((props, ref) => {
  const {
    label,
    error,
    success,
    orientation = "column",
    onLabelClick,
    multiple = false,
    showPreview = true,
    previewSize = "medium",
    onFilesChange,
    value,
    className,
    ...rest
  } = props;

  const id = useId();
  const internalInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [internalFiles, setInternalFiles] = useState<File[]>([]);

  // Usamos los archivos del value si existen, de lo contrario los internos
  const files = value || internalFiles;

  const handleFileSelection = (newFiles: FileList | null) => {
    if (!newFiles) return;
    
    const fileArray = Array.from(newFiles);
    const updatedFiles = multiple ? [...files, ...fileArray] : fileArray;
    
    if (!value) {
      setInternalFiles(updatedFiles);
    }
    
    if (onFilesChange) {
      onFilesChange(updatedFiles);
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    
    if (!value) {
      setInternalFiles(updatedFiles);
    }
    
    if (onFilesChange) {
      onFilesChange(updatedFiles);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelection(e.dataTransfer.files);
  };

  const handleClick = () => {
    internalInputRef.current?.click();
  };

  const dropzoneClasses = [
    styles.dropzone,
    isDragging && styles.dropzoneActive,
    error && styles.dropzoneError,
  ].filter(Boolean).join(" ");

  return (
    <div className={[styles.fileContainer, styles[orientation], className].filter(Boolean).join(" ")}>
      <FileLabel
        label={label}
        htmlFor={id}
        handleClick={onLabelClick}
        isRequired={rest.required}
      />

      <div className={styles.fieldGroup}>
        <div 
          className={dropzoneClasses}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <input
            {...rest}
            id={id}
            type="file"
            multiple={multiple}
            className={styles.hiddenInput}
            ref={(e) => {
              internalInputRef.current = e;
              if (typeof ref === 'function') ref(e);
              else if (ref) ref.current = e;
            }}
            onChange={(e) => handleFileSelection(e.target.files)}
          />
          
          <div className={styles.iconContainer}>
            {rest.leftIcon || (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            )}
          </div>
          
          <div className={styles.dropzoneText}>
            <p className={styles.dropzoneTitle}>
              {multiple ? "Seleccionar archivos" : "Seleccionar un archivo"}
            </p>
            <p>o arrastra y suelta aquí</p>
          </div>
        </div>

        {showPreview && (
          <FilePreview 
            files={files} 
            size={previewSize} 
            onRemove={handleRemoveFile} 
          />
        )}

        <FileError message={error} />
      </div>
    </div>
  );
});

File.displayName = "File";
