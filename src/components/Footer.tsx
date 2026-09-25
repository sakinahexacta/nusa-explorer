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
      className={`relative z-20 text-white pt-12 sm:pt-16 pb-8 sm:pb-10 ${
        transparent
          ? "bg-transparent border-t-0"
          : "bg-[#190C38] border-t border-purple-950/60"
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Top Content Row: Stacked on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 sm:gap-10 md:gap-12 pb-10 sm:pb-12 text-center md:text-left">
          {/* Left Column: Brand & Tagline (Centered on mobile) */}
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <NusaLogo size="lg" />
            </Link>
            <p className="mt-4 sm:mt-5 text-purple-200/80 text-xs sm:text-sm leading-relaxed font-normal max-w-xs md:max-w-sm">
              Dengan Nusa Explorer, belajar jadi lebih mudah, seru, dan menyenangkan!
            </p>
          </div>

          {/* Right Columns: Links Grid */}
          <div className="w-full md:w-auto grid grid-cols-3 gap-3 sm:gap-8 md:gap-16 text-center sm:text-left">
            {/* Column 1 */}
            <div className="flex flex-col items-center sm:items-start space-y-2.5 sm:space-y-3.5">
              <Link
                href="/"
                className="font-bold text-white hover:text-purple-300 text-xs sm:text-sm transition-colors"
              >
                Beranda
              </Link>
              <Link
                href="/panduan"
                className="text-purple-200/75 hover:text-white text-[11px] sm:text-sm transition-colors"
              >
                Permainan
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center sm:items-start space-y-2.5 sm:space-y-3.5">
              <Link
                href="/materi"
                className="font-bold text-white hover:text-purple-300 text-xs sm:text-sm transition-colors"
              >
                Materi
              </Link>
              <Link
                href="/materi/ipas"
                className="text-purple-200/75 hover:text-white text-[11px] sm:text-sm transition-colors"
              >
                IPAS
              </Link>
              <Link
                href="/materi"
                className="text-purple-200/75 hover:text-white text-[11px] sm:text-sm transition-colors"
              >
                Matematika
              </Link>
              <Link
                href="/materi"
                className="text-purple-200/75 hover:text-white text-[11px] sm:text-sm transition-colors"
              >
                Bahasa Inggris
              </Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center sm:items-start space-y-2.5 sm:space-y-3.5">
              <Link
                href="/panduan"
                className="font-bold text-white hover:text-purple-300 text-xs sm:text-sm transition-colors"
              >
                Panduan Bermain
              </Link>
              <Link
                href="/panduan"
                className="text-purple-200/75 hover:text-white text-[11px] sm:text-sm transition-colors"
              >
                Petunjuk
              </Link>
              <Link
                href="/panduan"
                className="text-purple-200/75 hover:text-white text-[11px] sm:text-sm transition-colors"
              >
                Control Permainan
              </Link>
              <Link
                href="/panduan"
                className="text-purple-200/75 hover:text-white text-[11px] sm:text-sm transition-colors"
              >
                Guide Permainan
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Divider & Copyright */}
        <div className="border-t border-purple-900/40 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 text-xs text-purple-300/60 font-medium text-center">
          <p>© 2026 Nusa Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

