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
    <div className={`flex items-center gap-2 ${className}`}>
      <div
        style={{ width: size, height: size }}
        className="relative"
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
        <span className="font-display text-lg leading-tight tracking-tight uppercase text-brand-cream">
          Succulent Spirits & Co.
        </span>
      )}
    </div>
  );
};

export default Logo;
