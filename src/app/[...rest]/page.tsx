import { Footer } from "@/views/shared/components/footer/footer";
import { Header } from "@/views/shared/components/header/header";
import styles from "./not-found.module.css";
import { BackButton } from "@/views/shared/components/backButton/back-button";

export default function CatchAllPage() {
  const title = "Page Not Found"
  const subtitle = "The page you're looking for doesn't exist or has been moved."
  
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.notFound}>
        <div className={styles.buttonBackToList}>
          <BackButton route="/">Back to home</BackButton>
        </div>
        <h1 className={styles.errorTitle}>{title}</h1>
        <span className={styles.errorSubtitle}>
          {subtitle}
        </span>
      </div>
      <Footer />
    </div>
  );
}
