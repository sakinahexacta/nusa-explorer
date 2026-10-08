"use client";

import React, { useState } from "react";
import { Plus, Minus, RotateCcw, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Utility functions for fraction calculations (KPK & FPB)
 */
function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
}

interface PizzaGraphicProps {
  numerator: number;
  denominator: number;
  size?: number;
  interactive?: boolean;
  onSliceClick?: (index: number) => void;
  label?: string;
  theme?: "violet" | "purpleLight" | "purpleResult";
}

/**
 * SVG Pizza Slices Generator
 * Clean, aesthetic purple theme matching the medium purple container & darker sub-cards
 */
export function PizzaGraphic({
  numerator,
  denominator,
  size = 170,
  interactive = false,
  onSliceClick,
  label,
  theme = "violet",
}: PizzaGraphicProps) {
  const cx = 100;
  const cy = 100;
  const r = 82;
  const crustThickness = 10;
  const safeDenom = Math.max(1, Math.min(denominator, 24));
  const safeNum = Math.max(0, Math.min(numerator, safeDenom));

  // Angles helper
  const getCoordinatesForPercent = (percent: number, radius: number) => {
    const angle = percent * 2 * Math.PI - Math.PI / 2;
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  };

  // Cohesive bright violet / purple themes on dark purple plate
  const colorMap = {
    violet: {
      activeCheese: "#c084fc", // bright purple/violet
      activeCrust: "#e9d5ff",
      sauce: "#7e22ce",
      topping: "#ffffff",
      glow: "rgba(192, 132, 252, 0.45)",
    },
    purpleLight: {
      activeCheese: "#a855f7", // vibrant violet
      activeCrust: "#d8b4fe",
      sauce: "#6b21a8",
      topping: "#ffffff",
      glow: "rgba(168, 85, 247, 0.45)",
    },
    purpleResult: {
      activeCheese: "#d8b4fe", // glowing lavender highlight
      activeCrust: "#f3e8ff",
      sauce: "#9333ea",
      topping: "#7e22ce",
      glow: "rgba(216, 180, 254, 0.5)",
    },
  }[theme];

  // Render individual slice
  const renderSlice = (index: number) => {
    const isActive = index < safeNum;
    const startPercent = index / safeDenom;
    const endPercent = (index + 1) / safeDenom;

    const start = getCoordinatesForPercent(startPercent, r);
    const end = getCoordinatesForPercent(endPercent, r);
    const largeArc = endPercent - startPercent > 0.5 ? 1 : 0;
    const pathD = `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y} Z`;

    const midPercent = (startPercent + endPercent) / 2;
    const toppingPos = getCoordinatesForPercent(midPercent, r * 0.62);

    return (
      <g
        key={`slice-${index}`}
        onClick={() => interactive && onSliceClick && onSliceClick(index)}
        className={`${interactive ? "cursor-pointer group" : "pointer-events-none"}`}
      >
        {/* Slice Base */}
        <path
          d={pathD}
          fill={isActive ? colorMap.activeCheese : "#1f0538"}
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="1.5"
          className="transition-all duration-200 group-hover:brightness-110"
        />

        {/* Outer Crust Arc */}
        {isActive && (
          <path
            d={`M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`}
            fill="none"
            stroke={colorMap.activeCrust}
            strokeWidth={crustThickness}
            strokeLinecap="round"
          />
        )}

        {/* Decorative Topping dots for active slices */}
        {isActive && safeDenom <= 12 && (
          <>
            <circle
              cx={toppingPos.x}
              cy={toppingPos.y}
              r={safeDenom <= 6 ? 7 : 4.5}
              fill={colorMap.topping}
              opacity="0.85"
            />
            <circle
              cx={toppingPos.x - 1.5}
              cy={toppingPos.y - 1.5}
              r={safeDenom <= 6 ? 2.5 : 1.5}
              fill="#FFFFFF"
              opacity="0.95"
            />
          </>
        )}

        {/* Inactive Slice Guideline Dashed Marker */}
        {!isActive && (
          <path
            d={`M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`}
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        )}
      </g>
    );
  };

  return (
    <div className="flex flex-col items-center select-none">
      <div
        className="relative flex items-center justify-center p-1 rounded-full transition-transform duration-200"
        style={{
          width: size,
          height: size,
          filter: `drop-shadow(0 6px 16px ${colorMap.glow})`,
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full filter drop-shadow-md">
          {/* Pizza Pan Plate (solid dark purple plate with soft border) */}
          <circle cx={cx} cy={cy} r={r + 6} fill="#240742" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
          <circle cx={cx} cy={cy} r={r + 2} fill="#2d0a52" />

          {/* Slices */}
          {safeDenom === 1 ? (
            safeNum === 1 ? (
              <circle
                cx={cx}
                cy={cy}
                r={r}
                fill={colorMap.activeCheese}
                stroke={colorMap.activeCrust}
                strokeWidth={crustThickness}
                onClick={() => interactive && onSliceClick && onSliceClick(0)}
                className={interactive ? "cursor-pointer" : ""}
              />
            ) : (
              <circle
                cx={cx}
                cy={cy}
                r={r}
                fill="#1f0538"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                onClick={() => interactive && onSliceClick && onSliceClick(0)}
                className={interactive ? "cursor-pointer" : ""}
              />
            )
          ) : (
            Array.from({ length: safeDenom }, (_, idx) => renderSlice(idx))
          )}

          {/* Center Pin */}
          <circle cx={cx} cy={cy} r="5" fill="#240742" stroke="#d8b4fe" strokeWidth="2" />
        </svg>

        {/* Small Touch/Click Hint */}
        {interactive && (
          <span className="absolute -bottom-1 text-[9px] sm:text-[10px] font-poppins font-medium px-2 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/25">
            Klik potongan
          </span>
        )}
      </div>

      {label && (
        <span className="mt-2 text-xs sm:text-sm font-poppins font-bold text-white text-center">
          {label}
        </span>
      )}
    </div>
  );
}

/**
 * Consolidated Pizza Simulator with Medium Solid Purple Theme (bg-[#5B2E9D])
 * and Darker Sub-Containers (bg-[#3b0764]/70)
 */
export default function AnalogiPizza() {
  // Operator: + (Penjumlahan) atau - (Pengurangan)
  const [operator, setOperator] = useState<"+" | "-">("+");

  // State for Pizza A (Kiri)
  const [numA, setNumA] = useState<number>(1);
  const [denA, setDenA] = useState<number>(2);

  // State for Pizza B (Kanan - Opsional)
  const [hasPizzaB, setHasPizzaB] = useState<boolean>(true);
  const [numB, setNumB] = useState<number>(3);
  const [denB, setDenB] = useState<number>(4);

  const denominatorPresets = [2, 3, 4, 6, 8, 12];

  // Pizza A Single Calculations
  const gcdA = gcd(numA, denA);
  const simplifiedNumA = numA / gcdA;
  const simplifiedDenA = denA / gcdA;

  // Math Calculations for combined operation (A + B or A - B)
  const commonDen = lcm(denA, denB);
  const multiplierA = commonDen / denA;
  const multiplierB = commonDen / denB;
  const scaledNumA = numA * multiplierA;
  const scaledNumB = numB * multiplierB;

  // Total / Difference result
  const resultNum = operator === "+" ? scaledNumA + scaledNumB : scaledNumA - scaledNumB;
  const isNegative = resultNum < 0;
  const absResultNum = Math.abs(resultNum);

  // Mixed number result
  const wholePizzas = Math.floor(resultNum / commonDen);
  const remainderSlices = resultNum % commonDen;

  // Simplified fraction of result
  const resultGCD = gcd(absResultNum, commonDen);
  const simplifiedResultNum = absResultNum / resultGCD;
  const simplifiedResultDen = commonDen / resultGCD;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, type: "spring", stiffness: 120 }}
      className="w-full bg-[#5B2E9D] border border-white/20 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl mb-8 sm:mb-12"
    >
      {/* 1. Header Ringkas di Dalam Kontainer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-5 border-b border-white/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/15 border border-white/25 text-white flex items-center justify-center text-xl sm:text-2xl shadow-md shrink-0">
            🍕
          </div>
          <div>
            <h3 className="font-poppins text-base sm:text-xl font-bold text-white tracking-tight leading-snug">
              Simulator Potongan Pizza Interaktif
            </h3>
            <p className="font-poppins text-xs text-purple-100/90">
              Eksplorasi visual konsep pecahan senilai, penjumlahan, dan pengurangan
            </p>
          </div>
        </div>

        {/* Quick Reset Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          onClick={() => {
            setNumA(1);
            setDenA(2);
            setNumB(3);
            setDenB(4);
            setOperator("+");
            setHasPizzaB(true);
          }}
          className="flex items-center gap-1.5 text-xs text-purple-100 hover:text-white bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-xl border border-white/25 transition-colors cursor-pointer self-stretch sm:self-auto justify-center"
          title="Reset ke contoh soal Bab 1 (1/2 + 3/4)"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset ke Contoh Soal (1/2 + 3/4)</span>
        </motion.button>
      </div>

      {/* ========================================================================= */}
      {/* 2. DUA PIZZA SEJAJAR DENGAN OPERATOR INTERAKTIF DI TENGAH */}
      {/* ========================================================================= */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-11 gap-4 lg:gap-6 items-center">
        {/* ==================== PIZZA A (KIRI) ==================== */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.1, type: "spring", stiffness: 140 }}
          className="md:col-span-5 bg-[#3b0764]/70 border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col items-center justify-between shadow-lg"
        >
          <div className="w-full flex items-center justify-between pb-3 border-b border-white/15">
            <span className="font-poppins font-bold text-sm text-white uppercase tracking-wide flex items-center gap-1.5">
              <span>🍕 Pizza A</span>
            </span>
            <span className="bg-white/15 text-purple-100 font-mono font-bold text-sm px-2.5 py-0.5 rounded-full border border-white/25">
              {numA} / {denA}
            </span>
          </div>

          {/* Pizza Graphic A (Violet Glowing Theme) */}
          <div className="my-3">
            <PizzaGraphic
              numerator={numA}
              denominator={denA}
              size={165}
              interactive={true}
              onSliceClick={(idx) => {
                setNumA(idx < numA ? idx : idx + 1);
              }}
              label={`${numA} dari ${denA} Potong`}
              theme="violet"
            />
          </div>

          {/* Controls Pizza A */}
          <div className="w-full flex flex-col space-y-3 pt-3 border-t border-white/15">
            {/* Pembilang */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-poppins text-purple-100 block">Potongan Diambil:</span>
                <span className="text-[11px] text-purple-200/80">Pembilang</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.88 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  onClick={() => setNumA(Math.max(0, numA - 1))}
                  disabled={numA <= 0}
                  className="w-7 h-7 rounded-lg bg-white/15 hover:bg-white/25 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center font-bold text-white transition-colors cursor-pointer border border-white/15"
                  title="Kurangi potongan A"
                >
                  <Minus className="w-3.5 h-3.5" />
                </motion.button>
                <span className="font-mono font-bold text-base w-6 text-center text-white">
                  {numA}
                </span>
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.88 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  onClick={() => setNumA(Math.min(denA, numA + 1))}
                  disabled={numA >= denA}
                  className="w-7 h-7 rounded-lg bg-white/15 hover:bg-white/25 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center font-bold text-white transition-colors cursor-pointer border border-white/15"
                  title="Tambah potongan A"
                >
                  <Plus className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </div>

            {/* Penyebut */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-poppins text-purple-100">Total Irisan (Penyebut):</span>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {denominatorPresets.map((opt) => (
                  <motion.button
                    key={`denA-${opt}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    onClick={() => {
                      setDenA(opt);
                      if (numA > opt) setNumA(opt);
                    }}
                    className={`text-xs font-poppins font-semibold py-1 px-2.5 rounded-lg border transition-all cursor-pointer ${
                      denA === opt
                        ? "bg-purple-500 text-white border-purple-300 font-bold shadow-md scale-105"
                        : "bg-white/10 text-purple-100 border-white/15 hover:bg-white/20"
                    }`}
                  >
                    /{opt}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ==================== TOMBOL OPERATOR (+ / -) DI TENGAH ==================== */}
        <div className="md:col-span-1 flex flex-col items-center justify-center py-2 md:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.16, type: "spring", stiffness: 200 }}
            className="relative group flex flex-col items-center"
          >
            <motion.button
              whileHover={{ scale: 1.18, rotate: operator === "+" ? 12 : -12 }}
              whileTap={{ scale: 0.86 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              onClick={() => {
                if (!hasPizzaB) setHasPizzaB(true);
                setOperator((prev) => (prev === "+" ? "-" : "+"));
              }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center shadow-lg border-2 border-white/40 transition-colors duration-200 cursor-pointer"
              title="Klik untuk mengganti operasi: Penjumlahan (+) atau Pengurangan (-)"
            >
              <span className="font-poppins font-extrabold text-2xl sm:text-3xl leading-none select-none">
                {operator}
              </span>
            </motion.button>
            <span className="text-[10px] font-poppins font-semibold text-white/95 mt-1.5 uppercase tracking-wider text-center whitespace-nowrap bg-[#3b0764]/80 border border-white/20 px-2.5 py-0.5 rounded-full">
              Klik ganti (+ / −)
            </span>
          </motion.div>
        </div>

        {/* ==================== PIZZA B (KANAN - OPSIONAL) ==================== */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.12, type: "spring", stiffness: 140 }}
          className="md:col-span-5 bg-[#3b0764]/70 border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col items-center justify-between shadow-lg relative"
        >
          {/* Header Pizza B with Toggle */}
          <div className="w-full flex items-center justify-between pb-3 border-b border-white/15">
            <div className="flex items-center gap-2">
              <span className="font-poppins font-bold text-sm text-white uppercase tracking-wide">
                🍕 Pizza B
              </span>
              <span className="text-[10px] text-purple-200 bg-white/10 px-2 py-0.5 rounded-full">
                (Opsional)
              </span>
            </div>

            {/* Toggle Button Pizza B Active / Inactive */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              onClick={() => setHasPizzaB(!hasPizzaB)}
              className={`text-xs font-poppins font-semibold px-2.5 py-1 rounded-full border transition-all flex items-center gap-1 cursor-pointer ${
                hasPizzaB
                  ? "bg-purple-500/40 text-purple-100 border-purple-300/60 hover:bg-purple-500/50"
                  : "bg-white/10 text-purple-200 border-white/20 hover:bg-white/20 hover:text-white"
              }`}
            >
              {hasPizzaB ? (
                <>
                  <Check className="w-3 h-3 text-purple-200" />
                  <span>Aktif</span>
                </>
              ) : (
                <>
                  <X className="w-3 h-3 text-purple-300" />
                  <span>Kosong</span>
                </>
              )}
            </motion.button>
          </div>

          {hasPizzaB ? (
            <>
              {/* Pizza Graphic B (Purple Light Theme) */}
              <div className="my-3">
                <PizzaGraphic
                  numerator={numB}
                  denominator={denB}
                  size={165}
                  interactive={true}
                  onSliceClick={(idx) => {
                    setNumB(idx < numB ? idx : idx + 1);
                  }}
                  label={`${numB} dari ${denB} Potong`}
                  theme="purpleLight"
                />
              </div>

              {/* Controls Pizza B */}
              <div className="w-full flex flex-col space-y-3 pt-3 border-t border-white/15">
                {/* Pembilang */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-poppins text-purple-100 block">Potongan Diambil:</span>
                    <span className="text-[11px] text-purple-200/80">Pembilang</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.88 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      onClick={() => setNumB(Math.max(0, numB - 1))}
                      disabled={numB <= 0}
                      className="w-7 h-7 rounded-lg bg-white/15 hover:bg-white/25 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center font-bold text-white transition-colors cursor-pointer border border-white/15"
                      title="Kurangi potongan B"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </motion.button>
                    <span className="font-mono font-bold text-base w-6 text-center text-white">
                      {numB}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.88 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      onClick={() => setNumB(Math.min(denB, numB + 1))}
                      disabled={numB >= denB}
                      className="w-7 h-7 rounded-lg bg-white/15 hover:bg-white/25 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center font-bold text-white transition-colors cursor-pointer border border-white/15"
                      title="Tambah potongan B"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                </div>

                {/* Penyebut */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-poppins text-purple-100">Total Irisan (Penyebut):</span>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {denominatorPresets.map((opt) => (
                      <motion.button
                        key={`denB-${opt}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        onClick={() => {
                          setDenB(opt);
                          if (numB > opt) setNumB(opt);
                        }}
                        className={`text-xs font-poppins font-semibold py-1 px-2.5 rounded-lg border transition-all cursor-pointer ${
                          denB === opt
                            ? "bg-purple-500 text-white border-purple-300 font-bold shadow-md scale-105"
                            : "bg-white/10 text-purple-100 border-white/15 hover:bg-white/20"
                        }`}
                      >
                        /{opt}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Inactive / Empty Pizza B Placeholder */
            <div className="my-auto py-8 px-4 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center text-white/30 text-3xl mb-3">
                🍕
              </div>
              <p className="font-poppins text-sm text-purple-100 font-medium">
                Pizza B Sedang Kosong
              </p>
              <p className="text-xs text-purple-200/80 max-w-xs mt-1">
                Hanya Pizza A yang diproses. Aktifkan Pizza B jika ingin melakukan penjumlahan atau pengurangan dua pecahan.
              </p>
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                onClick={() => setHasPizzaB(true)}
                className="mt-4 bg-purple-500 hover:bg-purple-400 active:scale-95 text-white font-poppins font-semibold text-xs py-2 px-5 rounded-full shadow-md border border-purple-300/40 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Aktifkan Pizza B</span>
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* 3. HASIL PENGGABUNGAN / OPERASI DI BAGIAN BAWAH */}
      {/* ========================================================================= */}
      <AnimatePresence mode="wait">
        {hasPizzaB ? (
          /* JIKA KEDUA PIZZA AKTIF: Tampilkan Operasi Penjumlahan/Pengurangan */
          <motion.div
            key="result-combined"
            initial={{ opacity: 0, y: 18, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-7 bg-[#3b0764]/80 border border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-5 pb-4 border-b border-white/15 text-center lg:text-left">
              <div>
                <span className="bg-white/15 text-purple-100 border border-white/25 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                  Hasil Operasi: {operator === "+" ? "Penjumlahan Pecahan" : "Pengurangan Pecahan"}
                </span>

                {/* Main Fraction Math Formula in High Contrast Text */}
                <h4 className="font-poppins text-xl sm:text-2xl md:text-3xl font-extrabold text-white flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                  <span className="text-purple-100">{numA}/{denA}</span>
                  <span className="text-purple-200 font-bold">{operator}</span>
                  <span className="text-purple-100">{numB}/{denB}</span>
                  <span className="text-white">=</span>
                  <span className="text-purple-100">{scaledNumA}/{commonDen}</span>
                  <span className="text-purple-200 font-bold">{operator}</span>
                  <span className="text-purple-100">{scaledNumB}/{commonDen}</span>
                  <span className="text-white">=</span>
                  <span className="text-white text-2xl sm:text-3xl font-black underline decoration-purple-300">
                    {resultNum}/{commonDen}
                  </span>
                </h4>

                {/* Step info text */}
                <p className="text-xs font-poppins text-purple-100/90 mt-2">
                  Penyebut disamakan menggunakan KPK (<strong>{commonDen}</strong>).{" "}
                  {operator === "+" ? (
                    <>
                      Total potongan: <strong>{scaledNumA} + {scaledNumB} = {resultNum}</strong> irisan per-{commonDen}.
                    </>
                  ) : (
                    <>
                      Sisa potongan: <strong>{scaledNumA} − {scaledNumB} = {resultNum}</strong> irisan per-{commonDen}.
                    </>
                  )}
                </p>
              </div>

              {/* Mixed Number / Badge Box */}
              <div className="bg-white/15 px-4 py-3 rounded-2xl border border-white/25 text-center shrink-0">
                <span className="text-[11px] text-purple-200 block font-medium">Bentuk Sederhana / Campuran:</span>
                <span className="font-poppins text-lg sm:text-2xl font-bold text-white">
                  {isNegative ? (
                    <span>
                      - ({absResultNum}/{commonDen})
                    </span>
                  ) : wholePizzas > 0 ? (
                    <>
                      {wholePizzas} {remainderSlices > 0 ? `${remainderSlices}/${commonDen}` : ""}{" "}
                      <span className="text-xs text-purple-100 font-normal">Loyang</span>
                    </>
                  ) : (
                    <>
                      {simplifiedResultNum}/{simplifiedResultDen}{" "}
                      <span className="text-xs text-purple-100 font-normal">Loyang</span>
                    </>
                  )}
                </span>
              </div>
            </div>

            {/* Realtime Result Pizza Graphic (Purple Result Theme) */}
            <div className="mt-5 flex flex-col items-center">
              <span className="text-xs font-semibold text-purple-100 uppercase tracking-wider mb-3">
                Visualisasi Potongan Pizza yang Didapat:
              </span>

              {isNegative ? (
                <div className="bg-white/10 border border-purple-300/40 text-purple-100 text-xs sm:text-sm font-poppins px-4 py-2.5 rounded-xl text-center max-w-md">
                  ⚠️ Nilai Pizza A lebih kecil dari Pizza B ({scaledNumA} &lt; {scaledNumB}), sehingga hasilnya bernilai negatif (<strong>{resultNum}/{commonDen}</strong>).
                </div>
              ) : resultNum === 0 ? (
                <div className="text-center">
                  <PizzaGraphic numerator={0} denominator={commonDen} size={110} label="0 Pizza (Habis)" theme="purpleResult" />
                </div>
              ) : (
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {/* Whole Pizzas */}
                  {Array.from({ length: wholePizzas }, (_, pIdx) => (
                    <div key={`result-whole-${pIdx}`} className="text-center">
                      <PizzaGraphic
                        numerator={commonDen}
                        denominator={commonDen}
                        size={110}
                        theme="purpleResult"
                        label={`Loyang ${pIdx + 1} Penuh`}
                      />
                    </div>
                  ))}

                  {/* Remainder Slices */}
                  {remainderSlices > 0 && (
                    <div className="text-center">
                      <PizzaGraphic
                        numerator={remainderSlices}
                        denominator={commonDen}
                        size={110}
                        theme="purpleResult"
                        label={`Sisa ${remainderSlices}/${commonDen}`}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          /* JIKA HANYA PIZZA A AKTIF: Tampilkan detail tunggal Pizza A (Tanpa info persentase) */
          <motion.div
            key="result-single"
            initial={{ opacity: 0, y: 18, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-7 bg-[#3b0764]/70 border border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          >
            <div>
              <span className="bg-white/15 text-purple-100 border border-white/25 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                Detail Pecahan Pizza A
              </span>
              <h4 className="font-poppins text-xl sm:text-2xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                <span>{numA} / {denA} Loyang Pizza</span>
              </h4>
              <p className="font-poppins text-xs text-purple-100 mt-1">
                {gcdA > 1 && numA > 0 ? (
                  <>
                    Pecahan ini setara dengan <strong>{simplifiedNumA}/{simplifiedDenA}</strong>.
                  </>
                ) : (
                  <>Pecahan ini sudah dalam bentuk paling sederhana.</>
                )}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              onClick={() => setHasPizzaB(true)}
              className="bg-purple-500 hover:bg-purple-400 active:scale-95 text-white font-poppins font-semibold text-xs sm:text-sm py-2.5 px-6 rounded-full shadow-lg border border-purple-300/40 transition-colors cursor-pointer flex items-center gap-2 shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Aktifkan Pizza B untuk Penjumlahan & Pengurangan</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
