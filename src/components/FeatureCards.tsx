"use client";

import React from "react";
import { BookOpen, Gamepad2, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

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
    icon: <BookOpen className="w-7 h-7 sm:w-10 sm:h-10 text-white" strokeWidth={2.2} />,
  },
  {
    id: 2,
    title: "Mini Game",
    description: "Main sambil memahami materi dengan seru",
    icon: <Gamepad2 className="w-7 h-7 sm:w-10 sm:h-10 text-white" strokeWidth={2.2} />,
  },
  {
    id: 3,
    title: "Achievement",
    description: "Kumpulkan badge dan raih pencapaianmu",
    icon: <Award className="w-7 h-7 sm:w-10 sm:h-10 text-white" strokeWidth={2.2} />,
  },
  {
    id: 4,
    title: "Progress Belajar",
    description: "Pantau perkembangan belajarmu setiap saat",
    icon: <TrendingUp className="w-7 h-7 sm:w-10 sm:h-10 text-white" strokeWidth={2.2} />,
  },
];

export default function FeatureCards() {
  return (
    <div className="relative z-20 -mt-8 sm:-mt-12 md:-mt-20 max-w-7xl mx-auto px-4 pb-12 sm:pb-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-7">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              delay: idx * 0.08,
              duration: 0.42,
              type: "spring",
              stiffness: 180,
              damping: 15,
            }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative bg-gradient-to-b from-[#6D28D9] via-[#4C1D95] to-[#2E1065] text-white rounded-2xl sm:rounded-3xl p-3.5 sm:px-6 py-5 sm:py-8 md:py-10 min-h-[170px] sm:min-h-[220px] md:min-h-[260px] flex flex-col items-center justify-center text-center shadow-[0_6px_0_#2E1065] sm:shadow-[0_8px_0_#2E1065] border border-purple-400/20 transition-colors duration-200 cursor-default select-none"
          >
            {/* Pure Floating Icon */}
            <div className="mb-2 sm:mb-4 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              {feature.icon}
            </div>

            {/* Feature Title */}
            <h3 className="text-xs sm:text-base md:text-lg font-bold tracking-wide text-white mb-1.5 sm:mb-2 text-center">
              {feature.title}
            </h3>

            {/* Feature Description */}
            <p className="text-purple-100/90 text-[10px] sm:text-xs md:text-[13px] leading-tight sm:leading-relaxed font-normal text-center">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

