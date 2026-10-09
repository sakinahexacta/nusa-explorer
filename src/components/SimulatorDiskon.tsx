"use client";

import React, { useState } from "react";
import { Tag, Sparkles, RotateCcw, Percent } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SimulatorDiskon() {
  // Hanya 1 barang utama: Sekeranjang Apel Segar seharga Rp50.000 (sesuai contoh soal Bab 2)
  const originalPrice = 50000;
  const [discountPercent, setDiscountPercent] = useState<number>(10);

  // Pilihan persen: kelipatan 10% dari 10% sampai 80%
  const discountOptions = [10, 20, 30, 40, 50, 60, 70, 80];

  // Kalkulasi Diskon Real-time
  const discountAmount = Math.round((originalPrice * discountPercent) / 100);
  const finalPrice = originalPrice - discountAmount;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleReset = () => {
    setDiscountPercent(10);
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
            🏷️
          </div>
          <div>
            <h3 className="font-poppins text-base sm:text-xl font-bold text-white tracking-tight leading-snug">
              Simulator Diskon Belanja Interaktif
            </h3>
            <p className="font-poppins text-xs text-purple-100/90">
              Pilih persentase diskon untuk melihat perhitungan potongan harga pada sekeranjang apel segar!
            </p>
          </div>
        </div>

        {/* Tombol Reset ke Soal Bab 2 (10%) */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          onClick={handleReset}
          className="flex items-center gap-1.5 text-xs text-purple-100 hover:text-white bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-xl border border-white/25 transition-colors cursor-pointer self-stretch sm:self-auto justify-center font-medium select-none"
          title="Kembali ke contoh soal Bab 2 (Apel Rp50.000 Diskon 10%)"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset ke Soal Bab 2 (10%)</span>
        </motion.button>
      </div>

      {/* 2. Konten Utama: 2 Kolom Responsif (Kiri Kartu Barang & Tag, Kanan Tombol Persen & Rumus) */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
        {/* ================= SISI KIRI: 1 BARANG UTAMA & TAG DISKON UNGU (5 Kolom) ================= */}
        <div className="lg:col-span-5 bg-[#3B1778]/90 border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-between shadow-lg relative overflow-hidden">
          {/* Ornamen Lembut Latar Belakang */}
          <div className="absolute -right-8 -top-8 w-28 h-28 bg-purple-400/10 rounded-full blur-2xl pointer-events-none" />

          {/* Bagian Atas: Detail Sekeranjang Apel Segar & Tag Diskon */}
          <div>
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl shadow-inner shrink-0">
                  🍎
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg text-white leading-tight">
                    Sekeranjang Apel Segar
                  </h4>
                  <p className="text-[11px] sm:text-xs text-purple-200 mt-0.5">
                    Contoh Soal Bab 2: Harga Asli Rp50.000
                  </p>
                </div>
              </div>

              {/* Tag Diskon Ungu Terang Dinamis */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={discountPercent}
                  initial={{ scale: 0.8, rotate: -6, opacity: 0 }}
                  animate={{ scale: 1, rotate: -4, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  className="px-3 py-1.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg flex items-center gap-1.5 shrink-0 bg-[#7B2CBF] text-white border border-purple-300 shadow-purple-950/40 select-none"
                >
                  <Tag className="w-3.5 h-3.5 fill-current" />
                  <span>-{discountPercent}%</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Display Kalkulasi Harga (Asli, Potongan, & Wajib Bayar) */}
            <div className="bg-black/30 rounded-2xl p-4 border border-white/15 my-4">
              <div className="flex items-center justify-between text-xs text-purple-200 mb-1.5">
                <span>Harga Asli Toko:</span>
                <span className="font-mono line-through text-purple-300/80 font-semibold">
                  {formatRupiah(originalPrice)}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-purple-200 font-semibold mb-2.5 pb-2.5 border-b border-white/15">
                <span className="flex items-center gap-1 text-purple-200">
                  <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                  <span>Potongan Hemat ({discountPercent}%):</span>
                </span>
                <span className="font-mono font-bold text-purple-200">
                  - {formatRupiah(discountAmount)}
                </span>
              </div>

              <div className="flex items-baseline justify-between pt-1">
                <span className="text-xs sm:text-sm font-semibold text-white">
                  Harga Wajib Bayar:
                </span>
                <div className="text-right">
                  <motion.div
                    key={finalPrice}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="font-mono text-xl sm:text-2xl md:text-3xl font-black text-white drop-shadow-[0_2px_8px_rgba(123,44,191,0.8)]"
                  >
                    {formatRupiah(finalPrice)}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Bar Proporsi Pembayaran */}
          <div className="mt-2">
            <div className="flex justify-between text-[11px] font-semibold text-purple-200 mb-1.5">
              <span>Proporsi Pembayaran:</span>
              <span>{100 - discountPercent}% Bayar | {discountPercent}% Hemat</span>
            </div>
            <div className="w-full h-3.5 bg-black/40 rounded-full overflow-hidden flex border border-white/20 p-0.5">
              <div
                className="h-full bg-purple-400 rounded-full transition-all duration-300"
                style={{ width: `${100 - discountPercent}%` }}
                title={`Harus Dibayar: ${100 - discountPercent}%`}
              />
              <div
                className="h-full bg-purple-700 rounded-full transition-all duration-300"
                style={{ width: `${discountPercent}%` }}
                title={`Potongan Hemat: ${discountPercent}%`}
              />
            </div>
          </div>
        </div>

        {/* ================= SISI KANAN: TOMBOL KAPSUL PERSEN (10%-80%) & RUMUS (7 Kolom) ================= */}
        <div className="lg:col-span-7 bg-[#3b0764]/70 border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-between shadow-lg">
          <div>
            {/* Header Tombol Pilihan Persen */}
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                <Percent className="w-4 h-4 text-purple-300" />
                <span>Pilih Persentase Diskon:</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-[#7B2CBF] text-white font-mono font-extrabold text-sm sm:text-base border border-purple-300/40 shadow-sm">
                {discountPercent}%
              </span>
            </div>

            {/* Tombol Kapsul Persen (10% sampai 80%) */}
            <div className="grid grid-cols-4 gap-2 sm:gap-2.5 my-3">
              {discountOptions.map((pct) => {
                const isSelected = discountPercent === pct;
                return (
                  <motion.button
                    key={pct}
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setDiscountPercent(pct)}
                    className={`py-2.5 sm:py-3 px-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer select-none text-center border ${
                      isSelected
                        ? "bg-[#7B2CBF] text-white border-purple-300 shadow-lg shadow-purple-900/50 ring-2 ring-purple-300/40 font-black"
                        : "bg-white/10 hover:bg-white/20 text-purple-100 border-white/20"
                    }`}
                  >
                    <span>{pct}%</span>
                    {pct === 10 && (
                      <span className="block text-[9px] sm:text-[10px] font-normal text-purple-200 mt-0.5">
                        (Soal)
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* 3. Langkah Perhitungan Interaktif Sesuai Rumus Bab 2 */}
            <div className="mt-5 pt-4 border-t border-white/15">
              <h5 className="font-bold text-xs sm:text-sm text-purple-200 mb-2.5 flex items-center gap-1.5">
                <span>📐 Cara Menghitung Sesuai Rumus Bab 2:</span>
              </h5>

              <div className="space-y-2.5 text-xs sm:text-[13px] font-poppins">
                {/* Langkah 1: Hitung Potongan */}
                <div className="bg-white/5 border border-white/15 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div className="text-purple-200">
                    <span className="font-bold text-white">Langkah 1:</span> Hitung besar potongan harga
                  </div>
                  <div className="font-mono text-purple-100 font-semibold bg-black/30 px-2.5 py-1 rounded-lg">
                    {discountPercent}% × {formatRupiah(originalPrice)} = <span className="text-white font-bold">{formatRupiah(discountAmount)}</span>
                  </div>
                </div>

                {/* Langkah 2: Hitung Harga Wajib Bayar */}
                <div className="bg-white/5 border border-white/15 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div className="text-purple-200">
                    <span className="font-bold text-white">Langkah 2:</span> Harga asli dikurangi potongan
                  </div>
                  <div className="font-mono text-purple-100 font-semibold bg-black/30 px-2.5 py-1 rounded-lg">
                    {formatRupiah(originalPrice)} - {formatRupiah(discountAmount)} = <span className="text-white font-extrabold">{formatRupiah(finalPrice)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kotak Kesimpulan Edukatif (Tema Ungu Nusa Explorer) */}
          <div className="mt-4 bg-purple-900/40 border border-purple-400/30 rounded-xl p-3 text-xs text-purple-100 flex items-center gap-2">
            <span className="text-base shrink-0">💡</span>
            <span>
              <strong>Paham Konsep:</strong> Diskon <strong>{discountPercent}%</strong> artinya kamu mendapatkan potongan sebesar <strong>{discountPercent}/100</strong> bagian dari harga sekeranjang apel!
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
