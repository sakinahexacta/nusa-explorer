"use client";

import React from "react";
import { Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface StepCard {
  number: number;
  title: string;
  description: string;
}

const steps: StepCard[] = [
  {
    number: 1,
    title: "Mencari Misi",
    description:
      "Cari NPC di sepanjang map dan pecahkan masalah yang ada pada map game.",
  },
  {
    number: 2,
    title: "Memecahkan Masalah",
    description:
      "Bantu NPC dengan menyelesaikan masalah yang terjadi pada map tersebut dengan menjawab quiz",
  },
  {
    number: 3,
    title: "Mendapatkan Reward",
    description:
      "Dapatkan reward progres dari masalah yang telah diselesaikan.",
  },
  {
    number: 4,
    title: "Eksplor dan Selesaikan Semua",
    description:
      "Selesaikan semua masalah NPC yang ada pada map untuk menyelesaikan seluruh game hingga 100%",
  },
];

const maps = [
  { badge: "Sawah", src: "/images/map 1.png" },
  { badge: "Taman", src: "/images/map 2.png" },
  { badge: "Desa", src: "/images/map 3.png" },
  { badge: "Sekolah", src: "/images/map 4.png" },
  { badge: "Sawah", src: "/images/map 5.png" },
  { badge: "Pasar", src: "/images/map 6.png" },
];

export default function PanduanBermain() {
  return (
    <div className="w-full min-h-screen bg-white relative overflow-x-hidden p-0 m-0 text-slate-900 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      {/* 1. Hero Section dengan Background Wave Vector ungu.png & 4 Step Cards */}
      <div className="relative z-20 w-full overflow-visible">
        {/* Rendering Wave Image: Mobile h-[330px] sm:h-[380px] (identik Materi.tsx), Desktop min-h-[560px] */}
        <div className="w-full relative z-0 -mt-4 sm:-mt-6 md:-mt-10 overflow-hidden md:overflow-visible h-[330px] sm:h-[380px] md:h-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/Vector ungu.png" 
            alt="Wave Vector" 
            className="w-full h-full md:h-auto md:min-h-[560px] lg:min-h-0 block max-w-none pointer-events-none select-none object-cover lg:object-fill"
          />
        </div>

        {/* Floating Pixel Art Assets:
            Desktop: Koordinat dan ukuran orisinal desktop (md:top-24, md:left-36, md:bottom-24, md:w-14 lg:w-16, dll.)
            Mobile: Posisi proporsional di atas wave sesuai halaman Materi
        */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 md:z-10">
          {/* Aset Atas Kiri: Bintang */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bintang.png"
            alt="Pixel Bintang"
            className="absolute top-16 sm:top-20 md:top-24 lg:top-28 left-[18%] sm:left-[20%] md:left-36 lg:left-[22%] w-10 sm:w-12 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-1 select-none"
          />
          {/* Aset Sisi Kiri: Bumi */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bumi.png"
            alt="Pixel Bumi"
            className="absolute top-[32%] sm:top-[34%] md:top-[44%] left-3 sm:left-6 md:left-8 lg:left-12 w-10 sm:w-12 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-2 select-none"
          />
          {/* Aset Bawah Kiri: Buku */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/aset buku.png"
            alt="Pixel Buku"
            className="absolute top-[48%] sm:top-[50%] md:top-auto md:bottom-24 lg:bottom-28 left-4 sm:left-8 md:left-10 lg:left-14 w-10 sm:w-12 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-3 select-none"
          />

          {/* Aset Atas Kanan: Pensil */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/pensil.png"
            alt="Pixel Pensil"
            className="absolute top-16 sm:top-20 md:top-24 lg:top-28 right-[18%] sm:right-[20%] md:right-36 lg:right-[22%] w-10 sm:w-12 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-4 select-none"
          />
          {/* Aset Sisi Kanan: Bintang */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bintang.png"
            alt="Pixel Bintang"
            className="absolute top-[32%] sm:top-[34%] md:top-[44%] right-3 sm:right-6 md:right-8 lg:right-12 w-9 sm:w-11 md:w-12 lg:w-14 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-1 select-none"
          />
          {/* Aset Bawah Kanan: Bumi */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bumi.png"
            alt="Pixel Bumi"
            className="absolute top-[48%] sm:top-[50%] md:top-auto md:bottom-24 lg:bottom-28 right-4 sm:right-8 md:right-10 lg:right-14 w-10 sm:w-12 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-2 select-none"
          />
        </div>

        {/* Konten Hero DESKTOP (md ke atas): Title & 4 Cards Melayang Horizontal di atas Wave - Sama Persis Orisinal */}
        <div className="hidden md:flex absolute inset-0 z-20 flex-col items-center pt-24 sm:pt-28 md:pt-36 px-4 sm:px-6 pointer-events-auto">
          <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
            {/* Title: PANDUAN BERMAIN Desktop */}
            <h1 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-white font-black tracking-widest text-center pixel-text-shadow leading-tight select-none mt-6 pt-8 mb-6">
              PANDUAN BERMAIN
            </h1>

            {/* 4 Cards Grid Desktop: 4 Kolom Horizontal */}
            <div className="w-full grid grid-cols-4 gap-6 mt-16 sm:mt-20 md:mt-24 mb-2 sm:mb-4 relative z-20">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="group relative overflow-visible bg-gradient-to-b from-[#6D28D9] via-[#4C1D95] to-[#2E1065] text-white rounded-3xl p-3.5 sm:p-4 md:p-5 pt-4 sm:pt-5 h-[210px] sm:h-[220px] md:h-[230px] shadow-[0_8px_0_#190C38] border border-purple-400/20 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_0_#190C38] flex flex-col items-center justify-start text-center"
                >
                  {/* Lingkaran badge nomor */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#A855F7] text-white font-pixel font-bold text-lg sm:text-xl flex items-center justify-center absolute -top-4 -left-3 shadow-lg z-10 select-none">
                    {step.number}
                  </div>

                  {/* Judul Langkah */}
                  <div className="w-full flex items-center justify-center min-h-[30px] sm:min-h-[34px] -mt-1 sm:-mt-1.5 mb-1 px-1">
                    <h3 className="font-bold text-sky-300 text-xs sm:text-sm md:text-sm lg:text-[13px] xl:text-sm tracking-tight text-center leading-snug line-clamp-2">
                      {step.title}
                    </h3>
                  </div>

                  {/* Deskripsi Langkah */}
                  <p className="text-white/95 text-[11px] sm:text-xs leading-relaxed font-normal text-center mt-3 sm:mt-4 px-1">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Konten Hero MOBILE (< md): Title di atas Wave Bersih (Samakan Materi.tsx) */}
        <div className="block md:hidden absolute inset-0 z-20 flex flex-col items-center pt-16 sm:pt-20 px-4 pointer-events-none">
          <div className="max-w-6xl w-full mx-auto flex flex-col items-center pointer-events-auto mt-0.5">
            <h1 className="font-pixel text-xl sm:text-2xl text-white font-black tracking-wider text-center pixel-text-shadow leading-tight select-none mt-1 pt-0 mb-2 uppercase">
              PANDUAN BERMAIN
            </h1>
          </div>
        </div>
      </div>

      {/* 2. White Section: Card Control Permainan & Tujuan Permainan */}
      <section className="relative z-10 md:z-0 bg-white pt-2 sm:pt-4 md:pt-4 pb-4 sm:pb-6 md:pb-8 px-4 sm:px-6 -mt-20 sm:-mt-24 md:mt-0">
        <div className="max-w-6xl w-full mx-auto">
          {/* 4 Cards Grid KHUSUS MOBILE: 2 Kolom (grid-cols-2) dengan gap vertikal lega agar Card 3 & 4 tidak mepet */}
          <div className="block md:hidden w-full grid grid-cols-2 gap-x-3.5 sm:gap-x-4.5 gap-y-8 sm:gap-y-10 pt-2 sm:pt-4 mb-8 sm:mb-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`group relative overflow-visible bg-gradient-to-b from-[#6D28D9] via-[#4C1D95] to-[#2E1065] text-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 pt-4 sm:pt-5 min-h-[175px] sm:min-h-[195px] shadow-[0_6px_0_#190C38] sm:shadow-[0_8px_0_#190C38] border border-purple-400/20 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_0_#190C38] flex flex-col items-center justify-start text-center ${
                  step.number > 2 ? "mt-1 sm:mt-2" : ""
                }`}
              >
                {/* Lingkaran badge nomor (Identik dengan Desktop) */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#A855F7] text-white font-pixel font-bold text-sm sm:text-lg flex items-center justify-center absolute -top-3 -left-2 sm:-top-3.5 sm:-left-2.5 shadow-md border border-white/30 z-10 select-none">
                  {step.number}
                </div>

                {/* Judul Langkah (Identik dengan Desktop: text-sky-300) */}
                <div className="w-full flex items-center justify-center min-h-[30px] sm:min-h-[34px] -mt-1 sm:-mt-1.5 mb-1 px-1">
                  <h3 className="font-bold text-sky-300 text-xs sm:text-sm tracking-tight text-center leading-snug line-clamp-2">
                    {step.title}
                  </h3>
                </div>

                {/* Deskripsi Langkah */}
                <p className="text-white/95 text-[10px] sm:text-xs leading-relaxed font-normal text-center mt-1.5 sm:mt-2 px-0.5 sm:px-1">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Container "Control Permainan" DESKTOP: Tetap Sama Persis Seperti Semula (md:block) */}
          <div className="hidden md:block max-w-5xl w-full mx-auto mt-4 sm:mt-6 mb-8 md:mb-12 relative z-10">
            <div className="bg-white rounded-3xl border-4 border-[#190C38] shadow-2xl p-6 sm:p-8 md:p-10 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left: Keyboard WASD Illustration */}
                <div className="flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/keyboard.png"
                    alt="Keyboard WASD"
                    className="w-full max-w-[320px] sm:max-w-[360px] h-auto object-contain drop-shadow-md select-none mx-auto"
                  />
                </div>

                {/* Right: Controls List */}
                <div className="flex flex-col items-center md:items-stretch">
                  {/* Header Banner */}
                  <div className="w-full bg-[#190C38] text-white py-2.5 sm:py-3 px-6 rounded-2xl font-bold text-center text-sm sm:text-base mb-5 sm:mb-7 tracking-wide shadow-lg select-none border border-[#190C38]">
                    Control Permainan
                  </div>

                  {/* Keys Grid */}
                  <div className="w-full grid grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-4 sm:gap-x-6">
                    {/* W -> Atas */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-9 h-9 flex items-center justify-center overflow-hidden flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/w.png" alt="W" className="w-full h-full object-contain scale-110 drop-shadow-sm" />
                      </div>
                      <Play className="w-3.5 h-3.5 fill-[#190C38] text-[#190C38] flex-shrink-0" />
                      <span className="bg-[#073294] text-white px-4 sm:px-5 py-2 rounded-xl font-bold text-xs sm:text-sm min-w-[70px] sm:min-w-[80px] text-center shadow">
                        Atas
                      </span>
                    </div>

                    {/* S -> Bawah */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-9 h-9 flex items-center justify-center overflow-hidden flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/s.png" alt="S" className="w-full h-full object-contain scale-110 drop-shadow-sm" />
                      </div>
                      <Play className="w-3.5 h-3.5 fill-[#190C38] text-[#190C38] flex-shrink-0" />
                      <span className="bg-[#073294] text-white px-4 sm:px-5 py-2 rounded-xl font-bold text-xs sm:text-sm min-w-[70px] sm:min-w-[80px] text-center shadow">
                        Bawah
                      </span>
                    </div>

                    {/* A -> Kiri */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-9 h-9 flex items-center justify-center overflow-hidden flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/a.png" alt="A" className="w-full h-full object-contain scale-110 drop-shadow-sm" />
                      </div>
                      <Play className="w-3.5 h-3.5 fill-[#190C38] text-[#190C38] flex-shrink-0" />
                      <span className="bg-[#073294] text-white px-4 sm:px-5 py-2 rounded-xl font-bold text-xs sm:text-sm min-w-[70px] sm:min-w-[80px] text-center shadow">
                        Kiri
                      </span>
                    </div>

                    {/* D -> Kanan */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-9 h-9 flex items-center justify-center overflow-hidden flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/d.png" alt="D" className="w-full h-full object-contain scale-110 drop-shadow-sm" />
                      </div>
                      <Play className="w-3.5 h-3.5 fill-[#190C38] text-[#190C38] flex-shrink-0" />
                      <span className="bg-[#073294] text-white px-4 sm:px-5 py-2 rounded-xl font-bold text-xs sm:text-sm min-w-[70px] sm:min-w-[80px] text-center shadow">
                        Kanan
                      </span>
                    </div>

                    {/* E -> Interaksi */}
                    <div className="col-span-2 flex items-center gap-2 sm:gap-3 mt-1">
                      <div className="w-9 h-9 flex items-center justify-center overflow-hidden flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/e.png" alt="E" className="w-full h-full object-contain scale-110 drop-shadow-sm" />
                      </div>
                      <Play className="w-3.5 h-3.5 fill-[#190C38] text-[#190C38] flex-shrink-0" />
                      <span className="bg-[#073294] text-white px-5 sm:px-6 py-2 rounded-xl font-bold text-xs sm:text-sm min-w-[80px] text-center shadow">
                        Interaksi
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Container "Control Permainan" KHUSUS MOBILE: Side-by-Side Sesuai Desain Acuan (md:hidden) */}
          <div className="block md:hidden w-full max-w-5xl mx-auto mb-8">
            <div className="bg-white rounded-2xl border-[2.5px] border-[#190C38] shadow-xl p-3 relative">
              <div className="grid grid-cols-12 gap-2 items-center">
                {/* Left: Keyboard WASD Illustration */}
                <div className="col-span-5 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/keyboard.png"
                    alt="Keyboard WASD"
                    className="w-full max-w-[140px] h-auto object-contain drop-shadow-md select-none mx-auto"
                  />
                </div>

                {/* Right: Controls List */}
                <div className="col-span-7 flex flex-col items-stretch">
                  {/* Header Banner */}
                  <div className="w-full bg-[#190C38] text-white py-1.5 px-2 rounded-lg font-bold text-center text-[10px] mb-2.5 tracking-wide shadow select-none border border-[#190C38]">
                    Control Permainan
                  </div>

                  {/* Keys Grid: 2 Kolom Kompak */}
                  <div className="w-full grid grid-cols-2 gap-y-2 gap-x-1.5">
                    {/* W -> Atas */}
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 flex items-center justify-center overflow-hidden flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/w.png" alt="W" className="w-full h-full object-contain scale-110 drop-shadow-sm" />
                      </div>
                      <Play className="w-2 h-2 fill-[#190C38] text-[#190C38] flex-shrink-0" />
                      <span className="bg-[#073294] text-white px-1.5 py-0.5 rounded-md font-bold text-[9px] min-w-[42px] text-center shadow">
                        Atas
                      </span>
                    </div>

                    {/* S -> Bawah */}
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 flex items-center justify-center overflow-hidden flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/s.png" alt="S" className="w-full h-full object-contain scale-110 drop-shadow-sm" />
                      </div>
                      <Play className="w-2 h-2 fill-[#190C38] text-[#190C38] flex-shrink-0" />
                      <span className="bg-[#073294] text-white px-1.5 py-0.5 rounded-md font-bold text-[9px] min-w-[42px] text-center shadow">
                        Bawah
                      </span>
                    </div>

                    {/* A -> Kiri */}
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 flex items-center justify-center overflow-hidden flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/a.png" alt="A" className="w-full h-full object-contain scale-110 drop-shadow-sm" />
                      </div>
                      <Play className="w-2 h-2 fill-[#190C38] text-[#190C38] flex-shrink-0" />
                      <span className="bg-[#073294] text-white px-1.5 py-0.5 rounded-md font-bold text-[9px] min-w-[42px] text-center shadow">
                        Kiri
                      </span>
                    </div>

                    {/* D -> Kanan */}
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 flex items-center justify-center overflow-hidden flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/d.png" alt="D" className="w-full h-full object-contain scale-110 drop-shadow-sm" />
                      </div>
                      <Play className="w-2 h-2 fill-[#190C38] text-[#190C38] flex-shrink-0" />
                      <span className="bg-[#073294] text-white px-1.5 py-0.5 rounded-md font-bold text-[9px] min-w-[42px] text-center shadow">
                        Kanan
                      </span>
                    </div>

                    {/* E -> Interaksi */}
                    <div className="col-span-2 flex items-center gap-1 mt-0.5">
                      <div className="w-5 h-5 flex items-center justify-center overflow-hidden flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/e.png" alt="E" className="w-full h-full object-contain scale-110 drop-shadow-sm" />
                      </div>
                      <Play className="w-2 h-2 fill-[#190C38] text-[#190C38] flex-shrink-0" />
                      <span className="bg-[#073294] text-white px-2 py-0.5 rounded-md font-bold text-[9px] min-w-[55px] text-center shadow">
                        Interaksi
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Heading "Tujuan Permainan" dengan Garis Horizontal */}
          <div className="relative w-full flex items-center justify-center mt-8 md:mt-12 mb-3 md:mb-4 px-2 sm:px-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-[#190C38]/30" />
            </div>
            <div className="relative bg-white px-3 sm:px-6 md:px-8 lg:px-10">
              <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-[#190C38] tracking-tight whitespace-nowrap select-none">
                Tujuan Permainan
              </h2>
            </div>
          </div>

          {/* Subtitle Deskripsi Tujuan Permainan */}
          <p className="text-slate-700 text-[11px] sm:text-sm md:text-base font-semibold max-w-xl mx-auto text-center mb-6 sm:mb-10 md:mb-12 px-4 leading-relaxed">
            Yuk, cari dan bantu selesaikan permasalahan yang terjadi di sepanjang map bareng Nusa!
          </p>
        </div>
      </section>

      {/* 3. Section Bawah: Background Ungu untuk Panduan Permainan, Poin Misi + Karakter, & Grid Map */}
      <div 
        className="relative z-20 w-full bg-gradient-to-b from-[#230E40] via-[#481B7E] via-[#200A40] to-[#190C38] text-white pt-3 sm:pt-4 pb-0 md:pb-8"
        style={{
          background: "linear-gradient(to bottom, #230E40 0%, #481B7E 25%, #200A40 60%, #190C38 85%, #190C38 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Button Pill "Panduan Permainan" - Ukuran Ekstra Ramping & Pendek di Mobile, Orisinal di Desktop */}
          <div className="w-full flex justify-center mt-1.5 sm:mt-2 md:mt-4 mb-2 sm:mb-3 md:mb-6">
            <div className="relative z-30 w-fit min-w-[115px] sm:min-w-[150px] md:min-w-[340px] px-3 sm:px-5 md:px-10 py-0.5 sm:py-1 md:py-3 rounded-full md:rounded-2xl bg-white text-[#190C38] font-black text-[9.5px] sm:text-xs md:text-xl shadow-md md:shadow-2xl select-none text-center border border-white/40 md:border-2 md:border-white/30 leading-tight">
              Panduan Permainan
            </div>
          </div>

          {/* GRID: List Panduan Permainan (Left) & Karakter SD Nusa (Right) DESKTOP: Tetap Sama Persis Seperti Semula (hidden md:grid) */}
          <div className="hidden md:grid md:grid-cols-12 gap-6 sm:gap-8 items-start mb-4 sm:mb-5 py-0 h-auto">
            {/* Left Column: List Panduan Permainan Sejajar ke Kiri (items-start) lurus dengan Card Peta di bawahnya */}
            <div className="md:col-span-7 flex flex-col items-start justify-start w-full">
              {/* 4 Bullet Point Pills Biru - GAP SANGAT SENGGANG/LEBAR (mt-14 sm:mt-16) khusus ke poin pertama */}
              <div className="w-full max-w-xl flex flex-col space-y-3 mt-14 sm:mt-16 text-left">
                {[
                  "Jelajahi seluruh area pada peta.",
                  "Temui NPC yang membutuhkan bantuan.",
                  "Kerjakan soal aljabar dengan benar.",
                  "Kumpulkan reward dan selesaikan semua misi.",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#8EC5FC] hover:bg-[#7DBBF9] text-[#072464] font-bold text-xs sm:text-sm py-3 px-4 sm:px-5 rounded-2xl flex items-center gap-3.5 transition-colors shadow-md text-left"
                  >
                    {/* Bullet: Bulat Putih di Luar dan Bulat Biru Tua di Dalam */}
                    <div className="w-5.5 h-5.5 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#190C38]" />
                    </div>
                    <span className="text-left font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Karakter SD Nusa Dinaikkan ke Atas Melewati Garis Batas Atas Container */}
            <div className="md:col-span-5 flex items-end justify-center md:justify-end self-end relative z-30">
              <div className="relative -mt-28 sm:-mt-36 md:-mt-44 -translate-y-6 sm:-translate-y-10 z-30 flex items-end justify-center md:justify-end w-full md:translate-x-4 lg:translate-x-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/karakter 2.png"
                  alt="Karakter SD Nusa"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                  }}
                  className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] h-auto object-contain drop-shadow-2xl select-none ml-auto block [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
                />
              </div>
            </div>
          </div>

          {/* GRID: List Panduan Permainan (Left) & Karakter SD Nusa (Right) KHUSUS MOBILE: Kepala Menyembul Keluar di Atas Kontainer & Bawah Fade Out */}
          <div className="grid md:hidden grid-cols-12 gap-2 sm:gap-4 items-start mb-8 relative z-30">
            {/* Left Column: 4 Bullet Point Pills Biru - Diberi Jarak / Spacing yang Pas ke Bawah dari Badge */}
            <div className="col-span-7 flex flex-col space-y-2 sm:space-y-2.5 text-left mt-3.5 sm:mt-5 pt-1">
              {[
                "Jelajahi seluruh area pada peta.",
                "Temui NPC yang membutuhkan bantuan.",
                "Kerjakan soal aljabar dengan benar.",
                "Kumpulkan reward dan selesaikan semua misi.",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#8EC5FC] hover:bg-[#7DBBF9] text-[#072464] font-bold text-[9.5px] sm:text-xs py-1.5 px-2 rounded-xl flex items-center gap-1.5 transition-colors shadow-md text-left"
                >
                  <div className="w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#190C38]" />
                  </div>
                  <span className="text-left font-bold leading-tight">{item}</span>
                </div>
              ))}
            </div>

            {/* Right Column: Karakter SD Nusa dengan Kepala Menyembul Nyata ke Atas Kontainer Ungu & Efek Pudar Halus di Bawah */}
            <div className="col-span-5 flex items-start justify-center relative z-40">
              <div className="relative -mt-16 sm:-mt-20 -translate-y-4 sm:-translate-y-6 z-40 flex items-start justify-center w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/karakter 2.png"
                  alt="Karakter SD Nusa"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
                  }}
                  className="w-full max-w-[145px] sm:max-w-[195px] h-auto object-contain drop-shadow-2xl select-none ml-auto block pointer-events-none [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]"
                />
              </div>
            </div>
          </div>

          {/* 6 Map Cards Grid: 2 Kolom di Mobile (grid-cols-2), 3 Kolom di Desktop (md:grid-cols-3) - Gap Rapat Proporsional ke Footer di Mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6 md:gap-8 lg:gap-10 mb-2 sm:mb-4 md:mb-20 lg:mb-24 relative z-10">
            {maps.map((map, index) => (
              <div key={index} className="flex flex-col items-center group">
                {/* White Badge Pill */}
                <div className="w-full bg-white text-[#190C38] font-black text-xs sm:text-sm md:text-base py-1 sm:py-2 md:py-2.5 px-2 sm:px-4 md:px-6 rounded-lg sm:rounded-xl md:rounded-2xl text-center shadow-md mb-2 sm:mb-3 md:mb-3.5 tracking-wide select-none group-hover:bg-purple-100 transition-colors">
                  {map.badge}
                </div>

                {/* Map Frame */}
                <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden border-2 border-white/90 shadow-lg md:shadow-xl hover:scale-105 transition-transform duration-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={map.src}
                    alt={`Map ${map.badge}`}
                    className="w-full h-24 sm:h-36 md:h-48 lg:h-52 object-cover pixel-art-crisp"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Footer: Menyatu Mulus Tanpa Overlay Shadow, Jarak Rapat & Alami (Transparan di Desktop) */}
        <Footer transparent className="border-t-0 pt-3 sm:pt-5 md:pt-10 relative z-20" />
      </div>
    </div>
  );
}
