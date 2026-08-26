import { SplitByRowsText } from "@/components/animations/Texts/SplitByRowsText/SplitByRowsText"
import s from "./style.module.scss";

export const Title = ()=> {
    return (
        <h1 className={s.title}>
            <SplitByRowsText
                tag="span"
            >
                Je maîtrise
            </SplitByRowsText>

            <SplitByRowsText
                tag="span"
            >
                l&lsquo;art du
            </SplitByRowsText>

            <SplitByRowsText
                tag="span"
            >
                carrelage.                    
            </SplitByRowsText>
        </h1>
    )
}