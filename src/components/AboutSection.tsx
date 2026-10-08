"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="petunjuk" className="relative z-20 py-10 sm:py-16 md:py-20 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* SISI KIRI: Judul "NUSA EXPLORER" dan Teks Deskripsi di bawahnya */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, type: "spring", stiffness: 160, damping: 16 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            {/* Title: NUSA EXPLORER */}
            <h2 className="font-pixel text-lg sm:text-2xl md:text-3xl lg:text-4xl text-[#280952] font-black tracking-wider mb-4 sm:mb-6 leading-tight select-none">
              NUSA EXPLORER
            </h2>

            {/* Description Text */}
            <p className="text-slate-800 text-xs sm:text-sm md:text-base leading-relaxed font-medium max-w-xl">
              Nusa Explorer adalah platform pembelajaran interaktif yang
              menggabungkan materi edukatif, mini game, dan tantangan seru dalam satu
              petualangan. Jelajahi setiap wilayah, pelajari materi, kumpulkan poin,
              dan raih berbagai pencapaian untuk membuat proses belajar menjadi
              lebih menyenangkan.
            </p>
          </motion.div>

          {/* SISI KANAN: Gambar Peta Lengkap Nusa Explorer (Utuh & Proporsional) */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.12, type: "spring", stiffness: 160, damping: 16 }}
            className="w-full flex justify-center md:justify-end"
          >
            <div className="w-full max-w-md sm:max-w-lg md:max-w-none rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-purple-950/15 bg-slate-900 group">
              <div className="relative w-full">
                <Image
                  src="/images/hero-map.jpg"
                  alt="Peta Lengkap Nusa Explorer"
                  width={1024}
                  height={560}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-contain block pixel-art-crisp transition-transform duration-500 group-hover:scale-105 select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
