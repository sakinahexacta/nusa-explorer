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
      className={`relative z-20 text-white pt-10 sm:pt-16 pb-8 sm:pb-10 ${
        transparent
          ? "bg-transparent border-t-0"
          : "bg-[#190C38] border-t border-purple-950/60"
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8">
        {/* ================= MOBILE VIEW (1 Kolom Bertumpuk Rata Tengah) ================= */}
        <div className="md:hidden flex flex-col items-center text-center space-y-4">
          {/* Logo */}
          <Link href="/" className="inline-block transition-transform hover:scale-105">
            <NusaLogo size="lg" />
          </Link>

          {/* Deskripsi Singkat */}
          <p className="text-purple-200/80 text-xs leading-relaxed max-w-xs">
            Dengan Nusa Explorer, belajar jadi lebih mudah, seru, dan menyenangkan!
          </p>

          {/* Menu Navigasi Sederhana */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold text-white/90 pt-1 pb-1">
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

          {/* Hak Cipta Rata Tengah */}
          <div className="w-full border-t border-purple-900/40 pt-4 mt-2">
            <p className="text-xs text-purple-300/60 font-medium">
              © 2026 Nusa Explorer. All rights reserved.
            </p>
          </div>
        </div>

        {/* ================= DESKTOP VIEW (Multi-column Layout) ================= */}
        <div className="hidden md:block">
          <div className="flex flex-row items-start justify-between gap-12 pb-12 text-left">
            {/* Left Column: Brand & Tagline */}
            <div className="flex flex-col items-start max-w-sm">
              <Link href="/" className="inline-block transition-transform hover:scale-105">
                <NusaLogo size="lg" />
              </Link>
              <p className="mt-5 text-purple-200/80 text-sm leading-relaxed font-normal max-w-sm">
                Dengan Nusa Explorer, belajar jadi lebih mudah, seru, dan menyenangkan!
              </p>
            </div>

            {/* Right Columns: Links Grid */}
            <div className="grid grid-cols-3 gap-12 md:gap-16 text-left">
              {/* Column 1 */}
              <div className="flex flex-col space-y-3.5">
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
              <div className="flex flex-col space-y-3.5">
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
              <div className="flex flex-col space-y-3.5">
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
          <div className="border-t border-purple-900/40 pt-8 flex items-center justify-between text-xs text-purple-300/60 font-medium">
            <p>© 2026 Nusa Explorer. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}


