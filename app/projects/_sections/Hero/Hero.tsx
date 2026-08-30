"use client";

import PixelSwap from "@/components/animations/PixelSwap/PixelSwap";
import s from "./style.module.scss";
import AscendingImagesBackground from "@/components/Backgrounds/AscendingImagesBackground/AscendingImagesBackground";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = ()=> {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    const translateY = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "100%"],
    );

    return (
        <section 
            className="relative w-full h-screen"
            ref={containerRef}
        >
            <motion.div 
                className="w-full h-screen"
                style={{
                    translateY: translateY
                }}
            >
                <PixelSwap
                    className="h-[inherit]"
                    aspectRatio="auto"
                    firstContent={
                        <div className={s.title_back}>
                            <h1>D.P Carrelages</h1>
                        </div>
                    }
                    secondContent={
                        <div className={s.title_front}>
                            <AscendingImagesBackground />
                            <h1 className={s.title_front__rows}>
                                <span>
                                    Un portfolio
                                </span>
                                <span className="pl-10">
                                    regroupant de
                                </span>
                                <span className="pl-16">
                                    nombreuses
                                </span>
                                <span className="pl-12">
                                    œuvres
                                </span>
                            </h1>
                        </div>
                    }
                    pixelSize={128}
                    gap={0}
                    pixelRadius={0}
                    pixelSpin={0}
                    pixelScale={0.45}
                    duration={2600}
                    pixelDuration={450}
                    pattern="random"
                    randomness={0}
                    fade
                    trigger="viewport"
                    viewportThreshold={0.25}
                />
            </motion.div>
        </section>
    )
}
