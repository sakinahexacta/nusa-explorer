import React from "react";
import Image from "next/image";

interface NusaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function NusaLogo({ className = "", size = "md" }: NusaLogoProps) {
  const heightClass =
    size === "xl"
      ? "h-12 md:h-14"
      : size === "lg"
      ? "h-10 md:h-12"
      : size === "sm"
      ? "h-7"
      : "h-8 md:h-9";

  return (
    <div className={`flex items-center select-none ${className}`}>
      <Image
        src="/logo-icon.png"
        alt="Nusa Explorer"
        width={180}
        height={130}
        className={`${heightClass} w-auto object-contain`}
        priority
      />
    </div>
  );
}
