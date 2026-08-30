"use client";

import { motion } from "framer-motion";
import LogoIcon from "@/assets/logo_tiler_custom.svg";

export const FooterPosterLogo = ({
    classNames
}: {
    classNames?: string;
})=> {
    return (
        <motion.div
            viewport={{
                once: true,
            }}
            initial={{
                rotate: 45
            }}
            whileInView={{
                rotate: 275
            }}
            transition={{
                duration: 1.5,
                ease: [0.34, 1.56, 0.64, 1],
            }}
        >
            <LogoIcon
                className={classNames}
            />
        </motion.div>
    )
}