"use client";

import { SectContainer } from "@/components/containers/SectContainer/SectContainer"
import { motion } from "framer-motion";
import s from "./style.module.scss";
import { cn } from "@/lib/utils";
import { monserrat_medium } from "@/fonts/fonts";
import { ViewReveal } from "@/components/animations/ViewReveal/ViewReveal";
import { SplitText } from "@/components/animations/Texts/SplitText/SplitText";
import {
    QuotionMark,
    Line,
} from "./_components"

export const Quote = ()=> {
    return (
        <SectContainer
            className={s.quote_container}
        >
            <Line />
            <div className="grid grid-cols-2 gap-4">
                <SplitText 
                    className={s.title}
                    tag="h2"
                >
                    Didier Puget
                </SplitText>
                <ViewReveal>
                    <p className={cn(
                        s.quote,
                        monserrat_medium.className
                    )}>
                        <QuotionMark />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Est, quis accusantium cupiditate aspernatur iusto veniam 
                            impedit optio obcaecati neque voluptatem facilis consectetur 
                            aut earum magni esse tempore laboriosam quia error.
                        <QuotionMark />
                    </p>
                </ViewReveal>
            </div>
        </SectContainer>
    )
}