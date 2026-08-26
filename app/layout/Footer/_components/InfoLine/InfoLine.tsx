import { monserrat_regular } from "@/fonts/fonts"
import { cn } from "@/lib/utils"
import s from "./style.module.scss";

export const InfoLine = ()=> {
    return (
        <div className={cn(
            s.line_info,
            monserrat_regular.className
        )}>
            <span>
                {`DP Carrelage copyright © ${(new Date).getFullYear().toString()}`}
            </span>
            <span className="scale-250 origin-center pb-0.5">
                •
            </span>
            <span>06 78 32 20 60
            </span>
            <span className="scale-250 origin-center pb-0.5">
                •
            </span>
            <span>
                didier.puget70@gmail.com
            </span>
            <span className="scale-250 origin-center pb-0.5">
                •
            </span>
            <span>
                22 rue de la pissoire
            </span>
            <span className="scale-250 origin-center pb-0.5">
                •
            </span>
            <span>
                25580 ETALANS
            </span>
        </div>
    )
}