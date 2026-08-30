import Link from "next/link"
import s from "./style.module.scss"
import { trade_winds } from "@/fonts/fonts"
import { cn } from "@/lib/utils"

export const DeveloperLink = ()=> {
    return (
        <Link
            href="https://drobysz.vercel.app/fr"
            target="_blank"
            className={cn(
                trade_winds.className,
                "pt-3"
            )}
        >
            <span className={s.dev_title}>
                Drobysz
            </span>
        </Link>
    )
}