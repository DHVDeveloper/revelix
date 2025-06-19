import { Footer } from "@/views/shared/components/footer/footer";
import { Header } from "@/views/shared/components/header/header";
import styles from "./layout.module.css";
import { AuthProvider } from "@/views/shared/context/auth/auth.provider";

export default function WithFooterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className={styles.main}>
        <Header />
        {children}
        <Footer />
      </div>
    </AuthProvider>
  );
}