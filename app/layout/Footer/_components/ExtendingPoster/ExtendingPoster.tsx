"use client";

import { GlidingImageBackground } from "@/components";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import s from "./style.module.scss";
import { SplitByRowsText } from "@/components/animations/Texts/SplitByRowsText/SplitByRowsText";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import footerPosters from "./footerPosters";
import { FooterPosterLogo } from "./_components/FooterPosterLogo";

export const ExtendingPoster = ()=> {
    const pathname = usePathname();
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

    const pageFooterPoster = footerPosters[pathname] ?? footerPosters["/"];

    return (
        <div
            ref={containerRef}
            className="bg-black"
        >
            <div
                className={s.container}
            >
                <GlidingImageBackground
                    style={{
                        translateY: translateY
                    }}
                    img_url={pageFooterPoster.img_url}
                    className={s.poster_container}
                >
                    <div className={s.enterprise_name_logo}>
                        <SplitByRowsText 
                            className={cn(
                                s.title,
                                pageFooterPoster.textColor,
                            )}
                            once={false}
                            tag="h2"
                        >
                            D.P Carrelages
                        </SplitByRowsText>
                        <div
                            className={cn(
                                s.separator,
                                pageFooterPoster.backColor,
                            )}
                        />
                        <FooterPosterLogo 
                            classNames={cn(
                                s.logo,
                                pageFooterPoster.textColor,
                            )}
                        />
                    </div>
                </GlidingImageBackground>
            </div>
        </div>
    )
}
