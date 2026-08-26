"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
import { SplitByRowsText } from "@/components/animations/Texts/SplitByRowsText/SplitByRowsText";

const NavElement = ({
    href,
    isListHovered,
    className,
    children, 
}: {
    href: string;
    isListHovered: boolean
    className?: string;
    children: string;
})=> {
    const [hover, setHover] = useState(false);
    const isHighlighted = !isListHovered || hover;
    const transition = "transition-colors duration-100 ease-linear";

    return (
        <li
            className={className}
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
        >
            <Link
                href={href}
                className={cn(
                    "flex flex-col gap-1",
                    "text-3xl font-semibold",
                    "py-1",
                    transition,
                    isHighlighted 
                        ? "text-white" 
                        : "text-white/60"
                )}
            >
                <SplitByRowsText
                    tag="span"
                    className="whitespace-nowrap"
                >
                    {children}
                </SplitByRowsText>

                <hr 
                    className={cn(
                        "h-px rounded-3xl",
                        transition,
                        isHighlighted 
                            ? "text-gray-600"
                            : "text-gray-600/50"
                    )}
                />
            </Link>
        </li>
    )
}


export const Navigation = ()=> {
    const [hover, setHover] = useState(false);

    const pages = [
        { label: "Main Page", href: "/" },
        { label: "Projets", href: "/projects" },
        { label: "Contacts", href: "/contacts" },
    ];

    return (
        <nav
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
        >
            <ul className="flex flex-col pb-10">
                {pages.map((p, i)=>
                    <NavElement
                        key={`nav-item-${i}`}
                        href={p.href}
                        isListHovered={hover}
                    >
                        {p.label}
                    </NavElement>
                )}
            </ul>
        </nav>
    )
}
