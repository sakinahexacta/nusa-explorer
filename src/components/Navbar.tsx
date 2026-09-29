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
  const isSolid = forceSolid || isScrolled || isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid
          ? "bg-[#1e1045] shadow-md py-3"
          : "bg-transparent py-4 md:py-5"
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
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <Menu className="w-7 h-7 text-white" strokeWidth={2.5} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1e1045]/98 border-t border-purple-800/40 px-6 py-5 shadow-2xl">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-bold text-base tracking-wide transition-colors py-1 ${
                isHome ? "text-purple-300 font-black" : "text-white/90 hover:text-white"
              }`}
            >
              Beranda
            </Link>
            <Link
              href="/materi"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-bold text-base tracking-wide transition-colors py-1 ${
                isMateri ? "text-purple-300 font-black" : "text-white/90 hover:text-white"
              }`}
            >
              Materi
            </Link>
            <Link
              href="/panduan"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-bold text-base tracking-wide transition-colors py-1 ${
                isPanduan ? "text-purple-300 font-black" : "text-white/90 hover:text-white"
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

