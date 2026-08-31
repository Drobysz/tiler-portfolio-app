import { monserrat_regular } from "@/fonts/fonts"
import { cn } from "@/lib/utils"
import s from "./style.module.scss";

export const ProjectInfo = ({
    type,
    tags,
    name,
}: {
    type: string;
    tags: string[];
    name: string;
})=> {
    return (
        <div className={s.upper_part}>
            <div className="flex items-center">
                <h2 className={s.logo_title}>
                    {type.split(" ").map((w, i)=> 
                        <span
                            key={`logo-${name}-${w}-${i}`}
                        >
                            {w}
                        </span>
                    )}
                </h2>
            </div>
            <div 
                className={s.separator}
            />
            <div className={s.title_container}>
                <ul className="flex gap-x-8 gap-y-0.5 flex-wrap max-[760px]:gap-x-4">
                    {tags.map((t, i)=>         
                        <li 
                            key={`${name}-${i}`}
                            className={cn(
                                monserrat_regular.className,
                                s.tag
                            )}
                        >
                            {t}
                        </li>
                    )}
                </ul>

                <h3 className={s.title}>
                    {name}
                </h3>
            </div>
        </div>
    )
}