import ScrollVelocity from "@/components/animations/ScrollVelocity/ScrollVelocity"
import { SectContainer } from "@/components/containers/SectContainer/SectContainer"

export const ServiceAnimationFeed = ()=> {
    return (
        <SectContainer
         className="pt-30 pb-60"
        >
            <div
                className="scale-115 rotate-3"
            >
                <ScrollVelocity
                    texts={[
                        'Carrelage • Faience •', 
                        'Parquet • Panneaux decorative •',
                    ]} 
                    velocity={100}
                    className="custom-scroll-text"
                    numCopies={6}
                    damping={50}
                    stiffness={400}
                />
            </div>
        </SectContainer>
    )
}