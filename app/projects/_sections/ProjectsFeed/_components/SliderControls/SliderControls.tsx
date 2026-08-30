"use client";

import s from "./style.module.scss";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction, useState } from "react";
import { Project } from "@/types/Project";
import {
    ProjectInfo,
    ControlsBtns,
    ExtandableDescription,
} from "./_components/index"

export const SliderControls = ({
    project,
    projId,
    projectLen,
    setProjId,
}: {
    project: Project | null;
    projId: number;
    projectLen: number;
    setProjId: Dispatch<SetStateAction<number>>;
})=> {
    const [isExtended, setIsExtended] = useState(false);

    return (
        <>
            {project && 
                <div className={s.tunnel}>
                    <div className={s.elevator}>
                        <div className={cn(
                            s.controls_panel,
                        )}>
                            <ProjectInfo 
                                tags={project.tags}
                                type={project.type}
                                name={project.name}
                            />
                            
                            <ExtandableDescription 
                                description={project.cover_description}
                                isExtended={isExtended}
                            />

                            <ControlsBtns
                                projId={projId}
                                projectLen={projectLen}
                                isExtended={isExtended}
                                setIsExtended={setIsExtended}
                                setProjId={setProjId}
                            />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
