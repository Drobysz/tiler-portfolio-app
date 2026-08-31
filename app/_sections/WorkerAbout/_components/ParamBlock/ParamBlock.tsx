"use client";

import { Line } from "@/components";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useState } from "react";
import s from "./style.module.scss";

export const ParamBlock = ({
    label,
    icon: Icon,
}: {
    label: string;
    icon: LucideIcon
})=> {
    const [hover, setHover] = useState(false);
    const transition = "duration-450 ease-out transition-transform"

    return (
        <li
            className={s.param_block_container}
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
        >
            <span className={s.param_block}>
                <Icon 
                    className={s.icon}
                />
                <span>
                    {label}
                </span>
            </span>

            <Line
                className={cn(
                    transition,
                    hover && "scale-x-120"
                )}
            />
        </li>
    )
}