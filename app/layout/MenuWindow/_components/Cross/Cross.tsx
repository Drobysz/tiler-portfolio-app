"use client";

import { Dispatch, SetStateAction } from "react";
import { X } from "lucide-react";
import s from "./style.module.scss";

export const Cross = ({
    setIsMenuOpen
}: {    
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>
})=> {
    return (
        <div className="flex justify-end">
            <button
                onClick={()=> setIsMenuOpen(false)}
                className={s.cross}
            >
                <X />
            </button>
        </div>
    )
}