"use client";

import { useContext } from "react";
import s from "./style.module.scss";
import { GlobalContext } from "@/app/context/global.context";

export const MenuBtn = ()=> {
    const { setIsMenuOpen } = useContext(GlobalContext)

    return (
        <button
            className={s.menu_btn}
            onClick={()=> setIsMenuOpen(p => !p)}
        >
            Menu +
        </button>
    )
}