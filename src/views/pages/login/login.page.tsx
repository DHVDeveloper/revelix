"use client";
import { LoginForm } from "./login-form/login-form";
import styles from "./login.page.module.css";

export function LoginPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <LoginForm />
      </div>
    </div>
  );
}
