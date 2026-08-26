"use client";

import LogoIcon from "@/assets/logo_tiler_custom.svg";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Logo = ()=> {
    const [hover, setHover] = useState(false);
    const router = useRouter();

    return (
        <div className={cn(
            "scale-400 origin-top-left cursor-pointer w-fit",
            "transition-transform duration-300 ease-out",
            "-translate-x-1.5"
        )}>
            <LogoIcon 
                className={cn(
                    "transition-transform",
                    "duration-800 ease-out text-white",
                    "hover:scale-120 active:scale-100",
                    hover && "rotate-135",
                )}
                onMouseEnter={()=> setHover(true)}
                onMouseLeave={()=> setHover(false)}
                onClick={()=> router.push("/")}
            />
        </div>
    )
}