"use client";

import { SectContainer } from "@/components/containers/SectContainer/SectContainer"
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import s from "./style.module.scss";
import Image from "next/image";

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
            <h2
                className={s.title}
            >
                Plus que 100 œuvres réalisées
            </h2>
            <div
                ref={ref}
                className={s.gallery_grid}
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
                                    className={s.image_cover}
                                    src={`/illustration/tile${(rowId * IMAGES_PER_ROW) + (listId + 1)}.jpg`}
                                    width={300}
                                    height={300}
                                    loading="eager"
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
