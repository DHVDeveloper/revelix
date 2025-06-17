import { Footer } from "@/views/shared/components/footer/footer";
import { Header } from "@/views/shared/components/header/header";

export default function WithFooterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
}