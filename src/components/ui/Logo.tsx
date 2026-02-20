"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 40, showText = false, className = "" }) => {
  // Use CSS variables or predefined tailwind sizes to avoid inline style lint errors
  return (
    <div className="flex items-center gap-4 group" style={{ "--logo-size": `${size}px` } as React.CSSProperties}>
      <div
        className={`relative w-[var(--logo-size)] h-[var(--logo-size)] ${className}`}
      >
        <Image
          src="/logo-symbol.png"
          alt="Succulent Spirits Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span className="font-mono text-[14px] md:text-[25px] tracking-[0.12em] text-brand-cream whitespace-nowrap leading-none">
          Succulent Spirits & Co.
        </span>
      )}
    </div>
  );
};

export default Logo;
