"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 40, showText = false, className = "" }) => {
  return (
    <div className="flex items-center gap-4">
      <div className={`relative ${className}`} style={{ width: size, height: size }}>
        <Image
          src="/logo-symbol.png"
          alt="Succulent Spirits Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span className="font-mono text-[14px] md:text-[20px] tracking-[0.12em] text-brand-cream uppercase whitespace-nowrap">
          Succulent Spirits & Co.
        </span>
      )}
    </div>
  );
};

export default Logo;
