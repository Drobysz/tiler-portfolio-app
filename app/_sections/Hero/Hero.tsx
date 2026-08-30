"use client";

import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import s from "./style.module.scss";
import { motion } from "framer-motion";
import {
    VideoPlayer,
    SectionOverlays,
    InnerContent,
} from "./_components";

export const Hero = ()=> {
    const refElevator = useRef<HTMLDivElement | null>(null);
    const [narrowed, setNarrowed] = useState(true);
    const { scrollY: globalScrollY } = useScroll();
    const { scrollYProgress: localScrollYProgress } = useScroll({
        target: refElevator,
        offset: ["10% start", "90% end"]
    });

    useMotionValueEvent(globalScrollY, "change", (current)=> {
        if (current < 400) {
            setNarrowed(true);
        } else {
            setNarrowed(false);
        };
    });

    const insetValue = useTransform(
        localScrollYProgress, 
        [0, 1], 
        [
            "inset(33.33% 33.33% 33.33% 33.33% round 24px)",
            "inset(0% 0% 0% 0% round 24px)",
        ]
    );

    return (
        <section
            className="px-1.5 h-[250vh]"
            ref={refElevator}
        >
            <div className="sticky top-0 pt-1.5">
                <motion.div
                    className={s.video_container}
                    style={{
                        clipPath: insetValue
                    }}
                >
                    <VideoPlayer />
                    <SectionOverlays 
                        isNarrowed={narrowed}
                    />
                    {!narrowed &&
                        <InnerContent />
                    }
                </motion.div>
            </div>
        </section>
    )
}