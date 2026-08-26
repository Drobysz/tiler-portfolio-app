import { cn } from "@/lib/utils";
import s from "./style.module.scss";

export const SectionOverlays = ({
    isNarrowed
}: {
    isNarrowed: boolean;
})=> {
    return (
        <>
            {!isNarrowed && 
                <div 
                    className={s.video_shadow}
                />
            }
            <p 
                className={cn(
                    s.scrollTitle,
                    !isNarrowed && "opacity-0"
                )}
            >
                Scroll down
            </p>
        </>
    )
}