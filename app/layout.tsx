import type { Metadata } from "next";
import { Lexend, Inter } from "next/font/google";
import "./globals.css";
import { Preloader } from "../components/ui/Preloader";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ekha Learning Platform: AI & Expert Guided Education",
  description: "Ekha offers a revolutionary learning experience combining advanced AI analysis with human expert career guidance. Get full syllabus access, secure coin-based pricing, and personalized study plans for your child.",
  keywords: ["Ekha", "Learning Platform", "Online Education", "AI Tutor", "Career Guidance", "SCERT", "ICSE", "Digital Learning"],
  openGraph: {
    title: "Ekha Learning Platform",
    description: "Technology Assists. Humans Guide. Secure, transparent learning with 24/7 AI homework companion and complete syllabus coverage.",
    type: "website",
    siteName: "Ekha",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} ${inter.variable} antialiased`}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}
