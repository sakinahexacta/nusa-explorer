"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, Maximize2, Minimize2, DoorOpen, RotateCcw } from "lucide-react";

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedMap?: string | null;
}

export default function GameModal({ isOpen, onClose, selectedMap }: GameModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  // Lock body scroll while modal is open & handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        } else {
          onClose();
        }
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [isOpen, onClose]);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        if (containerRef.current) {
          await containerRef.current.requestFullscreen();
        }
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error("Fullscreen toggle error:", err);
    }
  };

  const handleRestartGame = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className={`relative w-full max-w-6xl bg-[#190C38] rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-[#7c3aed] shadow-[0_12px_45px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col z-10 ${
              isFullscreen ? "h-screen max-w-none rounded-none border-0" : ""
            }`}
          >
            {/* Header Modal Solid Ungu bg-[#5b21b6] bergaya Pixel Art Nusa Explorer */}
            <header className="w-full bg-[#5b21b6] border-b-2 sm:border-b-4 border-black/40 px-3 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between select-none shadow-md gap-2">
              {/* Sisi Kiri: Icon Gamepad & Title */}
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

              {/* Sisi Kanan: Action Controls (Restart, Fullscreen, Tutup) */}
              <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
                {/* Tombol Restart / Refresh Frame */}
                <button
                  type="button"
                  onClick={handleRestartGame}
                  title="Muat Ulang Game"
                  className="bg-purple-800/80 hover:bg-purple-700 active:scale-95 text-white p-2 sm:px-3 sm:py-1.5 rounded-xl border border-black/30 font-poppins text-xs font-semibold flex items-center gap-1.5 transition-all shadow cursor-pointer select-none"
                >
                  <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-200" />
                  <span className="hidden md:inline">Restart</span>
                </button>

                {/* Tombol Fullscreen */}
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  title={isFullscreen ? "Keluar Layar Penuh" : "Layar Penuh"}
                  className="bg-[#7c3aed] hover:bg-[#6d28d9] active:scale-95 text-white p-2 sm:px-3.5 sm:py-1.5 rounded-xl border border-black/40 font-poppins text-xs font-bold flex items-center gap-1.5 transition-all shadow-[0_2px_0_rgba(0,0,0,0.7)] cursor-pointer select-none"
                >
                  {isFullscreen ? (
                    <>
                      <Minimize2 className="w-4 h-4 text-white" />
                      <span className="hidden sm:inline">Normal</span>
                    </>
                  ) : (
                    <>
                      <Maximize2 className="w-4 h-4 text-white" />
                      <span className="hidden sm:inline">Layar Penuh</span>
                    </>
                  )}
                </button>

                {/* Tombol Tutup / Kembali */}
                <button
                  type="button"
                  onClick={onClose}
                  title="Tutup Game"
                  className="bg-[#dc2626] hover:bg-[#b91c1c] active:scale-95 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-black/50 font-poppins text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all shadow-[0_3px_0_rgba(0,0,0,0.8)] cursor-pointer select-none"
                >
                  <DoorOpen className="w-4 h-4 text-white" />
                  <span>Kembali</span>
                </button>
              </div>
            </header>

            {/* Area Game: Responsif Aspect Ratio 16:9 Menyesuaikan Lebar Layar */}
            <div className="relative w-full aspect-[16/9] bg-black overflow-hidden flex items-center justify-center flex-1">
              <iframe
                key={iframeKey}
                ref={iframeRef}
                src="/game/index.html"
                title="Nusa Explorer Godot Game"
                allow="autoplay; fullscreen; focus-without-user-activation *"
                allowFullScreen
                className="w-full h-full border-0 block select-none"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
