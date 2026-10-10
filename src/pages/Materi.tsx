"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

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
      {/* 1. Hero Section: Background Wave Vector ungu.png Bersih (Clean Background Tanpa Lapisan Gradasi) */}
      <div className="relative z-20 w-full overflow-visible">
        {/* Rendering Wave Image Murni dengan Ketinggian Lebih Lega di Mobile (Wave terdorong aman di bawah teks) */}
        <div className="w-full relative z-0 -mt-4 sm:-mt-6 md:-mt-10 overflow-hidden h-[330px] sm:h-[380px] md:h-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Vector ungu.png"
            alt="Wave Vector"
            className="w-full h-full md:h-auto md:min-h-[560px] lg:min-h-0 block max-w-none pointer-events-none select-none object-cover lg:object-fill"
          />
        </div>

        {/* Floating Pixel Art Assets (z-30 agar tampil di atas background ungu & wave di mobile & desktop) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
          {/* Aset Atas Kiri: Bintang (Dekat judul MATERI di atas) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bintang.png"
            alt="Pixel Bintang"
            className="absolute top-16 sm:top-20 md:top-24 lg:top-28 left-[18%] sm:left-[20%] md:left-36 lg:left-[22%] w-10 sm:w-12 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-1 select-none"
          />
          {/* Aset Sisi Kiri: Bumi (Flanking deskripsi di area ungu) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bumi.png"
            alt="Pixel Bumi"
            className="absolute top-[32%] sm:top-[34%] md:top-[44%] left-3 sm:left-6 md:left-8 lg:left-12 w-10 sm:w-12 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-2 select-none"
          />
          {/* Aset Bawah Kiri: Buku (Dinaikkan posisinya agar murni di area background ungu di atas wave putih) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/aset buku.png"
            alt="Pixel Buku"
            className="absolute top-[48%] sm:top-[50%] md:top-auto md:bottom-24 lg:bottom-28 left-4 sm:left-8 md:left-10 lg:left-14 w-10 sm:w-12 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-3 select-none"
          />

          {/* Aset Atas Kanan: Pensil (Dekat judul MATERI di atas) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/pensil.png"
            alt="Pixel Pensil"
            className="absolute top-16 sm:top-20 md:top-24 lg:top-28 right-[18%] sm:right-[20%] md:right-36 lg:right-[22%] w-10 sm:w-12 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-4 select-none"
          />
          {/* Aset Sisi Kanan: Bintang (Flanking deskripsi di area ungu) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bintang.png"
            alt="Pixel Bintang"
            className="absolute top-[32%] sm:top-[34%] md:top-[44%] right-3 sm:right-6 md:right-8 lg:right-12 w-9 sm:w-11 md:w-12 lg:w-14 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-1 select-none"
          />
          {/* Aset Bawah Kanan: Bumi (Dinaikkan posisinya agar murni di area background ungu di atas wave putih) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bumi.png"
            alt="Pixel Bumi"
            className="absolute top-[48%] sm:top-[50%] md:top-auto md:bottom-24 lg:bottom-28 right-4 sm:right-8 md:right-10 lg:right-14 w-10 sm:w-12 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-2 select-none"
          />
        </div>

        {/* Konten Hero: Title & Subtitle melayang di atas Wave - absolute inset-0 z-20 pointer-events-none */}
        <div className="absolute inset-0 z-20 flex flex-col items-center pt-16 sm:pt-20 md:pt-28 lg:pt-30 pb-8 sm:pb-10 md:pb-0 px-4 sm:px-6 pointer-events-none">
          {/* Konten Hero: Title & Subtitle - Rata Tengah (text-center) dengan jarak lega pas di atas wave putih */}
          <div className="max-w-6xl w-full mx-auto flex flex-col items-center pointer-events-auto mt-0.5 sm:mt-1 md:mt-0">
            {/* Title: MATERI (Kapital, pixel text, pop bounce) */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8, y: -15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 16, delay: 0.08 }}
              className="font-pixel text-xl sm:text-2xl md:text-4xl text-white font-black tracking-wider md:tracking-widest text-center pixel-text-shadow leading-tight select-none mt-1 sm:mt-2 md:mt-2 lg:mt-3 pt-0 sm:pt-1 md:pt-3 lg:pt-4 mb-1 sm:mb-1.5 md:mb-2.5 lg:mb-3 uppercase"
            >
              MATERI
            </motion.h1>

            {/* Sub-teks (Staggered slide-up) */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 180, damping: 18 }}
              className="text-white font-bold text-[11px] sm:text-sm md:text-base text-center max-w-[260px] sm:max-w-xs md:max-w-md mx-auto leading-normal sm:leading-relaxed mt-0.5 sm:mt-1 md:mt-2 lg:mt-2.5 mb-0 sm:mb-1 md:mb-5 lg:mb-6 px-4 sm:px-0 select-none"
            >
              Ayo mulai belajar IPAS, Matematika, dan Bahasa
              <br className="hidden sm:inline" /> Inggris bersama!
            </motion.p>
          </div>
        </div>
      </div>

      {/* 2. Main Content Area (Background Putih Polos Menyatu Penuh dari Bawah Wave hingga Footer) */}
      <main className="relative z-20 w-full bg-white text-slate-900 pb-16 sm:pb-24 flex-1">
        {/* Karakter SD Siswi Berhijab & Speech Bubble "Hai Explorer!" Berdiri Sejajar di Area Wave Putih */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, type: "spring", stiffness: 150, damping: 18 }}
          className="max-w-5xl mx-auto w-full px-4 sm:px-6 -mt-28 sm:-mt-32 md:-mt-64 lg:-mt-72 md:-translate-y-[80px] mb-6 sm:mb-8 md:mb-12 pointer-events-auto"
        >
          <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-6 md:gap-8">
            {/* Karakter Siswa SD Berpakaian Seragam SD */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative flex-shrink-0 select-none cursor-default"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/karakter cewe.png"
                alt="Karakter Siswi SD Berhijab"
                className="w-16 sm:w-24 md:w-36 lg:w-44 h-auto object-contain drop-shadow-2xl pixel-art-crisp select-none cursor-default"
              />
            </motion.div>

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
        </motion.div>

        {/* 3 Card Mata Pelajaran (IPAS, Matematika, B. Inggris): Staggered entrance */}
        <div className="max-w-5xl mx-auto px-5 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {currentSubjects.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.45,
                  type: "spring",
                  stiffness: 180,
                  damping: 16,
                }}
                whileHover={{ y: -8 }}
                className="group relative bg-[#38116E] rounded-3xl p-5 sm:p-6 shadow-xl border-2 border-purple-400/20 flex flex-col justify-between text-center transition-colors duration-200 hover:border-purple-400/60 touch-manipulation"
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

                {/* 3. Tombol "Mulai Belajar" di Bagian Bawah dengan Feedback Sentuhan */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Link
                    href={
                      item.title === "IPAS"
                        ? "/materi/ipas"
                        : item.title === "MATEMATIKA"
                        ? "/materi/matematika"
                        : "/materi/inggris"
                    }
                    className="w-full block bg-[#7EB6FF] hover:bg-[#68A5F8] text-[#190C38] font-semibold font-poppins text-xs sm:text-base py-3 sm:py-3.5 px-6 rounded-2xl shadow-lg transition-colors duration-150 text-center cursor-pointer select-none touch-manipulation"
                  >
                    Mulai Belajar
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Global Footer (bg-[#190C38], 1 Kolom Rata Tengah di Mobile & 3 Kolom di Desktop) */}
      <Footer />
    </div>
  );
}
