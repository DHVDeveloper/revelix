import { Footer } from "@/views/shared/components/footer/footer";
import { Header } from "@/views/shared/components/header/header";
import styles from "./layout.module.css"

export default function WithFooterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.main}>
      <Header/>
      {children}
      <Footer/>
    </div>
  );
}