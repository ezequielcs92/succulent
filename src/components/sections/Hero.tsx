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
                    <source src="/Video/Video-B&W.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="container mx-auto px-8 relative z-20 flex flex-col h-full justify-center">
                {/* Main Text Center */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-full text-center"
                >
                    <h1 className="text-brand-cream text-[60px] md:text-[100px] lg:text-[150px] font-display font-[900] tracking-[-0.015em] leading-[0.8]">
                        BUILDING A HOME <br />
                        FOR THE GOOD STUFF
                    </h1>
                </motion.div>

                {/* Bottom Elements */}
                <div className="absolute bottom-12 left-8 right-8 flex justify-between items-end">
                    {/* Bottom Left: Mission Text + Central Logo */}
                    <div className="flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="max-w-[400px]"
                        >
                            <p className="text-brand-cream/90 font-mono text-sm md:text-[18px] leading-relaxed">
                                A curated European platform to discover and source the most succulent premium agave spirits.
                            </p>
                        </motion.div>

                        {/* Central Logo Symbol (81x81px) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            <Logo size={81} showText={false} className="text-brand-cream" />
                        </motion.div>
                    </div>

                    {/* Bottom Right: CTA Link to Instagram */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <a
                            href="https://www.instagram.com/succulentspirits/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-cream font-mono text-sm md:text-[18px] underline underline-offset-4 decoration-1 hover:text-brand-orange transition-colors group flex items-center gap-2"
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
