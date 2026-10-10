"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Kelompokkan semua sub-halaman detail materi agar pergantian mata pelajaran tidak memicu fade-out global
  const isMateriDetail = pathname?.startsWith("/materi/") && pathname !== "/materi";
  const transitionKey = isMateriDetail ? "/materi-detail" : pathname;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={transitionKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className="w-full flex-1 flex flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
