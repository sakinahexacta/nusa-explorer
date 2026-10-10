
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gamepad2,
  Maximize2,
  Minimize2,
  DoorOpen,
  RotateCcw,
  RotateCw,
} from "lucide-react";

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedMap?: string | null;
}

type ScreenOrientationWithLock = {
  lock?: (orientation: "landscape") => Promise<void>;
  unlock?: () => void;
};

function getScreenOrientation(): ScreenOrientationWithLock | null {
  if (typeof window === "undefined") {
    return null;
  }

  const screenWithOrientation = window.screen as unknown as {
    orientation?: ScreenOrientationWithLock;
  };

  return screenWithOrientation.orientation ?? null;
}

function unlockOrientation() {
  try {
    getScreenOrientation()?.unlock?.();
  } catch (error) {
    console.warn("Gagal melepas orientasi layar:", error);
  }
}

export default function GameModal({
  isOpen,
  onClose,
  selectedMap,
}: GameModalProps) {
  const gameAreaRef = useRef<HTMLDivElement>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [isSmallTouchDevice, setIsSmallTouchDevice] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);

  // Mendeteksi ukuran layar, touchscreen, dan orientasi.
  useEffect(() => {
    const updateViewport = () => {
      const isSmallScreen = window.matchMedia(
        "(max-width: 1024px)"
      ).matches;

      const supportsTouch =
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;

      setIsSmallTouchDevice(isSmallScreen || supportsTouch);

      setIsPortrait(
        window.matchMedia("(orientation: portrait)").matches
      );
    };

    updateViewport();

    window.addEventListener("resize", updateViewport);
    window.addEventListener("orientationchange", updateViewport);
    window.visualViewport?.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("orientationchange", updateViewport);
      window.visualViewport?.removeEventListener("resize", updateViewport);
    };
  }, []);

  // Mengelola scroll, Escape, dan status fullscreen browser.
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      if (document.fullscreenElement === gameAreaRef.current) {
        document.exitFullscreen().catch(() => {});
      } else if (isFullscreen) {
        // Keluar dari fullscreen CSS fallback.
        setIsFullscreen(false);
        unlockOrientation();
      } else {
        onClose();
      }
    };

    const handleFullscreenChange = () => {
      const gameIsFullscreen =
        document.fullscreenElement === gameAreaRef.current;

      setIsFullscreen(gameIsFullscreen);

      if (!gameIsFullscreen) {
        unlockOrientation();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.body.style.overflow = originalOverflow;

      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
    };
  }, [isOpen, isFullscreen, onClose]);

  // Memasuki fullscreen dengan area GAME, bukan seluruh modal.
  const toggleFullscreen = async () => {
    const gameArea = gameAreaRef.current;

    if (!gameArea) return;

    // Keluar dari fullscreen.
    if (isFullscreen) {
      try {
        if (document.fullscreenElement === gameArea) {
          await document.exitFullscreen();
        }
      } catch (error) {
        console.warn("Gagal keluar dari fullscreen:", error);
      } finally {
        setIsFullscreen(false);
        unlockOrientation();
      }

      return;
    }

    let nativeFullscreenSucceeded = false;

    try {
      if (typeof gameArea.requestFullscreen === "function") {
        // Meminta browser menyembunyikan navigation UI.
        await gameArea.requestFullscreen({
          navigationUI: "hide",
        });

        nativeFullscreenSucceeded = true;
      }
    } catch (error) {
      console.warn(
        "Fullscreen native tidak tersedia. Menggunakan fallback CSS.",
        error
      );
    }

    // Bila native ditolak, tetap penuhi viewport yang tersedia.
    setIsFullscreen(true);

    const shouldRequestLandscape =
      window.matchMedia("(max-width: 1024px)").matches ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    const orientation = getScreenOrientation();

    // Lock landscape hanya jika browser berhasil masuk fullscreen native.
    if (
      nativeFullscreenSucceeded &&
      shouldRequestLandscape &&
      typeof orientation?.lock === "function"
    ) {
      try {
        await orientation.lock("landscape");
      } catch (error) {
        console.warn(
          "Browser menolak penguncian landscape. " +
            "Putar perangkat secara manual jika diperlukan.",
          error
        );
      }
    }
  };

  // Menutup modal dan melepaskan fullscreen jika sedang aktif.
  const handleClose = async () => {
    try {
      if (document.fullscreenElement === gameAreaRef.current) {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.warn("Gagal keluar dari fullscreen:", error);
    }

    unlockOrientation();
    setIsFullscreen(false);
    onClose();
  };

  // Memuat ulang instance game.
  const handleRestartGame = () => {
    setIframeKey((previous) => previous + 1);
  };

  const showRotatePrompt =
    isFullscreen && isSmallTouchDevice && isPortrait;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden ${
            isFullscreen ? "p-0" : "p-2 sm:p-4 md:p-6"
          }`}
        >
          {/* Backdrop */}
          {!isFullscreen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => void handleClose()}
              className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
              aria-hidden="true"
            />
          )}

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 25,
            }}
            style={
              isFullscreen
                ? {
                    position: "fixed",
                    inset: 0,
                    width: "100vw",
                    height: "100dvh",
                    maxWidth: "none",
                    borderRadius: 0,
                    borderWidth: 0,
                    margin: 0,
                    zIndex: 10000,
                  }
                : undefined
            }
            className={`relative w-full max-w-6xl bg-[#190C38] rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-[#7c3aed] shadow-[0_12px_45px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col z-10 ${
              isFullscreen ? "rounded-none border-0" : ""
            }`}
          >
            {/* Header disembunyikan saat fullscreen agar game memenuhi layar. */}
            {!isFullscreen && (
              <header className="w-full shrink-0 bg-[#5b21b6] border-b-2 sm:border-b-4 border-black/40 px-3 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between select-none shadow-md gap-2">
                {/* Judul */}
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-purple-900/70 border border-purple-400/50 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 animate-pulse" />
                  </div>

                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2">
                      <h2 className="font-pixel text-[11px] sm:text-xs md:text-sm text-yellow-300 drop-shadow-[0_2px_0_rgba(0,0,0,0.9)] truncate tracking-wider">
                        NUSA EXPLORER
                      </h2>

                      {selectedMap && (
                        <span className="hidden sm:inline-flex items-center gap-1 bg-[#7c3aed] text-white px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-poppins font-bold border border-white/30 shadow-sm">
                          <span>📍</span>
                          <span className="truncate">{selectedMap}</span>
                        </span>
                      )}
                    </div>

                    <span className="text-[10px] sm:text-xs text-purple-200 font-poppins font-medium hidden xs:block truncate">
                      Godot Engine HTML5
                    </span>
                  </div>
                </div>

                {/* Tombol kontrol normal */}
                <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
                  <button
                    type="button"
                    onClick={handleRestartGame}
                    title="Muat Ulang Game"
                    className="bg-purple-800/80 hover:bg-purple-700 active:scale-95 text-white p-2 sm:px-3 sm:py-1.5 rounded-xl border border-black/30 font-poppins text-xs font-semibold flex items-center gap-1.5 transition-all shadow cursor-pointer select-none"
                  >
                    <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-200" />
                    <span className="hidden md:inline">Restart</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => void toggleFullscreen()}
                    title="Layar Penuh"
                    className="bg-[#7c3aed] hover:bg-[#6d28d9] active:scale-95 text-white p-2 sm:px-3.5 sm:py-1.5 rounded-xl border border-black/40 font-poppins text-xs font-bold flex items-center gap-1.5 transition-all shadow-[0_2px_0_rgba(0,0,0,0.7)] cursor-pointer select-none"
                  >
                    <Maximize2 className="w-4 h-4 text-white" />
                    <span className="hidden sm:inline">Layar Penuh</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => void handleClose()}
                    title="Tutup Game"
                    className="bg-[#dc2626] hover:bg-[#b91c1c] active:scale-95 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-black/50 font-poppins text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all shadow-[0_3px_0_rgba(0,0,0,0.8)] cursor-pointer select-none"
                  >
                    <DoorOpen className="w-4 h-4 text-white" />
                    <span>Kembali</span>
                  </button>
                </div>
              </header>
            )}

            {/* Area game: inilah elemen yang dimasukkan ke fullscreen native. */}
            <div
              ref={gameAreaRef}
              style={
                isFullscreen
                  ? {
                      width: "100vw",
                      height: "100dvh",
                      minHeight: "100dvh",
                      flex: "none",
                      aspectRatio: "auto",
                    }
                  : undefined
              }
              className={`relative w-full bg-black overflow-hidden flex items-center justify-center min-h-0 ${
                isFullscreen ? "flex-none" : "aspect-[16/9] flex-1"
              }`}
            >
              <iframe
                key={iframeKey}
                src="/nusa-explorer/index.html"
                title="Nusa Explorer Godot Game"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0 block select-none"
              />

              {/* Kontrol mengambang saat game fullscreen. */}
              {isFullscreen && (
                <div className="absolute top-3 right-3 z-30 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleRestartGame}
                    title="Restart Game"
                    aria-label="Restart game"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-black/65 text-white shadow-lg backdrop-blur-sm active:scale-95"
                  >
                    <RotateCcw className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => void toggleFullscreen()}
                    title="Keluar dari Layar Penuh"
                    aria-label="Keluar dari layar penuh"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-black/65 text-white shadow-lg backdrop-blur-sm active:scale-95"
                  >
                    <Minimize2 className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => void handleClose()}
                    title="Tutup Game"
                    aria-label="Tutup game"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-red-700/90 text-white shadow-lg backdrop-blur-sm active:scale-95"
                  >
                    <DoorOpen className="h-5 w-5" />
                  </button>
                </div>
              )}

              {/* Panduan orientasi jika browser tidak bisa mengunci landscape. */}
              {showRotatePrompt && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-[#0d061f]/95 p-6 text-center text-white">
                  <RotateCw className="h-12 w-12 text-yellow-300" />

                  <h3 className="font-pixel text-sm sm:text-base text-yellow-300 leading-relaxed">
                    PUTAR PERANGKAT
                  </h3>

                  <p className="max-w-sm text-sm sm:text-base font-poppins leading-relaxed text-purple-100">
                    Gunakan posisi landscape (horizontal) untuk memainkan
                    Nusa Explorer. Putar HP atau tablet jika layar belum
                    berotasi otomatis.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
