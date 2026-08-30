"use client";

// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils"
import s from "./style.module.scss";

export const ExtandableDescription = ({
    isExtended,
    description,
}: {
    isExtended: boolean;
    description: string;
})=> {
    return (
        <>
            {isExtended &&
                <p>
                    {description}
                </p>
            }
        </>
    )
}