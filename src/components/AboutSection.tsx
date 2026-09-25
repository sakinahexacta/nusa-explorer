import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative z-20 py-10 sm:py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Title: NUSA EXPLORER */}
        <h2 className="font-pixel text-lg sm:text-2xl md:text-3xl text-[#280952] font-black tracking-wider mb-4 sm:mb-6 leading-tight select-none">
          NUSA EXPLORER
        </h2>

        {/* Description Text */}
        <p className="text-slate-800 text-xs sm:text-sm md:text-base leading-relaxed text-center font-medium max-w-2xl sm:max-w-3xl mb-7 sm:mb-10">
          Nusa Explorer adalah platform pembelajaran interaktif yang
          menggabungkan materi edukatif, mini game, dan tantangan seru dalam satu
          petualangan. Jelajahi setiap wilayah, pelajari materi, kumpulkan poin,
          dan raih berbagai pencapaian untuk membuat proses belajar menjadi
          lebih menyenangkan.
        </p>

        {/* Map Preview Frame */}
        <div className="w-full max-w-2xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-purple-950/15 bg-slate-900 group">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src="/images/map 3.png"
              alt="Map Preview Nusa Explorer"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover pixel-art-crisp transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

