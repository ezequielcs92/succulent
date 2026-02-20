"use client";

import React from "react";
import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-brand-black">
            {/* Background Video Overlay */}
            <div className="absolute inset-0 z-0 bg-brand-black">
                <div className="absolute inset-0 bg-brand-black/40 z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover grayscale brightness-75 contrast-125"
                >
                    <source src="/videos/hero-bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="container mx-auto px-[var(--spacing-container-px)] relative z-20 flex flex-col h-full justify-center">
                {/* Main Text Center */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full text-center"
                >
                    <h1 className="text-brand-cream text-[52px] sm:text-[80px] md:text-[110px] lg:text-[140px] xl:text-[160px] font-display font-black tracking-[-0.01em] leading-[0.8] uppercase">
                        BUILDING A HOME <br className="hidden md:block" />
                        FOR THE GOOD STUFF
                    </h1>
                </motion.div>

                {/* Bottom Elements */}
                <div className="absolute bottom-[var(--spacing-safe-bottom)] left-[var(--spacing-container-px)] right-[var(--spacing-container-px)] flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-0">
                    {/* Bottom Left: Mission Text + Central Logo */}
                    <div className="flex flex-col items-center md:items-start gap-8 md:gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="max-w-[320px] md:max-w-[440px] text-center md:text-left"
                        >
                            <p className="text-brand-cream/80 font-mono text-[14px] md:text-[20px] leading-[1.4] tracking-tight">
                                A curated European platform to discover and source the most succulent premium agave spirits.
                            </p>
                        </motion.div>

                        {/* Central Logo Symbol (81x81px) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="flex items-center"
                        >
                            <Logo size={81} showText={false} className="text-brand-cream" />
                        </motion.div>
                    </div>

                    {/* Bottom Right: CTA Link to Instagram */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="pb-4 md:pb-0"
                    >
                        <a
                            href="https://www.instagram.com/succulentspirits/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-cream font-mono text-[14px] md:text-[20px] underline underline-offset-[6px] decoration-[1px] hover:text-brand-orange transition-colors group flex items-center gap-3"
                        >
                            See what we&apos;re about <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
