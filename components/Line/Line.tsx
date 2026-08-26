"use client";

import { motion } from "framer-motion";
import s from "./style.module.scss";
import { cn } from "@/lib/utils";

export const Line = ({
    className
}: {
    className?: string;
})=> {
    return (
        <motion.div 
            className={cn(className, s.line)}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{
                once: true,
            }}
            transition={{
                mass: 0.1,
                stiffness: 150,
                damping: 12,
                duration: 1.5
            }}
        />
    )
}