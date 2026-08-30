"use client";

import { ImagesSliderBackground } from "@/components/Backgrounds/ImagesSliderBackground/ImagesSliderBackground";
import furnishers from "@/json/furnishers.json";
import { useState } from "react";
import s from "./style.module.scss";
import { Direction } from "@/components/Backgrounds/ImagesSliderBackground/ImagesSliderBackground.props";
import {
    ArrowLeft,
    ArrowRight,
    GalleryHorizontalEnd,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function PageView() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState<Direction>(1);

    const posters = furnishers.map(f => f.background_src);
    const currentProj = furnishers[activeIndex];

    const next = ()=> {
        setDirection(1);

        setActiveIndex(
            Math.min(activeIndex + 1, furnishers.length - 1)
        );
    };

    const prev = ()=> {
        setDirection(-1);

        setActiveIndex(
            Math.max(0, activeIndex - 1)
        );
    };

    return (
        <ImagesSliderBackground
            images={posters}
            activeIndex={activeIndex}
            direction={direction}
            className="flex justify-center h-[115vh] pb-20"
        >
            <div className={s.elevator}>
                <div className={cn(
                    s.panel,
                    s.blurred_back
                )}>
                    <div className={s.logo_back}>
                        <Image 
                            src={currentProj.logo_src}
                            width={300}
                            height={200}
                            alt="enterprise logo"
                        />
                    </div>
                    <div 
                        className={s.separator}
                    />
                    <div className="flex flex-col gap-3">
                        <h1 className={s.title}>
                            {currentProj.name}
                        </h1>
                        <p className={s.desc}>
                            {currentProj.description}
                        </p>
                    </div>
                </div>
                <div className={s.btns_container}>
                    <button
                        onClick={prev}
                        className={cn(
                            s.blurred_back,
                            s.slider_btn
                        )}
                    >
                        <ArrowLeft 
                            className="w-4.5 h-4.5"
                        />
                    </button>
                    <div className={cn(
                        s.blurred_back,
                        s.page_pagination_display
                    )}>
                        <GalleryHorizontalEnd />
                        <span>
                            {`${activeIndex + 1}/${furnishers.length}`}
                        </span>
                    </div>
                    <button
                        onClick={next}
                        className={cn(
                            s.blurred_back,
                            s.slider_btn
                        )}
                    >
                        <ArrowRight 
                            className="w-4.5 h-4.5"
                        />
                    </button>
                </div>
            </div>
        </ImagesSliderBackground>
    )
}
