import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uki Aula Fauzi — PHP Web Developer & IT Specialist",
  description:
    "Portfolio Uki Aula Fauzi — PHP Web Developer (Laravel, CodeIgniter, Native), IT Support Specialist, dan Game Developer. Berpengalaman membangun sistem informasi akademik dan aplikasi web.",
  keywords: ["portfolio", "php developer", "laravel", "codeigniter", "web developer", "game developer", "IT support"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
