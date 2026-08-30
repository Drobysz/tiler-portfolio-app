import ScrollVelocity from "@/components/animations/ScrollVelocity/ScrollVelocity"
import { SectContainer } from "@/components/containers/SectContainer/SectContainer"

export const ServiceAnimationFeed = ()=> {
    return (
        <SectContainer
         className="pt-60 pb-30"
        >
            <div
                className="scale-115 rotate-3"
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
