import { SplitByRowsText } from "@/components/animations/Texts/SplitByRowsText/SplitByRowsText"
import LogoIcon from "@/assets/logo_tiler_custom.svg"
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Logo = ({
    isNarrowed
}: {
    isNarrowed: boolean;
})=> {
    const router = useRouter();
    const [hover, setHover] = useState(false);

    return (
        <span 
            className={cn(
                "inline-flex items-center gap-1",
                ""
            )}
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
        >
            {!isNarrowed &&
                <>
                    <SplitByRowsText
                        tag="span"
                        className="text-black whitespace-nowrap"
                    >
                        D.P CARRELAGES
                    </SplitByRowsText>
                    <div className="h-full py-1.5">
                        <div 
                            className="h-full bg-black w-px"
                        />
                    </div>
                </>
            }

            <LogoIcon 
                className={cn(
                    "cursor-pointer transition-transform",
                    "duration-300 ease-out hover:scale-170",
                    "active:scale-135",
                    hover && "rotate-160",
                    isNarrowed 
                        ? "text-white scale-130"
                        : "text-black"
                )}
                onClick={()=> router.push("/")}
            />
        </span>
    )
}