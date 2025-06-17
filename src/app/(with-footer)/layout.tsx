import { Footer } from "@/views/shared/components/footer/footer";

export default function WithFooterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer/>
    </>
  );
}