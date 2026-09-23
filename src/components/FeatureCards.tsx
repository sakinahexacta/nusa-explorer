import React from "react";
import { BookOpen, Gamepad2, Award, TrendingUp } from "lucide-react";

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    id: 1,
    title: "Materi Interaktif",
    description: "Belajar dengan animasi dan ilustrasi menarik",
    icon: <BookOpen className="w-10 h-10 text-white" strokeWidth={2.2} />,
  },
  {
    id: 2,
    title: "Mini Game",
    description: "Main sambil memahami materi dengan seru",
    icon: <Gamepad2 className="w-10 h-10 text-white" strokeWidth={2.2} />,
  },
  {
    id: 3,
    title: "Achievement",
    description: "Kumpulkan badge dan raih pencapaianmu",
    icon: <Award className="w-10 h-10 text-white" strokeWidth={2.2} />,
  },
  {
    id: 4,
    title: "Progress Belajar",
    description: "Pantau perkembangan belajarmu setiap saat",
    icon: <TrendingUp className="w-10 h-10 text-white" strokeWidth={2.2} />,
  },
];

export default function FeatureCards() {
  return (
    <div className="relative z-20 -mt-10 md:-mt-20 max-w-7xl mx-auto px-4 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="group relative bg-gradient-to-b from-[#6D28D9] via-[#4C1D95] to-[#2E1065] text-white rounded-3xl px-6 py-9 sm:py-10 md:py-12 min-h-[250px] md:min-h-[280px] flex flex-col items-center justify-center text-center shadow-[0_8px_0_#2E1065] border border-purple-400/20 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_0_#1E0B45]"
          >
            {/* Pure Floating Icon (No background box/circle) */}
            <div className="mb-5 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              {feature.icon}
            </div>

            {/* Feature Title */}
            <h3 className="text-base sm:text-lg font-bold tracking-wide text-white mb-2.5">
              {feature.title}
            </h3>

            {/* Feature Description */}
            <p className="text-purple-100/90 text-xs sm:text-[13px] leading-relaxed font-normal">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
