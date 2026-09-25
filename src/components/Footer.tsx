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
      className={`relative z-20 text-white pt-10 sm:pt-14 pb-6 sm:pb-8 ${
        transparent
          ? "bg-transparent border-t-0"
          : "bg-[#190C38] border-t border-purple-950/60"
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Top Section: Sisi Kiri (Logo & Deskripsi) & Sisi Kanan (3 Kolom Navigasi) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-14 pb-8 sm:pb-10">
          {/* SISI KIRI: Logo Nusa Explorer & Deskripsi Rata Kiri */}
          <div className="flex flex-col items-start max-w-sm">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <NusaLogo size="lg" />
            </Link>
            <p className="mt-4 text-white/90 text-xs sm:text-[13px] leading-relaxed font-normal">
              Dengan Nusa Explorer, belajar jadi lebih mudah, seru, dan menyenangkan!
            </p>
          </div>

          {/* SISI KANAN: 3 Kolom Navigasi Lengkap */}
          <div className="w-full md:w-auto grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 md:gap-14 text-left">
            {/* Kolom 1: Beranda */}
            <div className="flex flex-col space-y-2.5 sm:space-y-3">
              <Link
                href="/"
                className="text-sm sm:text-[14px] font-semibold text-white hover:text-purple-300 transition-colors"
              >
                Beranda
              </Link>
              <Link
                href="/panduan"
                className="text-xs sm:text-[12px] text-gray-300 hover:text-white transition-colors font-normal"
              >
                Permainan
              </Link>
            </div>

            {/* Kolom 2: Materi */}
            <div className="flex flex-col space-y-2.5 sm:space-y-3">
              <Link
                href="/materi"
                className="text-sm sm:text-[14px] font-semibold text-white hover:text-purple-300 transition-colors"
              >
                Materi
              </Link>
              <Link
                href="/materi/ipas"
                className="text-xs sm:text-[12px] text-gray-300 hover:text-white transition-colors font-normal"
              >
                IPAS
              </Link>
              <Link
                href="/materi"
                className="text-xs sm:text-[12px] text-gray-300 hover:text-white transition-colors font-normal"
              >
                Matematika
              </Link>
              <Link
                href="/materi"
                className="text-xs sm:text-[12px] text-gray-300 hover:text-white transition-colors font-normal"
              >
                Bahasa Inggris
              </Link>
            </div>

            {/* Kolom 3: Panduan Bermain */}
            <div className="col-span-2 sm:col-span-1 flex flex-col space-y-2.5 sm:space-y-3">
              <Link
                href="/panduan"
                className="text-sm sm:text-[14px] font-semibold text-white hover:text-purple-300 transition-colors"
              >
                Panduan Bermain
              </Link>
              <Link
                href="/panduan"
                className="text-xs sm:text-[12px] text-gray-300 hover:text-white transition-colors font-normal"
              >
                Petunjuk
              </Link>
              <Link
                href="/panduan"
                className="text-xs sm:text-[12px] text-gray-300 hover:text-white transition-colors font-normal"
              >
                Control Permainan
              </Link>
              <Link
                href="/panduan"
                className="text-xs sm:text-[12px] text-gray-300 hover:text-white transition-colors font-normal"
              >
                Guide Permainan
              </Link>
            </div>
          </div>
        </div>

        {/* Garis Pemisah Horizontal Putih Tegas Sesuai Figma */}
        <div className="w-full h-[2px] bg-white my-2" />

        {/* BOTTOM BAR: Icon © Putih & Teks "2026 Nusa Explorer" di Kiri Bawah */}
        <div className="pt-3.5 flex items-center justify-start text-white">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-white/90 font-medium">
            <Copyright className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white flex-shrink-0" strokeWidth={2} />
            <span>2026 Nusa Explorer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
