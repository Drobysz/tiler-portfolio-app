import { ReactNode } from "react";
import s from "./style.module.scss";
import { cn } from "@/lib/utils";

export const SectContainer = ({
    children,
    className
}: {
    children: ReactNode,
    className?: string
})=> {
    return (
        <section className={s.centralize}>
            <div className={cn(
                className,
                s.main,
                "min-w-0 w-full"
            )}>
                {children}
            </div>
        </section>
    )
}