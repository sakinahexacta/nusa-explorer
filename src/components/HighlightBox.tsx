"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HighlightBox() {
  return (
    <section className="relative z-20 pb-12 sm:pb-16 md:pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative flex flex-row items-center justify-center gap-2.5 sm:gap-5 md:gap-8">
          {/* Pixel Student Character Sprite (Standing on the left with playful bounce) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, type: "spring", stiffness: 180, damping: 15 }}
            whileHover={{ scale: 1.05 }}
            className="relative z-10 w-20 sm:w-32 md:w-44 h-32 sm:h-48 md:h-64 flex-shrink-0 select-none cursor-default"
          >
            <Image
              src="/images/student-char.png"
              alt="Siswa SD Nusa Explorer"
              fill
              sizes="(max-width: 768px) 128px, 176px"
              className="object-contain pixel-art-crisp drop-shadow-md"
              priority
            />
          </motion.div>

          {/* White Card Box with Outline */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.1, type: "spring", stiffness: 160, damping: 16 }}
            className="w-full flex-1 bg-white border-2 border-purple-900/40 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 md:p-8 shadow-sm relative z-0"
          >
            <h3 className="text-xs sm:text-lg md:text-2xl font-black tracking-tight text-slate-900 mb-1 sm:mb-2 leading-snug">
              Belajar Tidak Lagi{" "}
              <span className="text-[#312E81] font-black">Membosankan</span>
            </h3>
            <p className="text-slate-700 text-[10px] sm:text-xs md:text-sm leading-snug sm:leading-relaxed font-medium">
              Nusa Explorer menghadirkan pengalaman belajar yang interaktif dan
              menyenangkan. Pahami materi, mainkan game edukatif, dan uji
              kemampuan melalui kuis menarik!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

