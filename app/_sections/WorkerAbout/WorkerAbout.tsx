"use client";

import ProfileCard from "@/components/Cards/ProfileCard";
import { SectContainer } from "@/components/containers/SectContainer/SectContainer";
import s from "./style.module.scss";
import {
    BriefcaseBusiness,
    UserShield,
    ShieldLock,
    GraduationCap,
    LucideIcon,
} from "lucide-react";
import { SplitText } from "@/components/animations/Texts/SplitText/SplitText";
import { ViewReveal } from "@/components/animations/ViewReveal/ViewReveal";
import { Line } from "@/components";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ParamBlock = ({
    label,
    icon: Icon,
}: {
    label: string;
    icon: LucideIcon
})=> {
    const [hover, setHover] = useState(false);
    const transition = "duration-450 ease-out transition-transform"

    return (
        <li
            className="flex flex-col gap-2 pr-5"
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
        >
            <span className={s.param_block}>
                <Icon 
                    className="w-6 h-6"
                />
                <span>
                    {label}
                </span>
            </span>

            <Line 
                className={cn(
                    transition,
                    hover && "scale-x-120"
                )}
            />
        </li>
    )
}

export const WorkerAbout = ()=> {
    const tilerParams = [
        { label: "+4,5 ans d'expérience", icon: BriefcaseBusiness },
        { label: "Minicieux", icon: UserShield },
        { label: "10 ans d'assurance", icon: ShieldLock },
        { label: "CAP de carreleur", icon: GraduationCap },
    ];

    return (
        <SectContainer
            className={s.about_container}
        >
            <SplitText 
                className={s.title}
                tag="h2"
                animationType="unwrapping"
            >
                Profil du carreleur
            </SplitText>

            <div className={s.data_space}>
                <div className="flex flex-col justify-between items-end py-12">
                    <div className="flex flex-col">
                        <h3 className="text-3xl font-medium text-end">
                            Un travail précis pour durer
                        </h3>

                        <p className="text-end text-zinc-500 text-sm">
                            Carrelage • Faïence • Parquet • Panneaux décoratifs
                        </p>
                    </div>
                    <ul className={s.paramsSpace}>
                        {tilerParams.map((param, idx)=>
                            <ParamBlock
                                key={`tiler-param-${idx}`}
                                label={param.label}
                                icon={param.icon}
                            />
                        )}
                    </ul>
                </div>
                <ViewReveal>
                    <ProfileCard
                        className="z-10"
                        name="Didier Puget"
                        title="+4,5 ans d'expérience en tant que carreleur"
                        handle="tiles"
                        status="Online"
                        contactText="Contact Me"
                        avatarUrl="/tiler/tiler.png"
                        showUserInfo={false}
                        enableTilt={true}
                        enableMobileTilt={false}
                        onContactClick={() => console.log('Contact clicked')}
                        behindGlowColor="rgba(125, 190, 255, 0.67)"
                        behindGlowEnabled={true}
                        innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                    />
                </ViewReveal>
            </div>
        </SectContainer>
    )
}