"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  // Support smooth scroll to #hero-game or #play-game when arriving with hash
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash;
        if (hash === "#hero-game" || hash === "#play-game" || hash === "#beranda") {
          const el = document.getElementById("hero-game");
          if (el) {
            setTimeout(() => {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
          }
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <section
      id="hero-game"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center pt-20 sm:pt-24 pb-24 sm:pb-32 md:pb-36 overflow-hidden scroll-mt-20"
    >
      {/* Target anchor aliases */}
      <span id="beranda" className="sr-only" />
      <span id="play-game" className="sr-only" />

      {/* Background Pixel Art Map */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-map.jpg"
          alt="Nusa Explorer World Map"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center pixel-art-crisp brightness-[0.50] contrast-[1.05]"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content (relative z-20, clickable and floating cleanly above wave) */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 flex flex-col items-center text-center my-auto">
        {/* Pixel Title: NUSA EXPLORER (Pop/Bounce scale from 0.8 to 1) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 16,
            delay: 0.08,
          }}
          className="flex flex-col items-center justify-center select-none"
        >
          <h1 className="font-pixel text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-widest font-black pixel-text-shadow leading-tight">
            NUSA
          </h1>
          <h1 className="font-pixel text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-widest font-black pixel-text-shadow leading-tight -mt-1 md:-mt-2">
            EXPLORER
          </h1>
        </motion.div>

        {/* Clean Subtitle text: Staggered fade-in & slide-up from bottom */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.22,
            type: "spring",
            stiffness: 180,
            damping: 18,
          }}
          className="mt-3 sm:mt-4 md:mt-5 text-white text-xs sm:text-base md:text-xl font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
        >
          Belajar menyenangkan dengan bermain!
        </motion.p>

        {/* Action CTA Buttons: Tombol statis (diam di tempat) dengan animasi masuk (entrance) dan efek hover standar */}
        <motion.div
          id="game-cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            type: "spring",
            stiffness: 180,
            damping: 18,
          }}
          className="mt-6 sm:mt-8 flex flex-row items-center justify-center gap-3 sm:gap-5"
        >
          {/* Primary Blue Button - Statis diam di tempat, hanya hover & tap */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <Link
              href="/panduan"
              className="flex items-center gap-2 bg-[#073294] hover:bg-[#052674] text-white font-black text-xs sm:text-base px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl border border-black/40 shadow-[0_4px_0_rgba(0,0,0,1)] sm:shadow-[0_6px_0_rgba(0,0,0,1)] transition-colors cursor-pointer whitespace-nowrap touch-manipulation block"
            >
              <Play className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-white text-white" />
              <span>Mulai Game</span>
            </Link>
          </motion.div>

          {/* Secondary White Button - Statis diam di tempat, hanya hover & tap */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <Link
              href="/panduan"
              className="flex items-center gap-2 bg-white hover:bg-slate-50 text-[#073294] font-black text-xs sm:text-base px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl border border-black/40 shadow-[0_4px_0_rgba(0,0,0,1)] sm:shadow-[0_6px_0_rgba(0,0,0,1)] transition-colors cursor-pointer whitespace-nowrap touch-manipulation block"
            >
              <ClipboardList className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#073294]" strokeWidth={2.5} />
              <span>Pelajari Game</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave Divider with sharp vector SVG and exact offset positioning */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-10 pointer-events-none overflow-hidden translate-y-[35%] md:translate-y-[45%] leading-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/Vector 6.svg" 
          alt="Wave Divider" 
          className="w-full h-auto object-cover pointer-events-none block" 
        />
      </div>
    </section>
  );
}