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
      className={`relative z-20 text-white pt-10 sm:pt-14 pb-8 sm:pb-10 ${
        transparent
          ? "bg-transparent border-t-0"
          : "bg-[#190C38] border-t border-purple-950/60"
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Top Section: Brand (Logo & Deskripsi) & Navigasi (Rata Kiri di Mobile & Desktop) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 pb-8 sm:pb-10 text-left">
          {/* 1. Logo Nusa Explorer & Deskripsi */}
          <div className="flex flex-col items-start max-w-sm text-left">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <NusaLogo size="lg" />
            </Link>
            <p className="mt-4 text-white/90 text-xs sm:text-[13px] leading-relaxed font-normal text-left">
              Dengan Nusa Explorer, belajar jadi lebih mudah, seru, dan menyenangkan!
            </p>
          </div>

          {/* 2, 3, 4. Navigasi: Rata Kiri di Mobile (1 Kolom) & Desktop (3 Kolom) */}
          <div className="w-full md:w-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14 text-left items-start">
            {/* 2. Kolom "Beranda" */}
            <div className="flex flex-col items-start space-y-2 sm:space-y-3 text-left">
              <Link
                href="/"
                className="text-sm sm:text-[14px] font-semibold text-white hover:text-purple-300 transition-colors text-left"
              >
                Beranda
              </Link>
              <Link
                href="/panduan"
                className="text-xs sm:text-[12px] text-gray-300 hover:text-white transition-colors font-normal text-left"
              >
                Permainan
              </Link>
            </div>

            {/* 3. Kolom "Materi" */}
            <div className="flex flex-col items-start space-y-2 sm:space-y-3 text-left">
              <Link
                href="/materi"
                className="text-sm sm:text-[14px] font-semibold text-white hover:text-purple-300 transition-colors text-left"
              >
                Materi
              </Link>
              <Link
                href="/materi/ipas"
                className="text-xs sm:text-[12px] text-gray-300 hover:text-white transition-colors font-normal text-left"
              >
                IPAS
              </Link>
              <Link
                href="/materi"
                className="text-xs sm:text-[12px] text-gray-300 hover:text-white transition-colors font-normal text-left"
              >
                Matematika
              </Link>
              <Link
                href="/materi"
                className="text-xs sm:text-[12px] text-gray-300 hover:text-white transition-colors font-normal text-left"
              >
                Bahasa Inggris
              </Link>
            </div>

            {/* 4. Kolom "Panduan Bermain" */}
            <div className="flex flex-col items-start space-y-2 sm:space-y-3 text-left">
              <Link
                href="/panduan"
                className="text-sm sm:text-[14px] font-semibold text-white hover:text-purple-300 transition-colors text-left"
              >
                Panduan Bermain
              </Link>
              <Link
                href="/panduan"
                className="text-xs sm:text-[12px] text-gray-300 hover:text-white transition-colors font-normal text-left"
              >
                Petunjuk
              </Link>
              <Link
                href="/panduan"
                className="text-xs sm:text-[12px] text-gray-300 hover:text-white transition-colors font-normal text-left"
              >
                Control Permainan
              </Link>
              <Link
                href="/panduan"
                className="text-xs sm:text-[12px] text-gray-300 hover:text-white transition-colors font-normal text-left"
              >
                Guide Permainan
              </Link>
            </div>
          </div>
        </div>

        {/* 5. Garis Pemisah (Divider Line) Horizontal Putih Tegas */}
        <div className="w-full h-[2px] bg-white my-3" />

        {/* 6. BOTTOM BAR: Copyright "© 2026 Nusa Explorer" (Rata Kiri di Mobile & Desktop) */}
        <div className="pt-3 flex items-center justify-start text-white text-left">
          <div className="flex items-center gap-2 text-xs sm:text-[13px] text-white/95 font-medium">
            <Copyright className="w-4 h-4 text-white flex-shrink-0" strokeWidth={2.2} />
            <span>2026 Nusa Explorer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
