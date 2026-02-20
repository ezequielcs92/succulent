"use client";

import React from "react";
import Logo from "@/components/ui/Logo";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 py-12 bg-transparent">
            <div className="container mx-auto px-6 flex justify-center items-center">
                <Link href="/" className="hover:opacity-80 transition-opacity flex items-center gap-3">
                    <Logo size={24} showText={false} className="text-brand-cream" />
                    <span className="font-mono text-[14px] md:text-[18px] tracking-[0.1em] text-brand-cream uppercase">
                        Succulent Spirits & Co.
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
