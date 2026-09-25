import React from "react";
import Image from "next/image";

export default function HighlightBox() {
  return (
    <section className="relative z-20 pb-12 sm:pb-16 md:pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative flex flex-row items-center justify-center gap-2.5 sm:gap-5 md:gap-8">
          {/* Pixel Student Character Sprite (Standing on the left) */}
          <div className="relative z-10 w-20 sm:w-32 md:w-44 h-32 sm:h-48 md:h-64 flex-shrink-0 select-none">
            <Image
              src="/images/student-char.png"
              alt="Siswa SD Nusa Explorer"
              fill
              sizes="(max-width: 768px) 128px, 176px"
              className="object-contain pixel-art-crisp drop-shadow-md"
              priority
            />
          </div>

          {/* White Card Box with Outline */}
          <div className="w-full flex-1 bg-white border-2 border-purple-900/40 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 md:p-8 shadow-sm relative z-0">
            <h3 className="text-xs sm:text-lg md:text-2xl font-black tracking-tight text-slate-900 mb-1 sm:mb-2 leading-snug">
              Belajar Tidak Lagi{" "}
              <span className="text-[#312E81] font-black">Membosankan</span>
            </h3>
            <p className="text-slate-700 text-[10px] sm:text-xs md:text-sm leading-snug sm:leading-relaxed font-medium">
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

