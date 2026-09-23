"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NusaLogo from "./NusaLogo";

interface NavbarProps {
  forceSolid?: boolean;
}

export default function Navbar({ forceSolid = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isPanduan = pathname === "/panduan";
  const isMateri = pathname === "/materi" || pathname?.startsWith("/materi/");
  const isHome = pathname === "/";
  const isSolid = forceSolid || isScrolled || pathname?.startsWith("/materi/ipas");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid
          ? "bg-[#190C38] shadow-xl py-3"
          : "bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Left: Brand Logo (Enlarged to h-12 md:h-14) */}
        <Link href="/" className="flex items-center transition-transform hover:scale-105">
          <NusaLogo size="xl" />
        </Link>

        {/* Right: Nav items */}
        <nav className="flex items-center gap-7 md:gap-9">
          <Link
            href="/"
            className={`font-bold text-sm md:text-base tracking-wide transition-colors ${
              isHome
                ? "text-purple-300 font-black drop-shadow-sm"
                : "text-white/90 hover:text-white"
            }`}
          >
            Beranda
          </Link>
          <Link
            href="/materi"
            className={`font-bold text-sm md:text-base tracking-wide transition-colors ${
              isMateri
                ? "text-purple-300 font-black drop-shadow-sm"
                : "text-white/90 hover:text-white"
            }`}
          >
            Materi
          </Link>
          <Link
            href="/panduan"
            className={`font-bold text-sm md:text-base tracking-wide transition-colors ${
              isPanduan
                ? "text-purple-300 font-black drop-shadow-sm"
                : "text-white/90 hover:text-white"
            }`}
          >
            Panduan Bermain
          </Link>
        </nav>
      </div>
    </header>
  );
}
