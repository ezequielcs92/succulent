"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 pt-[var(--spacing-safe-top)] bg-transparent">
            <div className="container mx-auto px-[var(--spacing-container-px)] flex justify-center items-center text-center">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <Image
                        src="/assets/logo-full.svg"
                        alt="Succulent Spirits & Co."
                        width={200}
                        height={40}
                        className="h-8 md:h-10 w-auto object-contain"
                        priority
                    />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
