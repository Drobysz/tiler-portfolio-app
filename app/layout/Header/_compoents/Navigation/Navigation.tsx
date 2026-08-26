"use client";

import { cn } from "@/lib/utils";
import s from "./style.module.scss";
import { ReactNode, useState } from "react";
import Link from "next/link";

const NavElement = ({
    isNarrowed,
    isMainPage,
    href,
    className,
    children, 
}: {
    isNarrowed: boolean;
    isMainPage: boolean;
    href: string;
    className?: string;
    children: ReactNode;
})=> {
    const [hover, setHover] = useState(false);

    return (
        <li 
            className={cn(
                className,
                s.nav_element, {
                    ["before:bg-white text-white"]: isNarrowed,
                    ["before:bg-black text-black"]: !isNarrowed,
                }
            )}
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
        >
            <Link
                href={href}
            >
                <span className="whitespace-nowrap">
                    {children}
                </span>
                <span
                    className={cn(
                        "duration-600 ease-out transition-transform font-medium",
                        "absolute left-1/2 whitespace-nowrap -translate-x-1/2", {
                            ["text-black"]: isNarrowed,
                            ["text-white"]: !isNarrowed,
                            ["translate-y-0"]: hover,
                            ["translate-y-10"]: !hover,
                        }
                    )}
                >
                    {children}
                </span>
            </Link>
        </li>
    )
}


export const Navigation = ({
    isNarrowed,
    isMainPage,
}: {
    isNarrowed: boolean;
    isMainPage: boolean;
})=> {
    const pages = [
        { label: "Page d'accueil", href: "/" },
        { label: "Projets", href: "/projects" },
        { label: "Contacts", href: "/contacts" },
        { label: "Fournisseurs", href: "/furnishers" },
    ];

    return (
        <nav>
            <ul className="inline-flex gap-3">
                {pages.map((p, i)=>
                    <NavElement
                        key={`nav-item-${i}`}
                        isNarrowed={isNarrowed}
                        isMainPage={isMainPage}
                        href={p.href}
                    >
                        {p.label}
                    </NavElement>
                )}
            </ul>
        </nav>
    )
}
