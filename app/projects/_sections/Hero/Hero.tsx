import PixelSwap from "@/components/animations/PixelSwap/PixelSwap";
import s from "./style.module.scss";
import AscendingImagesBackground from "@/components/AscendingImagesBackground/AscendingImagesBackground";

export const Hero = ()=> {
    return (
        <section className="relative w-full h-screen">
            <PixelSwap
                className="h-full"
                aspectRatio="auto"
                firstContent={
                    <div className={s.title_back}>
                        <h1>D.P Carrelages</h1>
                    </div>
                }
                secondContent={
                    <div className={s.title_front}>
                        <AscendingImagesBackground />
                        <h1 className={s.title_front__rows}>
                            <span>
                                Un portfolio
                            </span>
                            <span className="pl-10">
                                regroupant de
                            </span>
                            <span className="pl-16">
                                nombreuses
                            </span>
                            <span className="pl-12">
                                œuvres
                            </span>
                        </h1>
                    </div>
                }
                pixelSize={128}
                gap={0}
                pixelRadius={0}
                pixelSpin={0}
                pixelScale={0.45}
                duration={2600}
                pixelDuration={450}
                pattern="random"
                randomness={0}
                fade
                trigger="viewport"
                viewportThreshold={0.25}
            />
        </section>
    )
}
