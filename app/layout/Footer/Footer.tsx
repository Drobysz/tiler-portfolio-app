"use client";

import { cn } from "@/lib/utils";
import s from "./style.module.scss";
import {
    Logo,
    ExtendingPoster,
    InfoLine,
    DeveloperLink,
} from "./_components";
import { Navigation } from "@/components";
import { SMbar } from "@/components/SMbar/SMbar";
import social_medias from "@/json/sm_list.json";

export const Footer = ({
    className
}: {
    className?: string;
})=> {
    return (
        <footer className="flex flex-col">
            <div
                className={cn(
                    className,
                    s.wrapper,
                )}
            >
                <div className={cn(s.footer)}>
                    <div className={s.logo_container}>
                        <Logo />
                        <div className="flex flex-col gap-2">
                            <h2 className={s.title}>
                                <span>
                                    Développé par
                                </span>
                                <DeveloperLink />
                            </h2>    
                        </div>
                    </div>
                    <div className={s.nav_container}>
                        <Navigation 
                            className="pb-10"
                        />
                        <SMbar
                            className={s.sm_bar_shift}
                            SMList={social_medias}
                        />
                    </div>
                </div>
            </div>
            <InfoLine />
            <ExtendingPoster />
        </footer>
    )
}
