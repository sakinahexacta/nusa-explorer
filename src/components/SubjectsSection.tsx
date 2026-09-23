import React from "react";

interface SubjectItem {
  id: string;
  title: string;
  description: string;
}

const subjects: SubjectItem[] = [
  {
    id: "ipas",
    title: "IPAS",
    description:
      "Mata pelajaran gabungan antara Ilmu Pengetahuan Alam dan Ilmu Pengetahuan Sosial",
  },
  {
    id: "matematika",
    title: "MATEMATIKA",
    description:
      "Ilmu tentang bilangan, hubungan antar-bilangan, dan prosedur operasional",
  },
  {
    id: "bahasa-inggris",
    title: "BAHASA INGGRIS",
    description:
      "Mata pelajaran Bahasa Inggris yang mudah dan menyenangkan",
  },
];

export default function SubjectsSection() {
  return (
    <section id="materi" className="relative z-20 pb-16 md:pb-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title with decorative horizontal divider lines */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <div className="h-[2px] bg-purple-900/20 flex-1 max-w-xs" />
          <h2 className="text-slate-900 font-extrabold text-lg sm:text-xl md:text-2xl tracking-tight text-center">
            Apa yang dipelajari?
          </h2>
          <div className="h-[2px] bg-purple-900/20 flex-1 max-w-xs" />
        </div>

        {/* 3 Columns in One Rounded Purple Container */}
        <div className="bg-[#380E6E] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-purple-400/20">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-purple-500/30">
            {subjects.map((subject, index) => (
              <div
                key={subject.id}
                className={`flex flex-col items-center text-center px-4 sm:px-6 py-6 md:py-4 ${
                  index !== 0 ? "pt-8 md:pt-4" : ""
                }`}
              >
                {/* Subject Title */}
                <h3 className="text-xl sm:text-2xl font-black tracking-wider text-white mb-3">
                  {subject.title}
                </h3>

                {/* Subject Description */}
                <p className="text-purple-200/85 text-xs sm:text-[13px] leading-relaxed mb-8 flex-1 min-h-[48px] max-w-xs">
                  {subject.description}
                </p>

                {/* Light Blue Pill Button */}
                <button className="bg-[#93C5FD] hover:bg-[#BFDBFE] text-[#1E3A8A] font-extrabold text-xs sm:text-sm px-7 py-2.5 rounded-full shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                  Mulai Belajar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
