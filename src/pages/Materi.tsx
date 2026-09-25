"use client";

import React from "react";
import Link from "next/link";
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
};

export default function MateriPage() {
  const currentSubjects = subjectsData["4"];

  return (
    <div className="w-full min-h-screen bg-white relative p-0 m-0 text-slate-900 flex flex-col selection:bg-purple-600 selection:text-white overflow-x-hidden">
      {/* Global Navbar */}
      <Navbar />

      {/* 1. Hero Section dengan Background Wave Vector ungu.png (Presisi Responsif Mobile & Desktop) */}
      {/* 1. Hero Section: Header Ungu Atas & Background Wave Vector ungu.png */}
      <div className="relative z-20 w-full overflow-visible">
        {/* Floating Pixel Art Assets (Bintang, Pensil, Bumi, Aset Buku - Proporsional w-12 sampai w-16 di sisi kiri & kanan wave, z-10 di balik konten) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {/* Tingkat Atas Kiri: Bintang */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bintang.png"
            alt="Pixel Bintang"
            className="absolute top-[48px] sm:top-[52px] md:top-20 lg:top-24 left-3 sm:left-5 md:left-10 lg:left-14 w-7 sm:w-9 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-1 select-none"
          />
          {/* Tingkat Tengah Kiri: Bumi */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bumi.png"
            alt="Pixel Bumi"
            className="absolute top-[108px] sm:top-[114px] md:top-[42%] left-2.5 sm:left-4 md:left-8 lg:left-12 w-7 sm:w-9 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-2 select-none"
          />
          {/* Tingkat Bawah Kiri: Buku */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/aset buku.png"
            alt="Pixel Buku"
            className="absolute top-[154px] sm:top-[162px] md:top-auto md:bottom-20 lg:bottom-24 left-3 sm:left-6 md:left-10 lg:left-16 w-8 sm:w-10 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-3 select-none"
          />

          {/* Tingkat Atas Kanan: Pensil */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/pensil.png"
            alt="Pixel Pensil"
            className="absolute top-[48px] sm:top-[52px] md:top-20 lg:top-24 right-3 sm:right-5 md:right-10 lg:right-14 w-7 sm:w-9 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-4 select-none"
          />
          {/* Tingkat Tengah Kanan: Bintang */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bintang.png"
            alt="Pixel Bintang"
            className="absolute top-[108px] sm:top-[114px] md:top-[42%] right-2.5 sm:right-4 md:right-8 lg:right-12 w-6 sm:w-8 md:w-12 lg:w-14 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-1 select-none"
          />
          {/* Tingkat Bawah Kanan: Bumi */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bumi.png"
            alt="Pixel Bumi"
            className="absolute top-[154px] sm:top-[162px] md:top-auto md:bottom-20 lg:bottom-24 right-3 sm:right-6 md:right-10 lg:right-16 w-8 sm:w-10 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-2 select-none"
          />
        </div>

        {/* Bagian Header Ungu Atas (In-flow di mobile dengan bg-[#2f0f53], absolute di desktop) */}
        <div className="relative md:absolute md:inset-0 z-20 w-full bg-[#2f0f53] md:bg-transparent pt-10 sm:pt-12 md:pt-36 pb-0 md:pb-0 px-4 sm:px-6 flex flex-col items-center pointer-events-none">
          {/* Konten Hero: Title & Subtitle - Di area ungu atas pada mobile, floating di desktop */}
          <div className="max-w-6xl w-full mx-auto flex flex-col items-center pointer-events-auto">
            {/* Title: MATERI (Kapital, text-white, diturunkan mendekati wave) */}
            <h1 className="font-pixel text-xl sm:text-2xl md:text-4xl text-white font-black tracking-wider md:tracking-widest text-center pixel-text-shadow leading-tight select-none mt-5 sm:mt-7 md:mt-6 pt-1 sm:pt-2 md:pt-8 mb-1 sm:mb-1.5 md:mb-6 uppercase">
              MATERI
            </h1>

            {/* Sub-teks (Berada lebih ke bawah mendekati area lekukan wave, tanpa ruang kosong berlebih di bawahnya) */}
            <p className="text-white font-bold text-xs sm:text-xs md:text-base text-center max-w-[290px] sm:max-w-xs md:max-w-md mx-auto leading-normal sm:leading-relaxed mt-1 sm:mt-1.5 md:mt-4 mb-2 sm:mb-2.5 md:mb-6 select-none">
              Ayo mulai belajar IPAS, Matematika, dan Bahasa
              <br className="hidden sm:inline" /> Inggris bersama!
            </p>
          </div>
        </div>

        {/* Rendering Wave Image: Ditarik ke atas di mobile untuk menyatu mulus sebelum wave */}
        <div className="w-full relative z-0 -mt-16 sm:-mt-18 md:-mt-10 bg-transparent">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Vector ungu.png"
            alt="Wave Vector"
            className="w-full h-auto object-contain md:object-cover lg:object-fill md:min-h-[560px] lg:min-h-0 block max-w-none pointer-events-none select-none"
          />
        </div>
      </div>

      {/* 2. Main Content Area (Background Putih Polos Menyatu Penuh dari Bawah Wave hingga Footer) */}
      <main className="relative z-20 w-full bg-white text-slate-900 pb-16 sm:pb-24 flex-1">
        {/* Karakter SD Berhijab & Speech Bubble "Hai Explorer!..." (Dinaikkan proporsional pas di atas lekukan wave) */}
        <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 -mt-20 xs:-mt-24 sm:-mt-40 md:-mt-64 lg:-mt-72 -translate-y-1 sm:-translate-y-4 md:-translate-y-[80px] mb-4 sm:mb-8 md:mb-12 pointer-events-auto">
          <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-6 md:gap-8">
            {/* Karakter SD Cewek Berhijab */}
            <div className="relative flex-shrink-0 select-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/karakter cewe.png"
                alt="Karakter Siswi SD Berhijab"
                className="w-16 sm:w-24 md:w-36 lg:w-44 h-auto object-contain drop-shadow-2xl pixel-art-crisp transition-transform duration-150 active:scale-95 touch-manipulation cursor-pointer"
              />
            </div>

            {/* Speech Bubble Putih */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 md:p-6 shadow-xl md:shadow-2xl border-2 border-purple-900/20 max-w-[210px] xs:max-w-[250px] sm:max-w-md md:max-w-lg text-left transition-transform duration-150 active:scale-[0.98] touch-manipulation">
              {/* Ekor Balon Bicara ke Kiri Menghadap Karakter */}
              <div className="absolute top-1/2 -left-2 sm:-left-2.5 md:-left-3.5 -translate-y-1/2 w-0 h-0 border-t-[6px] sm:border-t-[8px] md:border-t-[12px] border-t-transparent border-b-[6px] sm:border-b-[8px] md:border-b-[12px] border-b-transparent border-r-[8px] sm:border-r-[10px] md:border-r-[14px] border-r-white drop-shadow-sm" />

              <h2 className="text-xs sm:text-base md:text-xl font-black text-slate-900 mb-0.5 sm:mb-1 tracking-tight">
                Hai Explorer!
              </h2>
              <p className="text-[#3B1578] font-bold text-[9px] sm:text-xs md:text-sm leading-tight sm:leading-relaxed">
                Pilih kelasmu dan mata pelajaran untuk mulai belajar dan jelajahi materi seru di Nusa Explorer!
              </p>
            </div>
          </div>
        </div>

        {/* 3 Card Mata Pelajaran (IPAS, Matematika, B. Inggris) Langsung di atas Background Putih Polos Halaman */}
        <div className="max-w-5xl mx-auto px-5 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {currentSubjects.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#38116E] rounded-3xl p-4 sm:p-6 shadow-xl border-2 border-purple-400/20 flex flex-col justify-between text-center transition-all duration-150 ease-in-out hover:-translate-y-2 hover:border-purple-400/60 active:scale-[0.98] active:brightness-95 touch-manipulation cursor-pointer"
              >
                {/* Thumbnail Gambar Materi */}
                <div className="w-full rounded-2xl overflow-hidden shadow-md border-2 border-white/20 mb-4 sm:mb-5 bg-purple-950/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-44 sm:h-48 md:h-52 object-cover transition-transform duration-300 group-hover:scale-105 select-none"
                  />
                </div>

                {/* Judul Materi */}
                <h3 className="font-pixel text-base sm:text-lg md:text-xl font-bold text-white tracking-wider text-center mb-2 sm:mb-3">
                  {item.title}
                </h3>

                {/* Deskripsi Materi */}
                <p className="text-white/90 text-xs sm:text-[13px] leading-relaxed text-center px-1 mb-5 sm:mb-7 flex-1 min-h-[48px] md:min-h-[64px]">
                  {item.description}
                </p>

                {/* Tombol Mulai Belajar dengan Font Poppins Bersih */}
                {item.title === "IPAS" ? (
                  <Link
                    href="/materi/ipas"
                    className="w-full block bg-[#7EB6FF] hover:bg-[#68A5F8] text-[#190C38] font-black font-poppins text-xs sm:text-base py-3 px-6 rounded-2xl shadow-lg transition-all duration-150 ease-in-out hover:scale-[1.02] active:scale-95 active:opacity-85 active:shadow-none text-center cursor-pointer select-none touch-manipulation"
                  >
                    Mulai Belajar
                  </Link>
                ) : (
                  <button className="w-full bg-[#7EB6FF] hover:bg-[#68A5F8] text-[#190C38] font-black font-poppins text-xs sm:text-base py-3 px-6 rounded-2xl shadow-lg transition-all duration-150 ease-in-out hover:scale-[1.02] active:scale-95 active:opacity-85 active:shadow-none text-center cursor-pointer select-none touch-manipulation">
                    Mulai Belajar
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Global Footer (bg-[#190C38], persis seperti pada Home Page) */}
      <Footer />
    </div>
  );
}
