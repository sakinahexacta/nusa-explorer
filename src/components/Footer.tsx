import React from "react";
import Link from "next/link";
import NusaLogo from "./NusaLogo";

interface FooterProps {
  className?: string;
  transparent?: boolean;
}

export default function Footer({ className = "", transparent = false }: FooterProps) {
  return (
    <footer
      className={`relative z-20 text-white pt-8 sm:pt-12 pb-6 sm:pb-8 ${
        transparent
          ? "bg-transparent border-t-0"
          : "bg-[#190C38] border-t border-purple-950/60"
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Kontainer Utama: 1 Kolom Rata Tengah di Mobile, Baris Kiri-Kanan di Desktop */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0 gap-4 md:gap-8 pb-6 sm:pb-8">
          {/* Logo & Deskripsi Singkat */}
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <NusaLogo size="lg" />
            </Link>
            <p className="mt-3 text-purple-200/80 text-xs sm:text-sm leading-relaxed font-normal">
              Dengan Nusa Explorer, belajar jadi lebih mudah, seru, dan menyenangkan!
            </p>
          </div>

          {/* Menu Navigasi: Beranda, Materi, Panduan Bermain */}
          <nav className="flex flex-wrap items-center justify-center md:justify-end gap-5 sm:gap-8 text-xs sm:text-sm font-bold text-white/90">
            <Link href="/" className="hover:text-purple-300 transition-colors">
              Beranda
            </Link>
            <Link href="/materi" className="hover:text-purple-300 transition-colors">
              Materi
            </Link>
            <Link href="/panduan" className="hover:text-purple-300 transition-colors">
              Panduan Bermain
            </Link>
          </nav>
        </div>

        {/* Garis Pemisah Horizontal */}
        <div className="border-t border-purple-900/40 my-2" />

        {/* Bottom Bar: Icon Bulat N & Hak Cipta */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 text-center text-xs text-purple-300/70 font-medium">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center md:text-left">
            {/* Logo Bulat N (di atas teks pada mobile, samping teks pada desktop) */}
            <div className="w-6 h-6 rounded-full bg-[#3B1578] border border-purple-400/50 flex items-center justify-center text-white font-pixel font-black text-[10px] shadow-sm select-none">
              N
            </div>
            <span>© 2026 Nusa Explorer. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
