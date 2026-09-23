import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative z-20 py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col">
            <h2 className="font-pixel text-2xl sm:text-3xl text-[#280952] font-black tracking-wider mb-6 leading-tight">
              NUSA EXPLORER
            </h2>
            <p className="text-slate-800 text-sm sm:text-base leading-relaxed text-justify font-medium">
              Nusa Explorer adalah platform pembelajaran interaktif yang
              menggabungkan materi edukatif, mini game, dan tantangan seru dalam satu
              petualangan. Jelajahi setiap wilayah, pelajari materi, kumpulkan poin,
              dan raih berbagai pencapaian untuk membuat proses belajar menjadi
              lebih menyenangkan.
            </p>
          </div>

          {/* Right: Map Preview Frame */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-950/10 bg-slate-900 group">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/map-preview.jpg"
                alt="Map Preview Nusa Explorer"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover pixel-art-crisp transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
