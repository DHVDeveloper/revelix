import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./button.module.css";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  isLoading?: boolean
}

export function Button({
  children,
  variant = "primary",
  className = "",
  disabled = false,
  ...rest
}: ButtonProps) {
  const variantClass = styles[variant] || styles.primary;
  const disabledClass = disabled ? styles.disabled : "";

  return (
    <button
      {...rest}
      disabled={disabled}
      className={`${styles.button} ${variantClass} ${disabledClass} ${className}`}
    >
      {children}
    </button>
  );
}