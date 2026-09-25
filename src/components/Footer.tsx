import React from "react";
import Link from "next/link";
import { Copyright } from "lucide-react";
import NusaLogo from "./NusaLogo";

interface FooterProps {
  className?: string;
  transparent?: boolean;
}

export default function Footer({ className = "", transparent = false }: FooterProps) {
  return (
    <footer
      className={`relative z-20 text-white pt-12 sm:pt-16 pb-8 sm:pb-10 ${
        transparent
          ? "bg-transparent border-t-0"
          : "bg-[#190C38] border-t border-purple-950/60"
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Top Section: Sisi Kiri (Logo & Deskripsi) & Sisi Kanan (3 Kolom Navigasi) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16 pb-10 sm:pb-12">
          {/* SISI KIRI: Logo Nusa Explorer & Deskripsi Rata Kiri */}
          <div className="flex flex-col items-start max-w-sm">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <NusaLogo size="lg" />
            </Link>
            <p className="mt-5 text-white text-sm sm:text-base leading-relaxed font-normal">
              Dengan Nusa Explorer, belajar jadi lebih mudah, seru, dan menyenangkan!
            </p>
          </div>

          {/* SISI KANAN: 3 Kolom Navigasi Lengkap */}
          <div className="w-full md:w-auto grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-16 text-left">
            {/* Kolom 1: Beranda */}
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <Link
                href="/"
                className="font-bold text-white hover:text-purple-300 text-sm sm:text-base transition-colors"
              >
                Beranda
              </Link>
              <Link
                href="/panduan"
                className="font-medium text-white/90 hover:text-white text-xs sm:text-sm transition-colors"
              >
                Permainan
              </Link>
            </div>

            {/* Kolom 2: Materi */}
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <Link
                href="/materi"
                className="font-bold text-white hover:text-purple-300 text-sm sm:text-base transition-colors"
              >
                Materi
              </Link>
              <Link
                href="/materi/ipas"
                className="font-medium text-white/90 hover:text-white text-xs sm:text-sm transition-colors"
              >
                IPAS
              </Link>
              <Link
                href="/materi"
                className="font-medium text-white/90 hover:text-white text-xs sm:text-sm transition-colors"
              >
                Matematika
              </Link>
              <Link
                href="/materi"
                className="font-medium text-white/90 hover:text-white text-xs sm:text-sm transition-colors"
              >
                Bahasa Inggris
              </Link>
            </div>

            {/* Kolom 3: Panduan Bermain */}
            <div className="col-span-2 sm:col-span-1 flex flex-col space-y-3 sm:space-y-4">
              <Link
                href="/panduan"
                className="font-bold text-white hover:text-purple-300 text-sm sm:text-base transition-colors"
              >
                Panduan Bermain
              </Link>
              <Link
                href="/panduan"
                className="font-medium text-white/90 hover:text-white text-xs sm:text-sm transition-colors"
              >
                Petunjuk
              </Link>
              <Link
                href="/panduan"
                className="font-medium text-white/90 hover:text-white text-xs sm:text-sm transition-colors"
              >
                Control Permainan
              </Link>
              <Link
                href="/panduan"
                className="font-medium text-white/90 hover:text-white text-xs sm:text-sm transition-colors"
              >
                Guide Permainan
              </Link>
            </div>
          </div>
        </div>

        {/* Garis Pemisah Horizontal Putih Tegas Sesuai Figma */}
        <div className="w-full h-[2px] bg-white my-2" />

        {/* BOTTOM BAR: Icon © Putih & Teks "2026 Nusa Explorer" di Kiri Bawah */}
        <div className="pt-4 flex items-center justify-start text-white">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium">
            <Copyright className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" strokeWidth={2.2} />
            <span>2026 Nusa Explorer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
