import { SplitByRowsText } from "@/components/animations/Texts/SplitByRowsText/SplitByRowsText"
import s from "./style.module.scss";

export const Title = ()=> {
    return (
        <h1 className={s.title}>
            <SplitByRowsText
                tag="span"
            >
                {"I'm good"}
            </SplitByRowsText>

            <SplitByRowsText
                tag="span"
            >
                at laying
            </SplitByRowsText>

            <SplitByRowsText
                tag="span"
            >
                tile                    
            </SplitByRowsText>
        </h1>
    )
}