"use client";

import { SectContainer } from "@/components/containers/SectContainer/SectContainer";
import s from "./style.module.scss";
import { TitleHeader } from "./_components/TitleHeader/TitleHeader";
import values from "./valuesList";
import Image from "next/image";
import { Line } from "@/components";
import { SplitText } from "@/components/animations/Texts/SplitText/SplitText";
import { ViewReveal } from "@/components/animations/ViewReveal/ViewReveal";

export const Values = ()=> {

    return (
        <div className="bg-black rounded-2xl">
            <SectContainer
                className={s.values_container}
            >
                <TitleHeader />
                <ul className="flex flex-col gap-5">
                    {values.map((val, idx)=>

                        <li
                            key={`val-${val.label}-${idx}`}
                        >
                            <ViewReveal
                                className={s.value_block}
                            >
                                <Image
                                    src={val.img}
                                    className="max-h-50 w-auto rounded-xl"
                                    width={500}
                                    height={240}
                                    alt="value tile icon"
                                />
                                <div className={s.value_block__line_space}>
                                    <div className="opacity-50">
                                        <Line />
                                    </div>
                                    <div 
                                        className={s.value_block__text_markup}
                                    >
                                        <SplitText 
                                            className={s.value_block__title}
                                            tag="h3"
                                        >
                                            {val.label}
                                        </SplitText>
                                        <p 
                                            className="text-zinc-400"
                                        >
                                            {val.desc}
                                        </p>
                                    </div>
                                </div>
                            </ViewReveal>
                        </li>
                    )}
                </ul>
            </SectContainer>
        </div>
    )
}
