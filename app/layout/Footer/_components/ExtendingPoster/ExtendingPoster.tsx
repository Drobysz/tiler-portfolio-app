"use client";

import { GlidingImageBackground } from "@/components";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LogoIcon from "@/assets/logo_tiler_custom.svg";
import s from "./style.module.scss";
import { SplitByRowsText } from "@/components/animations/Texts/SplitByRowsText/SplitByRowsText";

export const ExtendingPoster = ()=> {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });
    const translateY = useTransform(
        scrollYProgress,
        [0, 1],
        ["-100%", "0%"],
    );

    return (
        <div
            ref={containerRef}
            className="bg-black"
        >
            <motion.div
                className="overflow-hidden h-[80vh] rounded-t-2xl z-20"
            >
                <GlidingImageBackground
                    style={{
                        translateY: translateY
                    }}
                    img_url="/footer_back.jpg"
                    className="flex justify-center items-center h-full"
                >
                    <div className="flex items-center gap-10 z-10">
                        <SplitByRowsText 
                            className={s.title}
                            tag="h2"
                        >
                            D.P Carrelages
                        </SplitByRowsText>
                        <div
                            className={s.separator}
                        />
                        <motion.div
                            viewport={{
                                once: true,
                            }}
                            initial={{
                                rotate: 45
                            }}
                            whileInView={{
                                rotate: 275
                            }}
                            transition={{
                                duration: 1.5,
                                ease: [0.34, 1.56, 0.64, 1],
                            }}
                        >
                            <LogoIcon
                                className={s.logo}
                            />
                        </motion.div>
                    </div>
                </GlidingImageBackground>
            </motion.div>
        </div>
    )
}
