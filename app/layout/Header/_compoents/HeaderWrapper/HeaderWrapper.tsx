"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HeaderWrapper = ({
    className,
    isNarrowed,
    // direction,
    isDesktop,
    children,
}: {
    className: string;
    isNarrowed: boolean;
    isDesktop: boolean;
    children: ReactNode;
    // direction: "down" | "up";
})=> {
    return (
        <motion.div
            className={cn(
                className,
                "flex gap-8 z-100 rounded-xl mx-auto py-1 pr-1.5 pl-3",
                (isNarrowed || !isDesktop) && "bg-gray-900/90"
            )}
            animate={{
                backdropFilter: (isNarrowed || !isDesktop) ? "blur(10px)" : "none",
                boxShadow: (isNarrowed || !isDesktop)
                    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: (isNarrowed && isDesktop) ? "fit-content" : "100%",
                justifyContent: "space-between",
                y: isNarrowed ? -30 : 0,
                // opacity: direction === "down" ? 0 : 100,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
        >
            {children}
        </motion.div>
    )
}