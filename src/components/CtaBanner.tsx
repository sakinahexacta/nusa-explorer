import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative z-20 py-24 md:py-28 overflow-hidden">
      {/* Background Pixel Map with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-map.jpg"
          alt="Nusa Explorer Pixel Adventure"
          fill
          sizes="100vw"
          className="object-cover object-center pixel-art-crisp brightness-[0.50] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Banner Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Pixel Headline */}
        <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-white tracking-widest font-black pixel-text-shadow leading-snug mb-4 select-none">
          SIAP MEMULAI PETUALANGAN?
        </h2>

        {/* Clean Subtitle text without box */}
        <p className="text-white text-sm sm:text-base md:text-lg font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mb-8">
          Belajar menyenangkan dengan bermain!
        </p>

        {/* Large Solid Blue CTA Button */}
        <button className="flex items-center gap-3 bg-[#073294] hover:bg-[#052674] text-white font-black text-base sm:text-lg md:text-xl px-9 py-4 rounded-xl border border-black/40 shadow-[0_6px_0_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[0_4px_0_rgba(0,0,0,1)] active:translate-y-[6px] active:shadow-none transition-all cursor-pointer">
          <Play className="w-5 h-5 fill-white text-white" />
          <span>Main Sekarang!</span>
        </button>
      </div>
    </section>
  );
}
