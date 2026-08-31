import ScrollVelocity from "@/components/animations/ScrollVelocity/ScrollVelocity"
import { SectContainer } from "@/components/containers/SectContainer/SectContainer"
import s from "./style.module.scss";

export const ServiceAnimationFeed = ()=> {
    return (
        <SectContainer
            className={s.feed_container}
        >
            <div
                className={s.deformed}
            >
                <ScrollVelocity
                    texts={[
                        'Carrelage • Faïence •', 
                        'Parquet • Panneaux décoratifs •',
                    ]} 
                    velocity={100}
                    className="custom-scroll-text"
                    damping={50}
                    stiffness={400}
                />
            </div>
        </SectContainer>
    )
}
