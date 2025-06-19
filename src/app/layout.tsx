import { AlertProvider } from "@/views/shared/context/alert/alert.provider";
import { ThemeProvider } from "@/views/shared/context/theme/theme.provider";
import type { Metadata } from "next";
import { Roboto, Roboto_Condensed } from 'next/font/google';
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-roboto-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Revelix",
  description: "Your ultimate platform for exploring movies.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="es" data-theme="dark">
      <body className={`${roboto.variable} ${roboto_condensed.variable}`}>
        <ThemeProvider><AlertProvider>{children}</AlertProvider></ThemeProvider>
      </body>
    </html>
  );
}
