import { ReactNode, InputHTMLAttributes } from "react";

export interface FileProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'> {
  label?: string;
  error?: string | null;
  success?: boolean;
  orientation?: "row" | "column";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onLabelClick?: () => void;
  
  // File specific
  multiple?: boolean;
  accept?: string;
  maxSize?: number; // in bytes
  showPreview?: boolean;
  previewSize?: "small" | "medium" | "large";
  onFilesChange?: (files: File[]) => void;
  value?: File[];
}

export interface FileLabelProps {
  htmlFor: string;
  label?: string;
  isRequired?: boolean;
  handleClick?: () => void;
}

export interface FileIconProps {
  icon: ReactNode;
  position: 'left' | 'right';
  onClick?: () => void;
  isClickable?: boolean;
}

export interface FileErrorProps {
  message?: string | null;
}

export interface FilePreviewProps {
  files: File[];
  size?: "small" | "medium" | "large";
  onRemove?: (index: number) => void;
}
