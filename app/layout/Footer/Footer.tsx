"use client";

import { cn } from "@/lib/utils";
import s from "./style.module.scss";
import {
    Logo,
    Navigation,
    ExtendingPoster,
    InfoLine,
} from "./_components";
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
                    <div className="flex flex-col justify-between text-white">
                        <Logo />
                        <div className="flex flex-col gap-2">
                            <h2 className={s.title}>
                                À votre service
                            </h2>    
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Navigation />
                        <SMbar
                            className="-translate-x-5"
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
