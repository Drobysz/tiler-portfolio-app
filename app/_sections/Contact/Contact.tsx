import { GlidingImageBackground, MainBtn } from "@/components"
import s from "./style.module.scss";
import { SectContainer } from "@/components/containers/SectContainer/SectContainer";
import { SplitText } from "@/components/animations/Texts/SplitText/SplitText";
import { SplitByRowsText } from "@/components/animations/Texts/SplitByRowsText/SplitByRowsText";
import { ViewReveal } from "@/components/animations/ViewReveal/ViewReveal";

export const Contact = ()=> {
    return (
        <GlidingImageBackground
            img_url="/poster.jpg"
            withShadow
            className={s.section_container}
        >
            <SectContainer
                className={s.inner_spacing}
            >
                <div className={s.header}>
                    <SplitByRowsText 
                        className={s.subtitle}
                        tag="p"
                    >
                        Création de votre confort avec
                    </SplitByRowsText> 
                    <SplitText 
                        className={s.title}
                        tag="h2"
                    >
                        D.P Carrelage
                    </SplitText>
                </div>

                <ViewReveal className={s.footer}>
                    <p className={s.desc}>
                        Si mes services vous intéressent en Franche-Comté, je suis toujours à votre disposition.
                    </p>
                    <MainBtn
                        withArrow
                        size="lg"
                        color="white"
                    >
                        Contact
                    </MainBtn>
                </ViewReveal>
            </SectContainer>
        </GlidingImageBackground>
    )
}
