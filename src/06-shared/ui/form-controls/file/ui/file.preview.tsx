import { memo, useEffect, useState } from "react";
import { FilePreviewProps } from "../model/types";
import styles from "../_common/file.module.css";
import { CloseIcon } from "@ui/Icons";

export const FilePreview = memo(({ files, size = "medium", onRemove }: FilePreviewProps) => {
  const [previews, setPreviews] = useState<string[]>([]);

  useEffect(() => {
    const objectUrls = files.map(file => {
      if (file.type.startsWith('image/')) {
        return URL.createObjectURL(file);
      }
      return "";
    });
    setPreviews(objectUrls);

    // Cleanup URLs
    return () => {
      objectUrls.forEach(url => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, [files]);

  if (files.length === 0) return null;

  return (
    <div className={styles.previewContainer}>
      {files.map((file, index) => (
        <div key={`${file.name}-${index}`} className={[styles.previewItem, styles[size]].join(" ")}>
          {previews[index] ? (
            <img src={previews[index]} alt={file.name} className={styles.previewImage} />
          ) : (
            <div className={styles.previewFileIcon}>
              <span>{file.name.split('.').pop()?.toUpperCase()}</span>
            </div>
          )}
          
          {onRemove && (
            <button 
              type="button" 
              className={styles.removeBtn} 
              onClick={() => onRemove(index)}
              title="Eliminar archivo"
            >
              <CloseIcon size={12} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
});

FilePreview.displayName = "FilePreview";
