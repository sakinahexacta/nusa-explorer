import React from "react";
import Image from "next/image";

export default function HighlightBox() {
  return (
    <section className="relative z-20 pb-16 md:pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Pixel Student Character Sprite (Authentic PNG with Transparent Background) */}
          <div className="relative z-10 w-36 sm:w-44 md:w-52 h-60 sm:h-68 md:h-80 flex-shrink-0 select-none">
            <Image
              src="/images/student-char.png"
              alt="Siswa SD Nusa Explorer"
              fill
              sizes="(max-width: 768px) 176px, 208px"
              className="object-contain pixel-art-crisp drop-shadow-md"
              priority
            />
          </div>

          {/* White Card Box with Outline */}
          <div className="w-full flex-1 bg-white border-2 border-purple-900/30 rounded-3xl p-7 sm:p-9 md:p-10 shadow-sm relative z-0">
            <h3 className="text-xl sm:text-2xl md:text-[26px] font-black tracking-tight text-slate-900 mb-3 leading-snug">
              Belajar Tidak Lagi{" "}
              <span className="text-[#312E81] font-black">Membosankan</span>
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              Nusa Explorer menghadirkan pengalaman belajar yang interaktif dan
              menyenangkan. Pahami materi, mainkan game edukatif, dan uji
              kemampuan melalui kuis menarik!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
