"use client";

import s from "./style.module.scss";

export const VideoPlayer = ()=> {
    return (
        <video
            autoPlay
            muted
            loop
            poster="/poster.jpg"
            className={s.video_tag_centralize}
        >
            <source 
                src="dp_video.webm"
                type="video/webm"
            />
        </video>
    )
}