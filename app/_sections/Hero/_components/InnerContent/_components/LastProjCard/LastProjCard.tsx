"use client";

import Link from "next/link";
import s from "./style.module.scss";
import Image from "next/image";
import { ViewReveal } from "@/components/animations/ViewReveal/ViewReveal";
import { SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { monserrat_regular } from "@/fonts/fonts";

export const LastProjCard = ()=> {
    const [hover, setHover] = useState(false);
    const transition = "duration-150 transition-transform ease-in";

    return (
        <Link
            href="/projects"
            className="max-[1040px]:w-full"
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
        >
            <ViewReveal
                as="article"
                className={cn(
                    s.latest_proj_card,
                    "bg-primary-800/10"
                )}
            >
                <div className={s.image_wrapper}>
                    <Image
                        className={cn(
                            s.image,
                            transition,
                            hover && "scale-103"
                        )}
                        src="/last_proj.jpg"
                        alt="Last project"
                        fill
                        sizes="272px"
                    />
                </div>
                <div className={s.inner_content}>
                    <p className={cn(
                        monserrat_regular.className,
                        s.tag,
                    )}>
                        Dernier projet
                    </p>

                    <div className="flex items-center justify-between">
                        <h2 className={s.title}>
                            Découvrez le projet
                        </h2>
                        <div
                            className={cn(
                                hover && "scale-115",
                                transition
                            )}
                        >
                            <SquareArrowOutUpRight 
                                className="w-4 h-4"
                            />
                        </div>
                    </div>
                </div>
            </ViewReveal>
        </Link>
    )
}
