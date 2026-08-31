import { SplitByRowsText } from "@/components/animations/Texts/SplitByRowsText/SplitByRowsText"
import LogoIcon from "@/assets/logo_tiler_custom.svg"
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useWindowWidth } from "@/hooks";

export const Logo = ({
    isNarrowed,
    isDesktop,
}: {
    isNarrowed: boolean;
    isDesktop: boolean;
})=> {
    const router = useRouter();
    const isNotMobile = useWindowWidth(370) as boolean;
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
            {((!isNarrowed || !isDesktop) && isNotMobile) &&
                <>
                    <SplitByRowsText
                        tag="span"
                        className={cn(
                            "text-black whitespace-nowrap",
                            isDesktop 
                                ? "text-black"
                                : "text-white"
                        )}
                    >
                        D.P CARRELAGES
                    </SplitByRowsText>
                    <div className="h-full py-1.5">
                        <div 
                            className={cn(
                                "h-full w-px",
                                isDesktop 
                                    ? "bg-black"
                                    : "bg-white"
                            )}
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
                    isNarrowed || !isDesktop
                        ? "text-white scale-130"
                        : "text-black"
                )}
                onClick={()=> router.push("/")}
            />
        </span>
    )
}