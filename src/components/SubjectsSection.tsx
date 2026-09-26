import React from "react";
import Link from "next/link";

interface SubjectItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

const subjects: SubjectItem[] = [
  {
    id: "ipas",
    title: "IPAS",
    description:
      "Mata pelajaran gabungan antara Ilmu Pengetahuan Alam dan Ilmu Pengetahuan Sosial",
    href: "/materi/ipas",
  },
  {
    id: "matematika",
    title: "MATEMATIKA",
    description:
      "Ilmu tentang bilangan, hubungan antar-bilangan, dan prosedur operasional",
    href: "/materi",
  },
  {
    id: "bahasa-inggris",
    title: "BAHASA INGGRIS",
    description:
      "Mata pelajaran Bahasa Inggris yang mudah dan menyenangkan",
    href: "/materi",
  },
];

export default function SubjectsSection() {
  return (
    <section id="materi" className="relative z-20 pb-16 md:pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Title with decorative horizontal divider lines */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="h-[2px] bg-purple-900/20 flex-1 max-w-[80px] sm:max-w-xs" />
          <h2 className="text-slate-900 font-extrabold text-sm sm:text-lg md:text-xl tracking-tight text-center whitespace-nowrap">
            Apa yang dipelajari?
          </h2>
          <div className="h-[2px] bg-purple-900/20 flex-1 max-w-[80px] sm:max-w-xs" />
        </div>

        {/* Vibrant Purple Gradient Container Card (Persis sama dengan 4 card hero section) */}
        <div className="bg-gradient-to-b from-[#6D28D9] via-[#4C1D95] to-[#2E1065] rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl border border-purple-400/30">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-purple-300/30">
            {subjects.map((subject, index) => (
              <div
                key={subject.id}
                className={`flex flex-col items-center text-center px-3 sm:px-6 py-6 md:py-4 ${
                  index !== 0 ? "pt-7 md:pt-4" : ""
                }`}
              >
                {/* Subject Title (Putih) */}
                <h3 className="text-base sm:text-xl md:text-2xl font-black tracking-wider text-white mb-2 sm:mb-3">
                  {subject.title}
                </h3>

                {/* Subject Description (Putih) */}
                <p className="text-white/90 text-xs sm:text-[13px] leading-relaxed mb-6 sm:mb-8 flex-1 min-h-[40px] max-w-xs">
                  {subject.description}
                </p>

                {/* Light Blue Pill Button with Dark Purple Text, Font Normal */}
                <Link
                  href={subject.href}
                  className="w-full max-w-[260px] sm:max-w-xs block bg-[#7EB6FF] hover:bg-[#68A5F8] text-[#190C38] font-normal font-poppins text-xs sm:text-sm py-2.5 sm:py-3 px-6 rounded-full shadow-md transition-all duration-200 hover:scale-105 active:scale-95 text-center cursor-pointer select-none touch-manipulation"
                >
                  Mulai Belajar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
