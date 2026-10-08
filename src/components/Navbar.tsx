"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import NusaLogo from "./NusaLogo";

interface NavbarProps {
  forceSolid?: boolean;
}

export default function Navbar({ forceSolid = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  const isPanduan = pathname === "/panduan";
  const isMateri = pathname === "/materi" || pathname?.startsWith("/materi/");
  const isHome = pathname === "/";
  const isDetailMateri = pathname?.startsWith("/materi/") && pathname !== "/materi";
  const isSolid = forceSolid || isDetailMateri || isScrolled || isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 py-3.5 sm:py-4 ${
        isSolid
          ? "bg-[#1e1045] shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center transition-transform hover:scale-105">
          <NusaLogo size="lg" className="sm:hidden" />
          <NusaLogo size="xl" className="hidden sm:flex" />
        </Link>

        {/* Right: Desktop Nav items */}
        <nav className="hidden md:flex items-center gap-7 md:gap-9">
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

        {/* Right: Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg transition-colors focus:outline-none text-white hover:bg-white/10"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <Menu className="w-7 h-7" strokeWidth={2.5} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1e1045]/98 border-t border-purple-800/40 px-4 sm:px-6 py-4 sm:py-5 shadow-2xl">
          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`w-full block text-left text-base tracking-wide transition-all px-4 py-3 rounded-xl ${
                isHome
                  ? "bg-white/15 border border-white/20 text-purple-200 font-black shadow-sm backdrop-blur-sm"
                  : "text-white/90 hover:text-white hover:bg-white/5 font-bold"
              }`}
            >
              Beranda
            </Link>
            <Link
              href="/materi"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`w-full block text-left text-base tracking-wide transition-all px-4 py-3 rounded-xl ${
                isMateri
                  ? "bg-white/15 border border-white/20 text-purple-200 font-black shadow-sm backdrop-blur-sm"
                  : "text-white/90 hover:text-white hover:bg-white/5 font-bold"
              }`}
            >
              Materi
            </Link>
            <Link
              href="/panduan"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`w-full block text-left text-base tracking-wide transition-all px-4 py-3 rounded-xl ${
                isPanduan
                  ? "bg-white/15 border border-white/20 text-purple-200 font-black shadow-sm backdrop-blur-sm"
                  : "text-white/90 hover:text-white hover:bg-white/5 font-bold"
              }`}
            >
              Panduan Bermain
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

