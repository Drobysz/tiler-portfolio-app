import { monserrat_regular } from "@/fonts/fonts"
import { cn } from "@/lib/utils"
import s from "./style.module.scss";
import { Fragment } from "react";

export const InfoList = ()=> {
    const listInfo = [
        "06 78 32 20 60",
        "didier.puget70@gmail.com",
        "25580 ETALANS",
        "22 rue de la pissoire",
        `DP Carrelage copyright © ${(new Date).getFullYear().toString()}`,
    ];

    return (
        <div className={cn(
            s.infoList,
            monserrat_regular.className
        )}>
            {listInfo.map((el, id)=>
                <Fragment
                    key={`${el}-${id}`}
                >
                    <span>
                        {el}
                    </span>
                </Fragment>
            )}
        </div>
    )
}