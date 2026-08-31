"use client";

import { SectContainer } from "@/components/containers/SectContainer/SectContainer";
import s from "./style.module.scss";
import { SplitText } from "@/components/animations/Texts/SplitText/SplitText";
import tilerParams from "./tileParams";
import {
    TilerCard,
    ParamBlock,
} from "./_components";

export const WorkerAbout = ()=> {
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
                        <h3 className={s.params_title}>
                            Un travail précis pour durer
                        </h3>

                        <p className={s.params_subtitle}>
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
                <TilerCard />
            </div>
        </SectContainer>
    )
}