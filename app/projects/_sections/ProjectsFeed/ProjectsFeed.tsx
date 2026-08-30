"use client";

import { GlidingImageBackground } from "@/components";
import { SliderControls } from "./_components";
import { useEffect, useState } from "react";
import projects from "@/json/projects.json";

export const ProjectsFeed = ()=> {
    const [projId, setProjId] = useState(0);
    const projectLen = projects.length;

    useEffect(()=> {
        const elements = projects.map(p=> document.getElementById(p.id))
            .filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries)=> {
                entries.map(entry=> {
                    if (!entry.isIntersecting) return;

                    const index = projects.findIndex(proj =>
                        proj.id === entry.target.id
                    )

                    if (index != -1) {
                        setProjId(index);
                    }
                })
            },
            {
                rootMargin: "-45% 0px -45% 0px",
                threshold: 0
            }
        )

        elements.map(el => observer.observe(el));

        return ()=> {
            observer.disconnect();
        }
    }, []);

    return (
        <section
            className="relative"
        >
            {projects.map((p, i)=>
                <GlidingImageBackground
                    id={p.id}
                    key={`${p.name}-${i}`}
                    scaling={false}
                    img_url={p.cover_img_url}
                    className="h-screen w-full"
                >
                    <></>
                </GlidingImageBackground>
            )}
            <SliderControls 
                project={projects[projId ?? 0]}
                projId={projId ?? 0}
                projectLen={projectLen}
                setProjId={setProjId}
            />
        </section>
    )
}
