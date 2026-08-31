"use client";

import { useContext, useEffect } from "react";
import s from "./style.module.scss";
import { GlobalContext } from "@/app/context/global.context";
import { useWindowWidth } from "@/hooks";
import { X } from "lucide-react";
import {
    Navigation,
} from "@/components";
import {
    CentralizedLogo,
    InfoList,
    Cross,
} from "./_components";
import { usePathname } from "next/navigation";

export const MenuWindow = ()=> {
    const pathname = usePathname();

    const { 
        isMenuWindowOpen,
        setIsMenuOpen,
    } = useContext(GlobalContext);
    const isDesktop = useWindowWidth(660) as boolean;

    useEffect(
        ()=> setIsMenuOpen(false), 
        [pathname, setIsMenuOpen]
    );

    return (
        <aside 
            className={s.menu_window_container}
            hidden={!isMenuWindowOpen || isDesktop}
        >
            <div 
                className={s.menu_window}
            >
                <Cross 
                    setIsMenuOpen={setIsMenuOpen}
                />
                <div className="flex flex-col justify-between">
                    <CentralizedLogo />
                    <Navigation />
                    <InfoList />
                </div>
            </div>
        </aside>
    )
}
