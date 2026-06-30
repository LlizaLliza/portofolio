import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
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
  title: "Uki Aula Fauzi — Web Developer & IT Specialist",
  description:
    "Portfolio Uki Aula Fauzi — Web Developer (Laravel, CodeIgniter, Native), IT Support Specialist, dan Game Developer. Berpengalaman membangun sistem informasi akademik dan aplikasi web.",
  keywords: ["portfolio", "php developer", "laravel", "codeigniter", "web developer", "game developer", "IT support"],
  openGraph: {
    title: "Uki Aula Fauzi — Web Developer & IT Specialist",
    description: "Portfolio Uki Aula Fauzi — Web Developer, IT Support Specialist, dan Game Developer.",
    url: "https://llizafauzi.vercel.app/",
    siteName: "Uki Aula Fauzi Portfolio",
    images: [
      {
        url: "https://llizafauzi.vercel.app/portofolio.PNG",
        width: 1200,
        height: 630,
        alt: "Uki Aula Fauzi Portfolio Thumbnail",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uki Aula Fauzi — Web Developer & IT Specialist",
    description: "Portfolio Uki Aula Fauzi — Web Developer, IT Support Specialist, dan Game Developer.",
    images: ["https://llizafauzi.vercel.app/portofolio.PNG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // suppressHydrationWarning on <html> only: lang attribute is updated
  // client-side by LanguageContext after mount. This is standard Next.js
  // practice and also guards against browser extension attribute injection.
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
