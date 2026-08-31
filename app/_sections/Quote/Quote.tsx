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
            <div className={s.inner_content}>
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
                            Pour moi, un beau résultat se joue dans les détails. 
                            Chaque pose demande de la précision, de la patience 
                            et une attention particulière aux finitions.
                        <QuotionMark />
                    </p>
                </ViewReveal>
            </div>
        </SectContainer>
    )
}