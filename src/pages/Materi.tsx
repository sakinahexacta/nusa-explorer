"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface SubjectCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

const subjectsData: Record<string, SubjectCard[]> = {
  "4": [
    {
      id: "ipas-4",
      title: "IPAS",
      description:
        "Disini kamu akan mempelajari tentang tumbuhan, wujud dan perubahan zat, gaya, energi, daerah, budaya, kebutuhan, hingga membangun masyarakat.",
      image: "/images/bg ipa.png",
    },
    {
      id: "matematika-4",
      title: "MATEMATIKA",
      description:
        "Disini kamu akan mempelajari tentang bilangan cacah, pecahan, pola gambar dan bilangan, luas dan volume, bangun datar, hingga diagram batang.",
      image: "/images/bg mtk.png",
    },
    {
      id: "inggris-4",
      title: "B.INGGRIS",
      description:
        "Disini kamu akan mempelajari tentang aktivitas dan angka besar, mengenal rumah dan letak benda, menyatakan kemampuan, membaca waktu, rutinitas harian, hingga kendaraan dan perjalanan.",
      image: "/images/bg ing.png",
    },
  ],
  "5": [
    {
      id: "ipas-5",
      title: "IPAS",
      description:
        "Disini kamu akan mempelajari tentang sistem organ tubuh, ekosistem dan keanekaragaman hayati, gelombang cahaya dan bunyi, serta kenampakan alam Indonesia.",
      image: "/images/bg ipa.png",
    },
    {
      id: "matematika-5",
      title: "MATEMATIKA",
      description:
        "Disini kamu akan mempelajari tentang pecahan campuran, desimal dan persen, operasi hitung bilangan bulat, volume kubus dan balok, serta pengolahan data statistik.",
      image: "/images/bg mtk.png",
    },
    {
      id: "inggris-5",
      title: "B.INGGRIS",
      description:
        "Disini kamu akan mempelajari tentang hobbies, food and drinks, describing places and directions, school subjects, daily schedules, dan future plans.",
      image: "/images/bg ing.png",
    },
  ],
  "6": [
    {
      id: "ipas-6",
      title: "IPAS",
      description:
        "Disini kamu akan mempelajari tentang sistem tata surya, rotasi dan revolusi bumi, perubahan energi listrik, benua di dunia, serta globalisasi dan pelestarian lingkungan.",
      image: "/images/bg ipa.png",
    },
    {
      id: "matematika-6",
      title: "MATEMATIKA",
      description:
        "Disini kamu akan mempelajari tentang bilangan bulat negatif, lingkaran, luas permukaan dan volume bangun ruang prisma/tabung/kerucut, serta perbandingan dan skala.",
      image: "/images/bg mtk.png",
    },
    {
      id: "inggris-6",
      title: "B.INGGRIS",
      description:
        "Disini kamu akan mempelajari tentang holiday experiences, historical events, giving opinions and suggestions, environment conservation, dan stories and legends.",
      image: "/images/bg ing.png",
    },
  ],
};

