"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export const MainBtn = ({
    size="md",
    color="gray",
    withArrow=false,
    children,
}: {
    size?: "lg" | "md" | "sm";
    children: ReactNode;
    color?: "gray" | "green";
    withArrow?: boolean;
})=> {
    const [hover, setHover] = useState(false);
    const [signWidth, setSignWidth] = useState(0);
    const ref = useRef<HTMLSpanElement | null>(null);

    const transitionFast = "transition-transform duration-150 ease-in";
    const transitionSlow = "transition-transform duration-450 ease-out";
    const iconSizes = {
        ["scale-75"]: size === "lg",
        ["scale-65"]: size === "md",
        ["scale-55"]: size === "sm",
    };
    const widthBufferSizeGrid = {
        "lg": 36,
        "md": 24,
        "sm": 20,
    };

    const btnWidth = withArrow 
        ? `${signWidth + widthBufferSizeGrid[size]}px` 
        : "fit-content";

    useEffect(()=>{
        if (!ref.current) return;
        setSignWidth(ref.current.offsetWidth);

    }, [])

    console.log(signWidth)

    return (
        <button
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
            type="button"
            className={cn(
                "backdrop-blur-3xl w-fit", 
                "overflow-hidden relative", 
                "inline-flex items-center",
                "transition-transform duration-150", 
                "active:scale-95", {
                    ["font-medium text-xl px-4.5 py-2 rounded-2xl"]: size === "lg",
                    ["text-base px-3 py-1.5 rounded-xl"]: size === "md",
                    ["text-sm px-2 py-1 rounded-xl"]: size === "sm",

                    ["bg-gray-400/50 hover:bg-gray-500/70"]: color === "gray",
                    ["bg-primary-400/70 hover:bg-primary-400/90"]: color === "green",
                }
            )}
            style={{ width: btnWidth }}
        >
            {withArrow &&
                <span
                    className={cn(
                        "inline-flex items-center gap-2",
                        transitionFast,
                        hover 
                            ? "-translate-x-4" 
                            : "-translate-x-7"
                    )}
                >
                    <ArrowRight
                        className={cn(
                            "pt-0.5",
                            transitionSlow,
                            iconSizes,
                            hover 
                                ? "translate-x-3" 
                                : "-translate-x-2" 
                        )}
                    />
                    <span
                        ref={ref}
                        className={cn(
                            transitionSlow,
                            "inline-flex items-center gap-2",
                            hover && "translate-x-0.5"  
                        )}
                    >
                        {children}
                        <ArrowRight
                            className={cn(
                                "scale-65 pt-0.5",
                                transitionFast,
                                iconSizes,
                                hover && "translate-x-5" 
                            )}
                        />
                    </span>
                </span>
            }
            {!withArrow && 
                children
            }
        </button>
    )
}
