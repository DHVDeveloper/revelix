"use client";
import { useState } from "react";
import styles from "./fallback-image.module.css";


export function FallbackImage({
  src,
  alt,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    if (!isError) {
      setIsError(true);
    }
  };

  if (isError) {
    return (
      <div className={styles.fallbackimage}>
        <span>IMAGE NOT AVAILABLE</span>
      </div>
    );
  }

  return (
    <img
      {...rest}
      src={src}
      alt={alt}
      onError={() => {
        handleError();
      }}
      loading="lazy"
      decoding="async"
    />
  );
}