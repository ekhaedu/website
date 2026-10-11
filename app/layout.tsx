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
  verification: {
    google: "SSCMwDH9E7odcOvZR4JLbE2Xx7LBL_b3mxgpGT8Ds2Q",
  },
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        />
      </head>
      <body
        className={`${lexend.variable} ${inter.variable} antialiased`}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}
