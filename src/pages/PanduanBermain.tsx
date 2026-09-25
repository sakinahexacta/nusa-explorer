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
        {/* Rendering Wave Image */}
        <div className="w-full relative z-0 -mt-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/Vector ungu.png" 
            alt="Wave Vector" 
            className="w-full h-auto min-h-[920px] sm:min-h-[720px] lg:min-h-0 block max-w-none pointer-events-none select-none object-cover lg:object-fill"
          />
        </div>

        {/* Floating Pixel Art Assets (Bintang, Pensil, Bumi, Aset Buku - Proporsional w-12 sampai w-16 di sisi kiri & kanan wave) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {/* Aset Atas Kiri: Bintang */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bintang.png"
            alt="Pixel Bintang"
            className="absolute top-16 sm:top-20 md:top-24 lg:top-28 left-4 sm:left-8 md:left-10 lg:left-14 w-10 sm:w-12 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-1 select-none"
          />
          {/* Aset Sisi Kiri: Bumi */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bumi.png"
            alt="Pixel Bumi"
            className="absolute top-[40%] sm:top-[42%] md:top-[44%] left-3 sm:left-6 md:left-8 lg:left-12 w-10 sm:w-12 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-2 select-none"
          />
          {/* Aset Bawah Kiri: Buku */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/aset buku.png"
            alt="Pixel Buku"
            className="absolute bottom-20 sm:bottom-24 md:bottom-24 lg:bottom-28 left-4 sm:left-8 md:left-10 lg:left-14 w-10 sm:w-12 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-3 select-none"
          />

          {/* Aset Atas Kanan: Pensil */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/pensil.png"
            alt="Pixel Pensil"
            className="absolute top-16 sm:top-20 md:top-24 lg:top-28 right-4 sm:right-8 md:right-10 lg:right-14 w-10 sm:w-12 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-4 select-none"
          />
          {/* Aset Sisi Kanan: Bintang */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bintang.png"
            alt="Pixel Bintang"
            className="absolute top-[40%] sm:top-[42%] md:top-[44%] right-3 sm:right-6 md:right-8 lg:right-12 w-9 sm:w-11 md:w-12 lg:w-14 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-1 select-none"
          />
          {/* Aset Bawah Kanan: Bumi */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bumi.png"
            alt="Pixel Bumi"
            className="absolute bottom-20 sm:bottom-24 md:bottom-24 lg:bottom-28 right-4 sm:right-8 md:right-10 lg:right-14 w-10 sm:w-12 md:w-14 lg:w-16 h-auto drop-shadow-xl pixel-art-crisp animate-pixel-float-2 select-none"
          />
        </div>

        {/* Konten Hero: Title & 4 Cards melayang di atas Wave - relative z-20 agar selalu di depan */}
        <div className="absolute inset-0 z-20 flex flex-col items-center pt-24 sm:pt-28 md:pt-36 px-4 sm:px-6 pointer-events-auto">
          <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
            {/* Title: PANDUAN BERMAIN */}
            <h1 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-white font-black tracking-widest text-center pixel-text-shadow leading-tight select-none mt-6 pt-8 mb-6">
              PANDUAN BERMAIN
            </h1>

            {/* 4 Cards Grid - relative z-20 dengan jarak rapat ke container bawah */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5 lg:gap-6 mt-16 sm:mt-20 md:mt-24 mb-2 sm:mb-4 relative z-20">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="group relative overflow-visible bg-gradient-to-b from-[#6D28D9] via-[#4C1D95] to-[#2E1065] text-white rounded-3xl p-3.5 sm:p-4 md:p-5 pt-4 sm:pt-5 h-[210px] sm:h-[220px] md:h-[230px] shadow-[0_8px_0_#190C38] border border-purple-400/20 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_0_#190C38] flex flex-col items-center justify-start text-center"
                >
                  {/* Lingkaran badge nomor */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#A855F7] text-white font-pixel font-bold text-lg sm:text-xl flex items-center justify-center absolute -top-4 -left-3 shadow-lg z-10 select-none">
                    {step.number}
                  </div>

                  {/* Judul Langkah Responsif - Dinaikkan posisinya mendekati atas (-mt-1 sm:-mt-1.5) */}
                  <div className="w-full flex items-center justify-center min-h-[30px] sm:min-h-[34px] -mt-1 sm:-mt-1.5 mb-1 px-1">
                    <h3 className="font-bold text-sky-300 text-xs sm:text-sm md:text-sm lg:text-[13px] xl:text-sm tracking-tight text-center leading-snug line-clamp-2">
                      {step.title}
                    </h3>
                  </div>

                  {/* Deskripsi Langkah Responsif - Spasi pas dan rapi tanpa bertumpuk (mt-3 sm:mt-4) */}
                  <p className="text-white/95 text-[11px] sm:text-xs leading-relaxed font-normal text-center mt-3 sm:mt-4 px-1">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. White Section: Container Control Permainan & Tujuan Permainan - relative z-0 di belakang Hero Cards */}
      <section className="relative z-0 bg-white pt-2 sm:pt-4 pb-4 sm:pb-6 px-4 sm:px-6">
        {/* Container Utama "Control Permainan" - Dinaikkan sedikit (mt-4 sm:mt-6) pas tepat di bawah lekukan wave */}
        <div className="max-w-5xl w-full mx-auto mt-4 sm:mt-6 mb-6 sm:mb-8 relative z-10">
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
                {/* Header Banner - Menembus / Overlap tepat di garis border paling atas */}
                <div className="w-full bg-[#190C38] text-white py-3 px-6 rounded-2xl font-bold text-center text-sm sm:text-base mb-7 tracking-wide shadow-lg select-none relative -top-6 md:-top-11 z-10 border border-[#190C38]">
                  Control Permainan
                </div>

                {/* Keys Grid */}
                <div className="w-full grid grid-cols-2 gap-y-4 gap-x-4 sm:gap-x-6">
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

        {/* Section Heading "Tujuan Permainan" dengan Garis Horizontal */}
        <div className="relative w-full flex items-center justify-center mt-12 mb-4 px-0">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-[#190C38]/30" />
          </div>
          <div className="relative bg-white px-6 sm:px-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#190C38] tracking-tight whitespace-nowrap select-none">
              Tujuan Permainan
            </h2>
          </div>
        </div>

        {/* Subtitle Deskripsi Tujuan Permainan */}
        <p className="text-slate-700 text-sm sm:text-base font-semibold max-w-xl mx-auto text-center mb-8 sm:mb-12 px-4 leading-relaxed">
          Yuk, cari dan bantu selesaikan permasalahan yang terjadi di sepanjang map bareng Nusa!
        </p>
      </section>

      {/* 3. Section Bawah: Skema Gradasi Ungu Vertikal (#230E40 via #481B7E to #120526) dengan Compact Height */}
      <div className="relative z-20 w-full bg-gradient-to-b from-[#230E40] via-[#481B7E] via-[#200A40] to-[#120526] text-white pt-3 sm:pt-4 pb-6 sm:pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Button Pill "Panduan Permainan" - Diturunkan sedikit ke bawah (mt-3 sm:mt-4) persis di tengah container */}
          <div className="w-full flex justify-center mt-3 sm:mt-4 mb-1">
            <div className="relative z-30 w-fit min-w-[280px] sm:min-w-[340px] px-8 sm:px-10 py-3 rounded-2xl bg-white text-[#190C38] font-black text-lg sm:text-xl shadow-2xl select-none text-center border-2 border-white/30">
              Panduan Permainan
            </div>
          </div>

          {/* GRID: List Panduan Permainan (Left) & Karakter SD Nusa (Right) - Jauh Lebih Tipis/Compact */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start mb-4 sm:mb-5 py-0 h-auto">
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

          {/* 6 Map Cards Grid (Sawah, Taman, Desa, Sekolah, Sawah, Pasar) dengan Gap Vertikal Lega ke Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24">
            {maps.map((map, index) => (
              <div key={index} className="flex flex-col items-center group">
                {/* White Badge Pill */}
                <div className="w-full bg-white text-[#190C38] font-black text-sm sm:text-base py-2.5 px-6 rounded-2xl text-center shadow-md mb-3.5 tracking-wide select-none group-hover:bg-purple-100 transition-colors">
                  {map.badge}
                </div>

                {/* Map Frame */}
                <div className="w-full rounded-2xl overflow-hidden border-2 border-white/90 shadow-xl hover:scale-105 transition-transform duration-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={map.src}
                    alt={`Map ${map.badge}`}
                    className="w-full h-44 sm:h-48 md:h-52 object-cover pixel-art-crisp"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Footer yang menyatu mulus */}
        <Footer transparent />
      </div>
    </div>
  );
}
