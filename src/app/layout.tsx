import type { Metadata } from "next";
import { Press_Start_2P, Plus_Jakarta_Sans, Fredoka, Poppins } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Nusa Explorer - Belajar Menyenangkan Dengan Bermain!",
  description:
    "Nusa Explorer adalah platform pembelajaran interaktif yang menggabungkan materi edukatif, mini game, dan tantangan seru dalam satu petualangan.",
  keywords: ["Nusa Explorer", "Game Edukasi", "Belajar Interaktif", "IPAS", "Matematika", "Bahasa Inggris"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${pressStart2P.variable} ${plusJakartaSans.variable} ${fredoka.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Fredoka:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased font-sans flex flex-col selection:bg-purple-500 selection:text-white">
        {/* Navbar statis di luar container transisi halaman */}
        <Navbar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
