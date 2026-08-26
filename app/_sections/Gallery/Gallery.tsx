"use client";

import { SectContainer } from "@/components/containers/SectContainer/SectContainer"
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import s from "./style.module.scss";
import Image from "next/image";
import { SplitText } from "@/components/animations/Texts/SplitText/SplitText";

const IMAGES_PER_ROW = 6;

export const Gallery = ()=> {
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 20%", "end start"]
    });

    const translateLeftY = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "34%"]
    );

    const translateRightY = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "16%"]
    )

    const translateCenterY = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "-10%"]
    );

    const values = [
        translateLeftY,
        translateCenterY,
        translateRightY
    ]

    return (
        <SectContainer
            className={s.container}
        >
            <SplitText 
                className={s.title}
                tag="h2"
            >
                Plus que 100 œuvres réalisées
            </SplitText>
            <div
                ref={ref}
                className="grid grid-cols-3 h-[300vh] py-30"
            >
                {Array(3).fill(true).map((_, rowId)=>
                    <motion.ul
                        key={`gallery-row-${rowId}`}
                        className={s.row}
                        style={{
                            translateY: values[rowId]
                        }}
                    >
                        {Array(6).fill(true).map((_, listId)=>
                            <li
                                key={`gallery-row-${rowId}-list-${listId}`}
                                className="w-full"
                            >
                                <Image
                                    className="w-full h-auto rounded-2xl"
                                    src={`/illustration/tile${(rowId * IMAGES_PER_ROW) + (listId + 1)}.jpg`}
                                    width={300}
                                    height={300}
                                    alt="gallery image"
                                />
                            </li>
                        )}
                    </motion.ul>
                )}
            </div>
        </SectContainer>
    )
}