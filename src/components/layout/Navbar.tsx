"use client";

import React from "react";
import Logo from "@/components/ui/Logo";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 pt-[var(--spacing-safe-top)] bg-transparent">
            <div className="container mx-auto px-[var(--spacing-container-px)] flex justify-center items-center text-center">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <Logo size={20} showText={true} className="text-brand-cream md:w-[24px] md:h-[24px]" />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
