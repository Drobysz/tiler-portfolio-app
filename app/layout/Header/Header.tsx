"use client";

import { cn } from "@/lib/utils";
import s from "./style.module.scss";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import {
    HeaderWrapper,
    Logo,
    Navigation,
    MenuBtn,
} from "./_compoents";
import { usePathname } from "next/navigation";
import { useWindowWidth } from "@/hooks";

export const Header = ()=> {
    const { scrollY } = useScroll();
    const [narrowed, setNarrowed] = useState(false);
    const pathname = usePathname();
    const isMainPage = pathname === "/";
    const isDesktop = useWindowWidth(660) as boolean;
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
                isDesktop={isDesktop}
                // direction={direction}
            >
                <Logo 
                    isNarrowed={narrowed}
                    isDesktop={isDesktop}
                />
                {isDesktop &&
                    <Navigation 
                        isNarrowed={narrowed}
                        isMainPage={isMainPage}
                    />
                }

                {!isDesktop &&
                    <MenuBtn />
                }
            </HeaderWrapper>
        </header>
    )
}