export default function MateriPage() {
  const currentSubjects = subjectsData["4"];

  return (
    <div className="w-full min-h-screen bg-white relative p-0 m-0 text-slate-900 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      {/* 1. Hero Section dengan Background Vector ungu.png */}
      <div className="relative w-full overflow-visible">
        {/* Rendering Wave Image utuh tanpa dicrop, mentok kiri-kanan */}
        <div className="w-full relative z-0 -mt-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Vector ungu.png"
            alt="Wave Vector"
            className="w-full h-auto min-h-[640px] sm:min-h-[560px] lg:min-h-0 block max-w-none pointer-events-none select-none object-cover lg:object-fill"
          />
        </div>

        {/* Konten Hero: Title & Subtitle melayang di atas Wave */}
        <div className="absolute inset-0 z-10 flex flex-col items-center pt-24 sm:pt-28 md:pt-36 px-4 sm:px-6 pointer-events-auto">
          <div className="max-w-4xl w-full mx-auto flex flex-col items-center">
            {/* Title: MATERI (Kapital, text-white, ukuran text-2xl sm:text-3xl md:text-4xl, posisi atas sejajar Panduan Bermain) */}
            <h1 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-white font-black tracking-widest text-center pixel-text-shadow leading-tight select-none mt-6 pt-8 mb-4 sm:mb-6">
              MATERI
            </h1>

            {/* Sub-teks (Ditata lebih renggang dan turun dengan mt-6 sm:mt-8) */}
            <p className="text-white font-bold text-xs sm:text-sm md:text-base text-center max-w-md mx-auto leading-relaxed mt-6 sm:mt-8 mb-6 select-none">
              Ayo mulai belajar IPAS, Matematika, dan Bahasa
              <br className="hidden sm:inline" /> Inggris bersama!
            </p>
          </div>
        </div>
      </div>

      {/* 2. Karakter SD Berhijab & Speech Bubble "Hai Explorer!..." (Dinaikkan manis sedikit menembus wave ke background ungu) */}
      <div className="relative z-20 max-w-5xl mx-auto w-full px-4 sm:px-6 -mt-56 sm:-mt-60 md:-mt-68 lg:-mt-76 -translate-y-20 sm:-translate-y-[80px] md:-translate-y-[90px] mb-2 sm:mb-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10">
          {/* Karakter SD Cewek Berhijab */}
          <div className="relative flex-shrink-0 select-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/karakter cewe.png"
              alt="Karakter Siswi SD Berhijab"
              className="w-32 sm:w-40 md:w-48 h-auto object-contain drop-shadow-2xl pixel-art-crisp"
            />
          </div>

          {/* Speech Bubble Putih */}
          <div className="relative bg-white rounded-3xl p-6 sm:p-7 md:p-8 shadow-2xl border-2 border-purple-900/20 max-w-lg w-full text-left">
            {/* Ekor Balon Bicara ke Kiri Menghadap Karakter */}
            <div className="hidden sm:block absolute top-1/2 -left-3.5 -translate-y-1/2 w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-r-[16px] border-r-white drop-shadow-sm" />

            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-2 tracking-tight">
              Hai Explorer!
            </h2>
            <p className="text-[#3B1578] font-bold text-xs sm:text-sm md:text-[15px] leading-relaxed">
              Pilih mata pelajaran untuk mulai belajar dan jelajahi materi seru di Nusa Explorer!
            </p>
          </div>
        </div>
      </div>

      {/* 3. Section Materi: Cards (Transparan, menyatu mulus tanpa memotong wave) */}
      <section className="relative z-20 w-full bg-transparent text-slate-900 mt-2 sm:mt-4 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Cards Materi Grid (3 Kolom: IPAS, MATEMATIKA, B.INGGRIS) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-6 lg:gap-8">
            {currentSubjects.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#38116E] rounded-3xl p-5 sm:p-6 shadow-xl border-2 border-purple-400/20 flex flex-col justify-between text-center transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-[0_10px_25px_rgba(147,51,234,0.4)]"
              >
                {/* Thumbnail Gambar Materi */}
                <div className="w-full rounded-2xl overflow-hidden shadow-md border-2 border-white/20 mb-5 bg-purple-950/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-44 sm:h-48 md:h-52 object-cover transition-transform duration-300 group-hover:scale-105 select-none"
                  />
                </div>

                {/* Judul Materi */}
                <h3 className="font-pixel text-lg sm:text-xl font-bold text-white tracking-wider text-center mb-3">
                  {item.title}
                </h3>

                {/* Deskripsi Materi */}
                <p className="text-white/90 text-xs sm:text-[13px] leading-relaxed text-center px-1 mb-7 flex-1 min-h-[64px]">
                  {item.description}
                </p>

                {/* Tombol Mulai Belajar dengan Font Poppins Bersih */}
                {item.title === "IPAS" ? (
                  <a
                    href="/materi/ipas"
                    className="w-full block bg-[#7EB6FF] hover:bg-[#68A5F8] text-[#072464] font-bold font-poppins text-sm sm:text-base py-3 px-6 rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-95 text-center cursor-pointer select-none"
                  >
                    Mulai Belajar
                  </a>
                ) : (
                  <button className="w-full bg-[#7EB6FF] hover:bg-[#68A5F8] text-[#072464] font-bold font-poppins text-sm sm:text-base py-3 px-6 rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-95 text-center cursor-pointer select-none">
                    Mulai Belajar
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footer (bg-[#190C38], persis seperti pada Home Page) */}
      <Footer />
    </div>
  );
}
