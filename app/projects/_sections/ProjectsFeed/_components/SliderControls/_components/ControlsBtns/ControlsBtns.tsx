"use client";

import { MainBtn } from "@/components";
import { SmoothScrollContext } from "@/app/layout/SmoothScroll/SmoothScroll";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useContext } from "react";
import s from "./style.module.scss";
import { 
    ArrowUp, 
    ArrowDown 
} from "lucide-react";
import projects from "@/json/projects.json";

export const ControlsBtns = ({
    projId,
    projectLen,
    isExtended,
    setIsExtended,
    setProjId,
}: {
    projId: number;
    projectLen: number;
    isExtended: boolean;
    setIsExtended: Dispatch<SetStateAction<boolean>>;
    setProjId: Dispatch<SetStateAction<number>>;
})=> {
    const router = useRouter();
    const { scrollTo } = useContext(SmoothScrollContext);

    const scrollToProject = (id: string)=> {
        const project = document.getElementById(id);

        if (project) {
            scrollTo(project, {
                block: "center",
            });
        }
    };

    const slideFeedDown = ()=> {
        const nextId = Math.min(projId + 1, projectLen - 1)
        setProjId(nextId);
        scrollToProject(projects[nextId].id);
    };

    const slideFeedUp = ()=> {
        const nextId = Math.max(0, projId - 1);
        setProjId(nextId);
        scrollToProject(projects[nextId].id);
    };

    return (
        <div className={s.control_btns_container}>
            <div className={s.btn_group}>
                <MainBtn
                    withArrow
                    size="sm"
                    icon={isExtended ? "minus" : "plus"}
                    onClick={()=> setIsExtended(p => !p)}
                >
                    {isExtended ? "Cacher info" : "Savoir plus"}
                </MainBtn>

                <MainBtn
                    withArrow
                    size="sm"
                    icon="link"
                    onClick={()=> router.push("/contacts")}
                >
                    Contactez-moi
                </MainBtn>
            </div>

            <div className={s.btn_group}>
                <MainBtn
                    size="sm"
                    className="h-full"
                    onClick={slideFeedUp}
                >
                    <ArrowUp 
                        className="w-4 h-4 text-zinc-500"
                    />
                </MainBtn>
                
                <span className="text-lg">
                    {`${projId + 1}/${projectLen}`}
                </span>

                <MainBtn
                   size="sm"
                   className="h-full"
                   onClick={slideFeedDown}
                >
                    <ArrowDown 
                        className="w-4 h-4 text-zinc-500"
                    />
                </MainBtn>
            </div>
        </div>
    )
}
