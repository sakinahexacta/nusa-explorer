import React from "react";
import NusaLogo from "./NusaLogo";

interface FooterProps {
  className?: string;
  transparent?: boolean;
}

export default function Footer({ className = "", transparent = false }: FooterProps) {
  return (
    <footer
      className={`relative z-20 text-white pt-16 pb-10 ${
        transparent
          ? "bg-transparent border-t-0"
          : "bg-[#190C38] border-t border-purple-950/60"
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Content Row */}
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-12">
          {/* Left Column: Brand & Tagline */}
          <div className="flex flex-col max-w-sm">
            <NusaLogo size="lg" />
            <p className="mt-5 text-purple-200/80 text-sm leading-relaxed font-normal">
              Dengan Nusa Explorer, belajar jadi lebih mudah, seru, dan menyenangkan!
            </p>
          </div>

          {/* Right Columns: Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
            {/* Column 1 */}
            <div className="flex flex-col space-y-3.5">
              <a
                href="#beranda"
                className="font-bold text-white hover:text-purple-300 text-sm transition-colors"
              >
                Beranda
              </a>
              <a
                href="#permainan"
                className="text-purple-200/75 hover:text-white text-xs sm:text-sm transition-colors"
              >
                Permainan
              </a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-3.5">
              <a
                href="#materi"
                className="font-bold text-white hover:text-purple-300 text-sm transition-colors"
              >
                Materi
              </a>
              <a
                href="#ipas"
                className="text-purple-200/75 hover:text-white text-xs sm:text-sm transition-colors"
              >
                IPAS
              </a>
              <a
                href="#matematika"
                className="text-purple-200/75 hover:text-white text-xs sm:text-sm transition-colors"
              >
                Matematika
              </a>
              <a
                href="#bahasa-inggris"
                className="text-purple-200/75 hover:text-white text-xs sm:text-sm transition-colors"
              >
                Bahasa Inggris
              </a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col space-y-3.5">
              <a
                href="#panduan"
                className="font-bold text-white hover:text-purple-300 text-sm transition-colors"
              >
                Panduan Bermain
              </a>
              <a
                href="#petunjuk"
                className="text-purple-200/75 hover:text-white text-xs sm:text-sm transition-colors"
              >
                Petunjuk
              </a>
              <a
                href="#control"
                className="text-purple-200/75 hover:text-white text-xs sm:text-sm transition-colors"
              >
                Control Permainan
              </a>
              <a
                href="#guide"
                className="text-purple-200/75 hover:text-white text-xs sm:text-sm transition-colors"
              >
                Guide Permainan
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Divider & Copyright */}
        <div className="border-t border-purple-900/40 pt-8 flex items-center justify-between text-xs text-purple-300/60 font-medium">
          <p>© 2026 Nusa Explorer</p>
        </div>
      </div>
    </footer>
  );
}
