"use client";
import { useState } from "react";
import styles from "./fallback-image.module.css";


export function FallbackImage({
  src,
  alt,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = () => setIsError(true)
  const handleLoad = () => setIsLoading(false)

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
      onError={handleError}
      onLoad={handleLoad}
      loading="lazy"
      decoding="async"
      className={`${isLoading ? styles.loading : ''} ${rest.className} `}
    />
  );
}