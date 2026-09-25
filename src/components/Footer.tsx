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
      className={`relative z-20 text-white pt-8 sm:pt-14 pb-6 sm:pb-10 ${
        transparent
          ? "bg-transparent border-t-0"
          : "bg-[#190C38] border-t border-purple-950/60"
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8">
        {/* ================= MOBILE VIEW (Rapat & 1 Kolom Rata Tengah) ================= */}
        <div className="md:hidden flex flex-col items-center justify-center text-center space-y-3.5">
          {/* 1. Logo Nusa Explorer */}
          <Link href="/" className="inline-block transition-transform hover:scale-105">
            <NusaLogo size="lg" />
          </Link>

          {/* 2. Deskripsi */}
          <p className="text-purple-200/80 text-xs leading-relaxed max-w-xs text-center">
            Dengan Nusa Explorer, belajar jadi lebih mudah, seru, dan menyenangkan!
          </p>

          {/* 3. Navigasi Tautan Rata Tengah */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-bold text-white/90 pt-0.5">
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

          {/* 4. Garis Pemisah Horizontal */}
          <div className="w-full border-t border-purple-900/40 my-1" />

          {/* 5. Icon Bulat N & Hak Cipta Bertingkat Vertikal 1 Kolom */}
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-6 h-6 rounded-full bg-[#3B1578] border border-purple-400/50 flex items-center justify-center text-white font-pixel font-black text-[10px] shadow-sm select-none">
              N
            </div>
            <p className="text-[11px] text-purple-300/70 font-medium">
              © 2026 Nusa Explorer. All rights reserved.
            </p>
          </div>
        </div>

        {/* ================= DESKTOP VIEW (Multi-column Layout) ================= */}
        <div className="hidden md:block">
          <div className="flex flex-row items-start justify-between gap-12 pb-10 text-left">
            {/* Left Column: Brand & Tagline */}
            <div className="flex flex-col items-start max-w-sm">
              <Link href="/" className="inline-block transition-transform hover:scale-105">
                <NusaLogo size="lg" />
              </Link>
              <p className="mt-4 text-purple-200/80 text-sm leading-relaxed font-normal max-w-sm">
                Dengan Nusa Explorer, belajar jadi lebih mudah, seru, dan menyenangkan!
              </p>
            </div>

            {/* Right Columns: Links Grid */}
            <div className="grid grid-cols-3 gap-12 md:gap-16 text-left">
              {/* Column 1 */}
              <div className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="font-bold text-white hover:text-purple-300 text-sm transition-colors"
                >
                  Beranda
                </Link>
                <Link
                  href="/panduan"
                  className="text-purple-200/75 hover:text-white text-sm transition-colors"
                >
                  Permainan
                </Link>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col space-y-3">
                <Link
                  href="/materi"
                  className="font-bold text-white hover:text-purple-300 text-sm transition-colors"
                >
                  Materi
                </Link>
                <Link
                  href="/materi/ipas"
                  className="text-purple-200/75 hover:text-white text-sm transition-colors"
                >
                  IPAS
                </Link>
                <Link
                  href="/materi"
                  className="text-purple-200/75 hover:text-white text-sm transition-colors"
                >
                  Matematika
                </Link>
                <Link
                  href="/materi"
                  className="text-purple-200/75 hover:text-white text-sm transition-colors"
                >
                  Bahasa Inggris
                </Link>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col space-y-3">
                <Link
                  href="/panduan"
                  className="font-bold text-white hover:text-purple-300 text-sm transition-colors"
                >
                  Panduan Bermain
                </Link>
                <Link
                  href="/panduan"
                  className="text-purple-200/75 hover:text-white text-sm transition-colors"
                >
                  Petunjuk
                </Link>
                <Link
                  href="/panduan"
                  className="text-purple-200/75 hover:text-white text-sm transition-colors"
                >
                  Control Permainan
                </Link>
                <Link
                  href="/panduan"
                  className="text-purple-200/75 hover:text-white text-sm transition-colors"
                >
                  Guide Permainan
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Divider & Copyright Desktop */}
          <div className="border-t border-purple-900/40 pt-6 flex items-center justify-between text-xs text-purple-300/60 font-medium">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#3B1578] border border-purple-400/50 flex items-center justify-center text-white font-pixel font-black text-[9px] shadow-sm select-none">
                N
              </div>
              <span>© 2026 Nusa Explorer. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



