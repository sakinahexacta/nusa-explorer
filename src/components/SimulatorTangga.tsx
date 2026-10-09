"use client";

import React, { useState } from "react";
import { Ruler, RotateCcw, Sparkles, ArrowDown, ArrowUp, ArrowRightLeft, Minus, Plus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const UNITS = [
  { unit: "km", label: "Kilometer" },
  { unit: "hm", label: "Hektometer" },
  { unit: "dam", label: "Dekameter" },
  { unit: "m", label: "Meter" },
  { unit: "dm", label: "Desimeter" },
  { unit: "cm", label: "Centimeter" },
  { unit: "mm", label: "Milimeter" },
] as const;

export type UnitType = (typeof UNITS)[number]["unit"];

export default function SimulatorTangga() {
  // Input angka nilai awal: dibatasi 1 sampai 10 (default 3 sesuai soal Bab 4)
  const [inputValue, setInputValue] = useState<number>(3);

  // Satuan asal (Dari) dan satuan tujuan (Ke)
  const [fromUnit, setFromUnit] = useState<UnitType>("m");
  const [toUnit, setToUnit] = useState<UnitType>("cm");

  const fromIndex = UNITS.findIndex((u) => u.unit === fromUnit);
  const toIndex = UNITS.findIndex((u) => u.unit === toUnit);
  const diff = toIndex - fromIndex; // > 0: Turun (dikali), < 0: Naik (dibagi), === 0: Sama
  const steps = Math.abs(diff);

  // Perhitungan faktor konversi (10^steps)
  const factor = Math.pow(10, steps);

  // Hasil perhitungan konversi
  let resultValue: number;
  let formattedResult: string;

  if (diff > 0) {
    // Turun tangga -> dikali
    resultValue = inputValue * factor;
    formattedResult = resultValue.toLocaleString("id-ID");
  } else if (diff < 0) {
    // Naik tangga -> dibagi
    resultValue = inputValue / factor;
    // Format desimal rapi (maksimal digit desimal sesuai jumlah langkah tangga)
    formattedResult = resultValue.toLocaleString("id-ID", {
      maximumFractionDigits: Math.max(steps, 4),
    });
  } else {
    // Sama
    resultValue = inputValue;
    formattedResult = resultValue.toLocaleString("id-ID");
  }

  // Handler ubah nilai angka (1 - 10)
  const handleValueChange = (val: number) => {
    const clamped = Math.max(1, Math.min(10, val));
    setInputValue(clamped);
  };

  // Tukar satuan asal dan tujuan
  const handleSwapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  // Reset ke kondisi contoh soal Bab 4 (3 m ke cm)
  const handleReset = () => {
    setInputValue(3);
    setFromUnit("m");
    setToUnit("cm");
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
            🪜
          </div>
          <div>
            <h3 className="font-poppins text-base sm:text-xl font-bold text-white tracking-tight leading-snug">
              Simulator Tangga Konversi Satuan Panjang
            </h3>
            <p className="font-poppins text-xs text-purple-100/90">
              Eksplorasi bebas konversi antar-satuan panjang dari mana saja ke mana saja dengan tangga interaktif!
            </p>
          </div>
        </div>

        {/* Tombol Reset ke Soal Bab 4 */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          onClick={handleReset}
          className="flex items-center gap-1.5 text-xs text-purple-100 hover:text-white bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-xl border border-white/25 transition-colors cursor-pointer self-stretch sm:self-auto justify-center font-medium select-none"
          title="Kembali ke contoh soal Bab 4 (3 m diubah ke cm)"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset ke Soal Bab 4 (3 m → cm)</span>
        </motion.button>
      </div>

      {/* 2. Konten Utama: 2 Kolom Responsif (Kiri Tangga Satuan, Kanan Selektor & Hasil) */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
        {/* ================= SISI KIRI: VISUALISASI TANGGA INTERAKTIF (5 Kolom) ================= */}
        <div className="lg:col-span-5 bg-[#2a1758]/95 border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-between shadow-lg relative overflow-hidden">
          {/* Ornamen Lembut Latar Belakang */}
          <div className="absolute -right-8 -top-8 w-28 h-28 bg-purple-400/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            {/* Header Tangga Satuan */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-purple-300" />
                <h4 className="font-bold text-sm sm:text-base text-white">
                  Tangga Satuan Panjang
                </h4>
              </div>

              {/* Badge Arah Tangga */}
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#7B2CBF] text-white border border-purple-300/40 flex items-center gap-1">
                {diff > 0 ? (
                  <>
                    <ArrowDown className="w-3 h-3 text-purple-200" />
                    <span>Turun {steps} (×{factor.toLocaleString("id-ID")})</span>
                  </>
                ) : diff < 0 ? (
                  <>
                    <ArrowUp className="w-3 h-3 text-purple-200" />
                    <span>Naik {steps} (÷{factor.toLocaleString("id-ID")})</span>
                  </>
                ) : (
                  <span>Satuan Sama</span>
                )}
              </span>
            </div>

            {/* Area Visual Tangga Satuan (7 Tingkat Berundak) */}
            <div className="bg-[#1b0a38] border border-white/15 rounded-2xl p-3 sm:p-4 my-2">
              <div className="flex flex-col gap-1.5 sm:gap-2">
                {UNITS.map((step, idx) => {
                  const isSource = step.unit === fromUnit;
                  const isTarget = step.unit === toUnit;
                  const isSameBoth = isSource && isTarget;

                  // Cek apakah posisi berada di antara Asal dan Tujuan
                  const minIdx = Math.min(fromIndex, toIndex);
                  const maxIdx = Math.max(fromIndex, toIndex);
                  const isInPath = idx > minIdx && idx < maxIdx;

                  return (
                    <div
                      key={step.unit}
                      className="flex items-center justify-between transition-all"
                      style={{ paddingLeft: `${idx * 10}px` }}
                    >
                      {/* Kotak Anak Tangga */}
                      <motion.div
                        animate={{
                          scale: isSource || isTarget ? 1.03 : 1,
                        }}
                        className={`flex-1 flex items-center justify-between px-3 py-1.5 sm:py-2 rounded-xl border text-xs sm:text-sm font-bold transition-all shadow-sm ${
                          isSameBoth
                            ? "bg-[#7B2CBF] text-white border-purple-200 shadow-purple-900/60 ring-2 ring-purple-200/50"
                            : isSource
                            ? "bg-[#7B2CBF] text-white border-purple-300 shadow-purple-900/60 ring-2 ring-purple-300/50"
                            : isTarget
                            ? "bg-[#9333ea] text-white border-purple-200 shadow-purple-900/60 ring-2 ring-purple-200/50"
                            : isInPath
                            ? "bg-purple-900/50 text-purple-200 border-purple-400/30"
                            : "bg-white/5 text-purple-300/80 border-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs sm:text-sm tracking-wide">
                            {step.unit}
                          </span>
                          <span className="text-[10px] sm:text-xs font-normal opacity-80 hidden xs:inline">
                            ({step.label})
                          </span>
                        </div>

                        {/* Label Status Titik Asal / Target */}
                        {isSameBoth ? (
                          <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-purple-950 shadow-sm">
                            Asal & Tujuan ({inputValue} {fromUnit})
                          </span>
                        ) : isSource ? (
                          <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-purple-950 shadow-sm">
                            Asal ({inputValue} {fromUnit})
                          </span>
                        ) : isTarget ? (
                          <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-purple-950 shadow-sm">
                            Tujuan ({toUnit})
                          </span>
                        ) : isInPath ? (
                          <span className="text-[9px] font-mono text-purple-300 flex items-center gap-0.5">
                            {diff > 0 ? (
                              <>
                                <ArrowDown className="w-2.5 h-2.5 text-purple-300" />
                                <span>×10</span>
                              </>
                            ) : (
                              <>
                                <ArrowUp className="w-2.5 h-2.5 text-purple-300" />
                                <span>÷10</span>
                              </>
                            )}
                          </span>
                        ) : null}
                      </motion.div>
                    </div>
                  );
                })}
              </div>

              {/* Panduan Aturan Tangga */}
              <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-purple-200 px-1 gap-1">
                <span className="flex items-center gap-1">
                  <ArrowDown className="w-3 h-3 text-purple-300" />
                  <span>Turun 1 tangga = <strong>dikali 10</strong></span>
                </span>
                <span className="flex items-center gap-1">
                  <ArrowUp className="w-3 h-3 text-purple-300" />
                  <span>Naik 1 tangga = <strong>dibagi 10</strong></span>
                </span>
              </div>
            </div>
          </div>

          {/* Display Hasil Konversi Cepat */}
          <div className="bg-black/30 rounded-2xl p-4 border border-white/15 mt-3">
            <div className="flex items-center justify-between text-xs text-purple-200 mb-1.5">
              <span>Nilai Awal (Asal):</span>
              <span className="font-mono font-bold text-white">
                {inputValue} {fromUnit}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs text-purple-200 mb-2.5 pb-2 border-b border-white/15">
              <span>Operasi Tangga ({steps} Langkah):</span>
              <span className="font-mono font-bold text-white">
                {diff > 0
                  ? `× ${factor.toLocaleString("id-ID")}`
                  : diff < 0
                  ? `÷ ${factor.toLocaleString("id-ID")}`
                  : "Tetap (x 1)"}
              </span>
            </div>

            <div className="flex items-baseline justify-between pt-1">
              <span className="text-xs sm:text-sm font-semibold text-white">
                Hasil Konversi:
              </span>
              <div className="text-right">
                <motion.div
                  key={`${inputValue}-${fromUnit}-${toUnit}`}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="font-mono text-xl sm:text-2xl md:text-3xl font-black text-white drop-shadow-[0_2px_8px_rgba(123,44,191,0.8)]"
                >
                  {formattedResult} {toUnit}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SISI KANAN: KONTROL INPUT ANGKA & SELEKTOR DARI-KEMANA (7 Kolom) ================= */}
        <div className="lg:col-span-7 bg-[#3b0764]/70 border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-between shadow-lg">
          <div>
            {/* Bagian 1: Input Nilai Angka (Kontrol Bertahap / Stepper 1 - 10) */}
            <div className="mb-5 bg-white/5 border border-white/15 rounded-2xl p-3.5 sm:p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="font-bold text-xs sm:text-sm text-white flex items-center gap-1.5">
                    <span>1. Masukkan Nilai Angka (1 - 10):</span>
                  </span>
                  <p className="text-[11px] text-purple-200 mt-0.5">
                    Gunakan tombol minus (-) dan plus (+) untuk mengatur nilai
                  </p>
                </div>

                {/* Kontrol Stepper Simetris & Responsif */}
                <div className="flex items-center justify-center sm:justify-end gap-2 bg-black/30 border border-white/20 rounded-xl p-1.5 self-center sm:self-auto shadow-inner">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleValueChange(inputValue - 1)}
                    disabled={inputValue <= 1}
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 flex items-center justify-center text-white border border-white/20 cursor-pointer disabled:cursor-not-allowed transition-all shadow-sm"
                    title="Kurangi 1"
                  >
                    <Minus className="w-4 h-4" />
                  </motion.button>

                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={inputValue}
                    onChange={(e) => handleValueChange(Number(e.target.value) || 1)}
                    className="w-14 text-center font-mono font-black text-lg bg-black/40 border border-purple-300/40 rounded-lg py-1 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 select-all"
                  />

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleValueChange(inputValue + 1)}
                    disabled={inputValue >= 10}
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 flex items-center justify-center text-white border border-white/20 cursor-pointer disabled:cursor-not-allowed transition-all shadow-sm"
                    title="Tambah 1"
                  >
                    <Plus className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Bagian 2: Satuan Asal (Dari) */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-xs sm:text-sm text-white flex items-center gap-1.5">
                  <span>2. Satuan Asal (Dari):</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#7B2CBF] text-white font-mono font-bold text-xs border border-purple-300/40">
                  {fromUnit}
                </span>
              </div>

              <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
                {UNITS.map((u) => {
                  const isSelected = fromUnit === u.unit;
                  return (
                    <motion.button
                      key={`from-${u.unit}`}
                      type="button"
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.94 }}
                      onClick={() => setFromUnit(u.unit)}
                      className={`py-2 px-1 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer select-none text-center border ${
                        isSelected
                          ? "bg-[#7B2CBF] text-white border-purple-300 shadow-md shadow-purple-900/50 ring-2 ring-purple-300/40 font-black"
                          : "bg-white/10 hover:bg-white/20 text-purple-100 border-white/20"
                      }`}
                      title={u.label}
                    >
                      <span>{u.unit}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Tombol Swap Cepat (Tukar Asal ⇄ Tujuan) */}
            <div className="flex items-center justify-center my-2">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSwapUnits}
                className="flex items-center gap-1.5 text-xs text-purple-200 hover:text-white bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-full border border-white/20 cursor-pointer transition-colors shadow-sm"
                title="Tukar Satuan Asal dan Tujuan"
              >
                <ArrowRightLeft className="w-3.5 h-3.5 text-purple-300" />
                <span>Tukar Satuan ({fromUnit} ⇄ {toUnit})</span>
              </motion.button>
            </div>

            {/* Bagian 3: Satuan Tujuan (Ke) */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-xs sm:text-sm text-white flex items-center gap-1.5">
                  <span>3. Satuan Tujuan (Ke):</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#9333ea] text-white font-mono font-bold text-xs border border-purple-200/40">
                  {toUnit}
                </span>
              </div>

              <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
                {UNITS.map((u) => {
                  const isSelected = toUnit === u.unit;
                  return (
                    <motion.button
                      key={`to-${u.unit}`}
                      type="button"
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.94 }}
                      onClick={() => setToUnit(u.unit)}
                      className={`py-2 px-1 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer select-none text-center border ${
                        isSelected
                          ? "bg-[#9333ea] text-white border-purple-200 shadow-md shadow-purple-900/50 ring-2 ring-purple-200/40 font-black"
                          : "bg-white/10 hover:bg-white/20 text-purple-100 border-white/20"
                      }`}
                      title={u.label}
                    >
                      <span>{u.unit}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Bagian 4: Rincian Langkah Perhitungan Dinamis */}
            <div className="pt-4 border-t border-white/15">
              <h5 className="font-bold text-xs sm:text-sm text-purple-200 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                <span>Langkah Perhitungan Dinamis:</span>
              </h5>

              <div className="space-y-2 text-xs sm:text-[13px] font-poppins">
                {/* Langkah 1: Arah & Langkah Tangga */}
                <div className="bg-white/5 border border-white/15 rounded-xl p-2.5 sm:p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div className="text-purple-200">
                    <span className="font-bold text-white">Langkah 1:</span> Hitung arah tangga dari {fromUnit} ke {toUnit}
                  </div>
                  <div className="font-mono text-purple-100 font-semibold bg-black/30 px-2.5 py-1 rounded-lg">
                    {diff > 0
                      ? `Turun ${steps} anak tangga (× 10^${steps} = × ${factor.toLocaleString("id-ID")})`
                      : diff < 0
                      ? `Naik ${steps} anak tangga (÷ 10^${steps} = ÷ ${factor.toLocaleString("id-ID")})`
                      : "Satuan sama, tidak berpindah tangga"}
                  </div>
                </div>

                {/* Langkah 2: Operasi Nilai Konversi */}
                <div className="bg-white/5 border border-white/15 rounded-xl p-2.5 sm:p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div className="text-purple-200">
                    <span className="font-bold text-white">Langkah 2:</span> Operasikan nilai angka
                  </div>
                  <div className="font-mono text-purple-100 font-semibold bg-black/30 px-2.5 py-1 rounded-lg">
                    {diff > 0 ? (
                      <>
                        {inputValue} × {factor.toLocaleString("id-ID")} ={" "}
                        <span className="text-white font-extrabold">
                          {formattedResult} {toUnit}
                        </span>
                      </>
                    ) : diff < 0 ? (
                      <>
                        {inputValue} ÷ {factor.toLocaleString("id-ID")} ={" "}
                        <span className="text-white font-extrabold">
                          {formattedResult} {toUnit}
                        </span>
                      </>
                    ) : (
                      <>
                        {inputValue} {fromUnit} ={" "}
                        <span className="text-white font-extrabold">
                          {formattedResult} {toUnit}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kotak Kesimpulan Edukatif (Tema Ungu Nusa Explorer) */}
          <div className="mt-4 bg-purple-900/40 border border-purple-400/30 rounded-xl p-3 text-xs text-purple-100 flex items-center gap-2">
            <span className="text-base shrink-0">💡</span>
            <span>
              <strong>Paham Konsep:</strong> Mengubah dari <strong>{fromUnit}</strong> ke <strong>{toUnit}</strong>{" "}
              {diff > 0 ? (
                <>berarti turun <strong>{steps} tangga</strong>, sehingga nilai dikalikan dengan <strong>{factor.toLocaleString("id-ID")}</strong>!</>
              ) : diff < 0 ? (
                <>berarti naik <strong>{steps} tangga</strong>, sehingga nilai dibagi dengan <strong>{factor.toLocaleString("id-ID")}</strong>!</>
              ) : (
                <>adalah satuan yang sama, nilainya tetap sama!</>
              )}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
