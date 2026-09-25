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
      {/* Global Navbar dengan Dynamic Scroll Background & Mobile Hamburger Menu */}
      <Navbar />

      {/* 1. Hero Section: Header Ungu Atas & Background Wave Vector ungu.png */}
      <div className="relative z-20 w-full overflow-visible">
        {/* Floating Pixel Art Assets (z-30 agar tampil di atas background ungu & wave di mobile & desktop) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
          {/* Aset Bintang Atas: Di kiri atas, dekat logo, tidak menumpuk */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bintang.png"
            alt="Pixel Bintang Atas"
            className="absolute block top-[2%] left-[10%] md:top-20 lg:top-24 md:left-36 lg:left-[22%] w-7 sm:w-8 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-1 select-none"
          />

          {/* Aset Pensil Atas: Di kanan atas, di bawah menu hamburger */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/pensil.png"
            alt="Pixel Pensil Atas"
            className="absolute block top-[8%] right-[5%] md:top-20 lg:top-24 md:right-36 lg:right-[22%] w-7 sm:w-8 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-4 select-none"
          />

          {/* Aset Buku Besar Kiri: Di kiri tengah, di area ungu sebelum gelombang putih, ukuran besar proporsional */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/aset buku.png"
            alt="Pixel Buku Besar"
            className="absolute block top-[15%] left-0 md:top-auto md:bottom-20 lg:bottom-24 md:left-10 lg:left-16 w-12 sm:w-14 md:w-18 lg:w-22 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-3 select-none"
          />

          {/* Aset Bumi Kiri: Di sisi kiri tengah */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bumi.png"
            alt="Pixel Bumi Kiri"
            className="absolute block top-[40%] left-2 sm:left-4 md:top-[42%] md:left-8 lg:left-12 w-7 sm:w-8 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-2 select-none"
          />

          {/* Aset Bumi Kanan: Di sisi kanan bawah mendekati gelombang */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bumi.png"
            alt="Pixel Bumi Kanan"
            className="absolute block bottom-[18%] right-2 sm:right-4 md:top-auto md:bottom-20 lg:bottom-24 md:right-10 lg:right-16 w-7 sm:w-8 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-2 select-none"
          />

          {/* Aset Bintang Bawah: Di kanan bawah, di area putih dekat aset bumi */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bintang.png"
            alt="Pixel Bintang Bawah"
            className="absolute block bottom-[2%] right-[5%] md:top-[42%] md:bottom-auto md:right-8 lg:right-12 w-6 sm:w-7 md:w-12 lg:w-14 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-1 select-none"
          />
        </div>

        {/* Bagian Header Ungu Atas (In-flow di mobile dengan bg-[#2e0e52], absolute di desktop) */}
        <div className="relative md:absolute md:inset-0 z-20 w-full bg-[#2e0e52] md:bg-transparent pt-20 sm:pt-24 md:pt-36 pb-2 md:pb-0 px-4 sm:px-6 flex flex-col items-center pointer-events-none">
          {/* Konten Hero: Title & Subtitle - Rata Tengah (text-center) di area ungu atas */}
          <div className="max-w-6xl w-full mx-auto flex flex-col items-center pointer-events-auto">
            {/* Title: MATERI (Kapital, pixel text, text-center) */}
            <h1 className="font-pixel text-xl sm:text-2xl md:text-4xl text-white font-black tracking-wider md:tracking-widest text-center pixel-text-shadow leading-tight select-none mt-2 sm:mt-4 md:mt-6 pt-1 sm:pt-2 md:pt-8 mb-1.5 sm:mb-2 md:mb-6 uppercase">
              MATERI
            </h1>

            {/* Sub-teks (Rata Tengah, berada tepat di bawah judul mendekati area wave) */}
            <p className="text-white font-bold text-xs sm:text-sm md:text-base text-center max-w-[280px] sm:max-w-xs md:max-w-md mx-auto leading-normal sm:leading-relaxed mt-1 sm:mt-1.5 md:mt-4 mb-3 sm:mb-4 md:mb-6 select-none">
              Ayo mulai belajar IPAS, Matematika, dan Bahasa
              <br className="hidden sm:inline" /> Inggris bersama!
            </p>
          </div>
        </div>

        {/* Rendering Wave Image: Menyatu mulus dengan area ungu header */}
        <div className="w-full relative z-0 -mt-8 sm:-mt-10 md:-mt-10 bg-transparent">
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
        {/* Karakter SD Siswi Berhijab & Speech Bubble "Hai Explorer!" Berdiri Sejajar di Area Wave Putih */}
        <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 -mt-16 sm:-mt-32 md:-mt-64 lg:-mt-72 md:-translate-y-[80px] mb-6 sm:mb-8 md:mb-12 pointer-events-auto">
          <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-6 md:gap-8">
            {/* Karakter Siswa SD Berpakaian Seragam SD */}
            <div className="relative flex-shrink-0 select-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/karakter cewe.png"
                alt="Karakter Siswi SD Berhijab"
                className="w-16 sm:w-24 md:w-36 lg:w-44 h-auto object-contain drop-shadow-2xl pixel-art-crisp transition-transform duration-150 active:scale-95 touch-manipulation cursor-pointer"
              />
            </div>

            {/* Speech Bubble Putih "Hai Explorer!" Sejajar di Sebelah Kanan Karakter */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 md:p-6 shadow-xl md:shadow-2xl border-2 border-purple-900/20 max-w-[220px] sm:max-w-md md:max-w-lg text-left transition-transform duration-150 active:scale-95 touch-manipulation">
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

        {/* 3 Card Mata Pelajaran (IPAS, Matematika, B. Inggris): 1 Kolom Bertumpuk di Layar Mobile */}
        <div className="max-w-5xl mx-auto px-5 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {currentSubjects.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#38116E] rounded-3xl p-5 sm:p-6 shadow-xl border-2 border-purple-400/20 flex flex-col justify-between text-center transition-transform duration-150 ease-in-out hover:-translate-y-2 hover:border-purple-400/60 active:scale-95 touch-manipulation cursor-pointer"
              >
                {/* 1. Gambar Ilustrasi Pelajaran di Atas */}
                <div className="w-full rounded-2xl overflow-hidden shadow-md border-2 border-white/20 mb-4 sm:mb-5 bg-purple-950/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-44 sm:h-48 md:h-52 object-cover transition-transform duration-300 group-hover:scale-105 select-none"
                  />
                </div>

                {/* 2. Judul & Deskripsi Pelajaran di Tengah */}
                <h3 className="font-pixel text-base sm:text-lg md:text-xl font-bold text-white tracking-wider text-center mb-2 sm:mb-3">
                  {item.title}
                </h3>

                <p className="text-white/90 text-xs sm:text-[13px] leading-relaxed text-center px-1 mb-5 sm:mb-7 flex-1 min-h-[48px] md:min-h-[64px]">
                  {item.description}
                </p>

                {/* 3. Tombol "Mulai Belajar" di Bagian Bawah dengan Feedback Sentuhan (active:scale-95) */}
                {item.title === "IPAS" ? (
                  <Link
                    href="/materi/ipas"
                    className="w-full block bg-[#7EB6FF] hover:bg-[#68A5F8] text-[#190C38] font-black font-poppins text-xs sm:text-base py-3 sm:py-3.5 px-6 rounded-2xl shadow-lg transition-transform duration-150 ease-in-out hover:scale-[1.02] active:scale-95 text-center cursor-pointer select-none touch-manipulation"
                  >
                    Mulai Belajar
                  </Link>
                ) : (
                  <button className="w-full bg-[#7EB6FF] hover:bg-[#68A5F8] text-[#190C38] font-black font-poppins text-xs sm:text-base py-3 sm:py-3.5 px-6 rounded-2xl shadow-lg transition-transform duration-150 ease-in-out hover:scale-[1.02] active:scale-95 text-center cursor-pointer select-none touch-manipulation">
                    Mulai Belajar
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Global Footer (bg-[#190C38], 1 Kolom Rata Tengah di Mobile & 3 Kolom di Desktop) */}
      <Footer />
    </div>
  );
}
