"use client";

import { cn } from "@/lib/utils";
import s from "./style.module.scss";
import {
    Logo,
    Navigation,
} from "./_components";
import { SMbar } from "@/components/SMbar/SMbar";
import social_medias from "@/json/sm_list.json";

export const Footer = ({
    className
}: {
    className?: string;
})=> {
    return (
        <footer
            className={cn(
                className,
                s.wrapper,
            )}
        >
            <div className={cn(s.footer)}>
                <div className="flex flex-col justify-between">
                    <Logo />
                    <div className="flex flex-col gap-2">
                        <span>
                            {`DP Carrelage copyright © ${(new Date).getFullYear().toString()}`}
                        </span>
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
        </footer>
    )
}
