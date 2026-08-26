"use client";

import { motion } from "framer-motion";
import s from "./style.module.scss";

export const Line = ()=> {
    return (
        <motion.div 
            className={s.line}
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