"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section className="relative z-20 py-24 md:py-28 overflow-hidden">
      {/* Background Pixel Map with Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-map.jpg"
          alt="Nusa Explorer Pixel Adventure"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center pixel-art-crisp brightness-[0.50] contrast-[1.05]"
          style={{
            imageRendering: "pixelated",
          }}
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Banner Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Pixel Headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.88, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, type: "spring", stiffness: 180, damping: 16 }}
          className="font-pixel text-2xl sm:text-3xl md:text-4xl text-white tracking-widest font-black pixel-text-shadow leading-snug mb-4 select-none"
        >
          SIAP MEMULAI PETUALANGAN?
        </motion.h2>

        {/* Clean Subtitle text without box */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.1, type: "spring", stiffness: 180, damping: 16 }}
          className="text-white text-sm sm:text-base md:text-lg font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mb-8"
        >
          Belajar menyenangkan dengan bermain!
        </motion.p>

        {/* Large Solid Blue CTA Button - Statis diam di tempat, hanya animasi masuk dan hover/tap standar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.2, type: "spring", stiffness: 180, damping: 16 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/panduan"
            className="flex items-center gap-3 bg-[#073294] hover:bg-[#052674] text-white font-black text-base sm:text-lg md:text-xl px-9 py-4 rounded-xl border border-black/40 shadow-[0_6px_0_rgba(0,0,0,1)] transition-colors cursor-pointer select-none inline-flex"
          >
            <Play className="w-5 h-5 fill-white text-white" />
            <span>Main Sekarang!</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
