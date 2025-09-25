import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });
const poppins  = Poppins({ subsets: ["latin"], weight: ["600","700","800"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: { default: "Didik Rakyat", template: "%s | Didik Rakyat" },
  description: "Satu aplikasi, pelbagai kegunaan untuk pelajar, suri rumah, dan usahawan.",
  metadataBase: new URL("http://localhost:3000")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${openSans.variable} ${poppins.variable} antialiased bg-[var(--color-background)] text-[var(--color-foreground)]`}>
        <Header />
        <main className="pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
