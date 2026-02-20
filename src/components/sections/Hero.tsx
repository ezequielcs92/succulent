"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-brand-black">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 bg-brand-black">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/videos/hero-bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* ─── MOBILE LAYOUT (hidden on md+) ─── */}
            <div className="md:hidden px-6 relative z-20 h-full flex flex-col pt-[120px]">

                {/* Upper zone: title + content grouped, centered vertically */}
                <div className="flex-1 flex flex-col justify-center">

                    {/* Title — 4 lines, 60px, centered */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center"
                    >
                        <h1 className="text-brand-cream font-display font-black tracking-[-0.01em] leading-[0.9] uppercase text-[60px]">
                            BUILDING<br />
                            A HOME FOR<br />
                            THE GOOD<br />
                            STUFF
                        </h1>
                    </motion.div>

                    {/* Mission text + logo */}
                    <div className="mt-[80px] flex flex-col items-start w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="w-full flex justify-start"
                        >
                            <div className="inline-flex flex-col items-start">
                                <div className="text-left text-brand-cream font-mono text-[12px] font-normal leading-[1.3] whitespace-pre">
                                    {"A curated European platform to\n         discover and source the most\nsucculent premium agave spirits."}
                                </div>

                                {/* Logo SVG (full) */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1, duration: 0.8 }}
                                    className="mt-0"
                                >
                                    <Image
                                        src="/logo-symbol.png"
                                        alt="Succulent Spirits & Co."
                                        width={41}
                                        height={41}
                                        className="object-contain ml-[142px]"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Lower zone: CTA pinned to bottom */}
                <div className="pb-[80px] flex justify-end">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <Button
                            asChild
                            variant="link"
                            className="text-brand-cream font-mono text-[16px] font-normal leading-none underline decoration-solid hover:text-brand-orange transition-colors group p-0 h-auto"
                        >
                            <a
                                href="https://www.instagram.com/succulentspirits/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                See what we&apos;re about <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* ─── DESKTOP LAYOUT (hidden on mobile) ─── */}
            <div className="hidden md:flex container mx-auto px-[var(--spacing-container-px)] relative z-20 h-full flex-col">

                {/* Upper zone: title + mission text, vertically centered */}
                <div className="flex-1 flex flex-col justify-center gap-[8vh] pt-[2vh]">

                    {/* Main Title */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full text-center mt-[12vh]"
                    >
                        <h1 className="text-brand-cream text-[48px] sm:text-[80px] md:text-[110px] lg:text-[120px] xl:text-[150px] font-display font-black tracking-[-0.02em] leading-[0.8] uppercase headlines-xl">
                            BUILDING A <br />
                            HOME FOR THE <br />
                            GOOD STUFF
                        </h1>
                    </motion.div>

                    {/* Bottom Left: Mission Text + Logo */}
                    <div className="w-full flex flex-col md:flex-row justify-start items-center md:items-start pl-[5%]">
                        <div className="flex flex-col items-start gap-0">
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="w-full block"
                            >
                                <div className="text-left text-brand-cream font-mono text-[18px] font-normal leading-[1.3] whitespace-pre">
                                    {"A curated European platform to\n         discover and source the most\nsucculent premium agave spirits."}
                                </div>
                            </motion.div>

                            {/* Central Logo Symbol */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="mt-0 flex items-start"
                            >
                                <Logo size={80} showText={false} className="text-brand-cream ml-[203px]" />
                            </motion.div>
                        </div>
                    </div>

                </div>

                {/* Lower zone: CTA pinned to bottom */}
                <div className="pb-[8vh] flex justify-end">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <Button
                            asChild
                            variant="link"
                            className="text-brand-cream font-mono text-[18px] font-normal leading-[1] underline decoration-solid hover:text-brand-orange transition-colors group p-0 h-auto"
                        >
                            <a
                                href="https://www.instagram.com/succulentspirits/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3"
                            >
                                See what we&apos;re about <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </Button>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
