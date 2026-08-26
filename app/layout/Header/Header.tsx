"use client";

import { cn } from "@/lib/utils";
import s from "./style.module.scss";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import {
    HeaderWrapper,
    Logo,
    Navigation,
} from "./_compoents";
import { usePathname } from "next/navigation";

export const Header = ()=> {
    const { scrollY } = useScroll();
    const [narrowed, setNarrowed] = useState(false);
    const pathname = usePathname();
    const isMainPage = pathname === "/";
    // const [direction, setDirection] = useState<"down" | "up">("down");

    useMotionValueEvent(scrollY, "change", (current)=> {
        if (current > 100) {
            setNarrowed(true);
        } else {
            setNarrowed(false);
        };

        // const diff = current - (scrollY.getPrevious() ?? 0);
        // setDirection(diff > 30 ? "down" : "up");
    });

    return (
        <header className={cn(
            s.wrapper,
        )}>
            <HeaderWrapper
                className={s.header}    
                isNarrowed={narrowed}
                // direction={direction}
            >
                <Logo 
                    isNarrowed={narrowed}
                />
                <Navigation 
                    isNarrowed={narrowed}
                    isMainPage={isMainPage}
                />
            </HeaderWrapper>
        </header>
    )
}