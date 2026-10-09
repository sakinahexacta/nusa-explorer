"use client";

import React, { useState } from "react";
import { MapPin, Compass, RotateCcw, Sparkles, Navigation } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SimulatorSkala() {
  // Pilihan interaktif
  const jpOptions = [1, 2, 3, 4, 5]; // Jarak pada peta dalam cm
  const scaleOptions = [500, 1000, 2000]; // Nilai skala (1 : n)

  // State awal sesuai contoh soal Bab 3: JP = 5 cm, Skala = 1 : 1.000
  const [jp, setJp] = useState<number>(5);
  const [scale, setScale] = useState<number>(1000);

  // Kalkulasi real-time
  const realCm = jp * scale;
  const realMeters = realCm / 100;
  const realKm = realMeters >= 1000 ? (realMeters / 1000).toFixed(2) : null;

  const handleReset = () => {
    setJp(5);
    setScale(1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, type: "spring", stiffness: 140, damping: 16 }}
      className="w-full bg-[#5B2E9D] border border-white/20 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl mb-8 sm:mb-12"
    >
      {/* 1. Header Ringkas Simulator */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-5 border-b border-white/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#7B2CBF] border border-purple-300/40 text-white flex items-center justify-center text-xl sm:text-2xl shadow-md shrink-0">
            🗺️
          </div>
          <div>
            <h3 className="font-poppins text-base sm:text-xl font-bold text-white tracking-tight leading-snug">
              Simulator Denah & Skala Interaktif
            </h3>
            <p className="font-poppins text-xs text-purple-100/90">
              Eksplorasi hubungan Jarak pada Peta (JP), Skala Denah, dan Jarak Sebenarnya (JS) di Desa Nusa Explorer!
            </p>
          </div>
        </div>

        {/* Tombol Reset ke Soal Bab 3 */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          onClick={handleReset}
          className="flex items-center gap-1.5 text-xs text-purple-100 hover:text-white bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-xl border border-white/25 transition-colors cursor-pointer self-stretch sm:self-auto justify-center font-medium select-none"
          title="Kembali ke contoh soal Bab 3 (5 cm, Skala 1 : 1.000)"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset ke Soal Bab 3 (5 cm, 1 : 1.000)</span>
        </motion.button>
      </div>

      {/* 2. Konten Utama: 2 Kolom Responsif (Kiri Denah Interaktif, Kanan Kontrol & Rumus) */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
        {/* ================= SISI KIRI: DENAH INTERAKTIF DESA NUSA EXPLORER (5 Kolom) ================= */}
        <div className="lg:col-span-5 bg-[#2a1758]/95 border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-between shadow-lg relative overflow-hidden">
          {/* Ornamen Lembut Latar Belakang */}
          <div className="absolute -right-8 -top-8 w-28 h-28 bg-purple-400/10 rounded-full blur-2xl pointer-events-none" />

          {/* Bagian Atas: Header Denah & Kompas */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-purple-300" />
                <h4 className="font-bold text-sm sm:text-base text-white">
                  Denah Desa Nusa Explorer
                </h4>
              </div>
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#7B2CBF] text-white border border-purple-300/40">
                Skala 1 : {scale.toLocaleString("id-ID")}
              </span>
            </div>

            {/* Area Kanvas Visual Denah Interaktif */}
            <div className="relative w-full h-52 sm:h-56 bg-[#1b0a38] border border-white/15 rounded-2xl p-4 overflow-hidden flex flex-col justify-between shadow-inner">
              {/* Grid Garis Peta Halus */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Kompas Arah Mata Angin di Pojok Kiri Atas */}
              <div className="absolute top-2.5 left-2.5 z-10 bg-black/40 border border-white/15 rounded-lg px-2 py-1 flex items-center gap-1 text-[10px] text-purple-200">
                <Navigation className="w-3 h-3 text-purple-300 rotate-45" />
                <span>U</span>
              </div>

              {/* Pohon & Bangunan Dekorasi Desa Nusa */}
              <div className="absolute top-3 right-4 text-sm opacity-40 select-none">🌲 🏡 🌲</div>
              <div className="absolute bottom-3 left-4 text-sm opacity-35 select-none">🌳 🌾 🌳</div>

              {/* Visual Titik Lokasi dan Garis Jarak */}
              <div className="relative z-10 w-full my-auto py-4">
                {/* Visual Label Dua Lokasi */}
                <div className="flex items-center justify-between text-xs font-semibold text-purple-100 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl">🏠</span>
                    <div>
                      <div className="text-white font-bold text-xs sm:text-sm">Pos Ronda</div>
                      <div className="text-[10px] text-purple-300">Titik Awal (0 cm)</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-right">
                    <div>
                      <div className="text-white font-bold text-xs sm:text-sm">Balai Desa</div>
                      <div className="text-[10px] text-purple-300">Titik Tujuan ({jp} cm)</div>
                    </div>
                    <span className="text-xl">🏛️</span>
                  </div>
                </div>

                {/* Garis Jarak Terukur (JP) dengan Animasi */}
                <div className="relative w-full h-8 flex items-center">
                  {/* Garis Dasar Relatif */}
                  <div className="w-full h-2 bg-purple-950 rounded-full border border-white/20 overflow-hidden relative">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-400 to-[#7B2CBF] rounded-full"
                      initial={false}
                      animate={{ width: `${(jp / 5) * 100}%` }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    />
                  </div>

                  {/* Marker Pin Bergerak di Atas Garis */}
                  <motion.div
                    className="absolute top-0 -translate-y-2 pointer-events-none"
                    initial={false}
                    animate={{ left: `calc(${(jp / 5) * 100}% - 12px)` }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <div className="flex flex-col items-center">
                      <MapPin className="w-6 h-6 text-white drop-shadow-[0_2px_6px_rgba(123,44,191,0.9)] fill-purple-600" />
                    </div>
                  </motion.div>
                </div>

                {/* Penggaris Virtual cm di Bawah Garis */}
                <div className="flex justify-between items-center text-[10px] text-purple-300/80 font-mono mt-1 px-1">
                  {[0, 1, 2, 3, 4, 5].map((val) => (
                    <span
                      key={val}
                      className={val === jp ? "text-white font-bold underline" : ""}
                    >
                      {val} cm
                    </span>
                  ))}
                </div>

                {/* Badge Melayang Jarak Terukur (JP) */}
                <div className="mt-3 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${jp}-${scale}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="px-3 py-1 rounded-xl bg-purple-900/80 border border-purple-300/40 text-xs text-purple-100 flex items-center gap-1.5 shadow"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                      <span>
                        Jarak Terukur di Peta (JP) = <strong>{jp} cm</strong>
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Display Hasil Real-time (Jarak Nyata JS) */}
          <div className="bg-black/30 rounded-2xl p-4 border border-white/15 mt-4">
            <div className="flex items-center justify-between text-xs text-purple-200 mb-1.5">
              <span>Jarak pada Peta (JP):</span>
              <span className="font-mono font-bold text-white">{jp} cm</span>
            </div>

            <div className="flex items-center justify-between text-xs text-purple-200 mb-2.5 pb-2 border-b border-white/15">
              <span>Perbandingan Skala:</span>
              <span className="font-mono font-bold text-white">
                1 : {scale.toLocaleString("id-ID")}
              </span>
            </div>

            <div className="flex items-baseline justify-between pt-1">
              <span className="text-xs sm:text-sm font-semibold text-white">
                Jarak Sebenarnya (JS):
              </span>
              <div className="text-right">
                <motion.div
                  key={realMeters}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="font-mono text-xl sm:text-2xl md:text-3xl font-black text-white drop-shadow-[0_2px_8px_rgba(123,44,191,0.8)]"
                >
                  {realMeters.toLocaleString("id-ID")} Meter
                </motion.div>
                {realKm && (
                  <span className="text-[11px] text-purple-200 font-mono">
                    ({realKm} Kilometer)
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ================= SISI KANAN: TOMBOL INTERAKTIF & CARA HITUNG (7 Kolom) ================= */}
        <div className="lg:col-span-7 bg-[#3b0764]/70 border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-between shadow-lg">
          <div>
            {/* Bagian 1: Tombol Kapsul Pilihan Skala */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2.5">
                <span className="font-bold text-xs sm:text-sm text-white flex items-center gap-1.5">
                  <span>1. Pilih Skala Denah:</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#7B2CBF] text-white font-mono font-bold text-xs border border-purple-300/40">
                  1 : {scale.toLocaleString("id-ID")}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {scaleOptions.map((s) => {
                  const isSelected = scale === s;
                  return (
                    <motion.button
                      key={s}
                      type="button"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setScale(s)}
                      className={`py-2.5 sm:py-3 px-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer select-none text-center border ${
                        isSelected
                          ? "bg-[#7B2CBF] text-white border-purple-300 shadow-lg shadow-purple-900/50 ring-2 ring-purple-300/40 font-black"
                          : "bg-white/10 hover:bg-white/20 text-purple-100 border-white/20"
                      }`}
                    >
                      <span>1 : {s.toLocaleString("id-ID")}</span>
                      {s === 1000 && (
                        <span className="block text-[9px] sm:text-[10px] font-normal text-purple-200 mt-0.5">
                          (Standar Soal)
                        </span>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Bagian 2: Tombol Kapsul Pilihan Jarak pada Peta (JP) */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2.5">
                <span className="font-bold text-xs sm:text-sm text-white flex items-center gap-1.5">
                  <span>2. Pilih Jarak pada Peta (JP):</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#7B2CBF] text-white font-mono font-bold text-xs border border-purple-300/40">
                  {jp} cm
                </span>
              </div>

              <div className="grid grid-cols-5 gap-2 sm:gap-2.5">
                {jpOptions.map((val) => {
                  const isSelected = jp === val;
                  return (
                    <motion.button
                      key={val}
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setJp(val)}
                      className={`py-2.5 sm:py-3 px-1.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer select-none text-center border ${
                        isSelected
                          ? "bg-[#7B2CBF] text-white border-purple-300 shadow-lg shadow-purple-900/50 ring-2 ring-purple-300/40 font-black"
                          : "bg-white/10 hover:bg-white/20 text-purple-100 border-white/20"
                      }`}
                    >
                      <span>{val} cm</span>
                      {val === 5 && (
                        <span className="block text-[9px] sm:text-[10px] font-normal text-purple-200 mt-0.5">
                          (Soal)
                        </span>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Bagian 3: Langkah Perhitungan Sesuai Rumus Bab 3 */}
            <div className="pt-4 border-t border-white/15">
              <h5 className="font-bold text-xs sm:text-sm text-purple-200 mb-2.5 flex items-center gap-1.5">
                <span>📐 Langkah Hitungan Sesuai Rumus Bab 3:</span>
              </h5>

              <div className="space-y-2.5 text-xs sm:text-[13px] font-poppins">
                {/* Langkah 1: Kalikan JP dengan Skala (Satuan cm) */}
                <div className="bg-white/5 border border-white/15 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div className="text-purple-200">
                    <span className="font-bold text-white">Langkah 1:</span> Kalikan JP × Nilai Skala
                  </div>
                  <div className="font-mono text-purple-100 font-semibold bg-black/30 px-2.5 py-1 rounded-lg">
                    {jp} cm × {scale.toLocaleString("id-ID")} ={" "}
                    <span className="text-white font-bold">
                      {realCm.toLocaleString("id-ID")} cm
                    </span>
                  </div>
                </div>

                {/* Langkah 2: Ubah dari cm ke Meter (Bagi 100) */}
                <div className="bg-white/5 border border-white/15 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div className="text-purple-200">
                    <span className="font-bold text-white">Langkah 2:</span> Konversi ke Meter (dibagi 100)
                  </div>
                  <div className="font-mono text-purple-100 font-semibold bg-black/30 px-2.5 py-1 rounded-lg">
                    {realCm.toLocaleString("id-ID")} ÷ 100 ={" "}
                    <span className="text-white font-extrabold">
                      {realMeters.toLocaleString("id-ID")} Meter
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kotak Kesimpulan Edukatif (Tema Ungu Nusa Explorer) */}
          <div className="mt-4 bg-purple-900/40 border border-purple-400/30 rounded-xl p-3 text-xs text-purple-100 flex items-center gap-2">
            <span className="text-base shrink-0">💡</span>
            <span>
              <strong>Paham Konsep:</strong> Skala <strong>1 : {scale.toLocaleString("id-ID")}</strong> berarti setiap <strong>1 cm</strong> di atas denah kertas sama dengan <strong>{scale / 100} meter</strong> jarak sebenarnya di lapangan!
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
