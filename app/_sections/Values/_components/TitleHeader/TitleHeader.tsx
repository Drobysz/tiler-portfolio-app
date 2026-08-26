import { SplitByRowsText } from "@/components/animations/Texts/SplitByRowsText/SplitByRowsText"
import s from "./style.module.scss";
import { SplitText } from "@/components/animations/Texts/SplitText/SplitText";

export const TitleHeader = ()=> {
    return (
        <header
            className="grid grid-cols-2"
        >
            <SplitText
                className={s.title}
                tag="h2"
                animationType="unwrapping"
            >
                My values
            </SplitText>

            <SplitByRowsText
                tag="p"
                className={s.desc}
            >
                My Vision only becomes real through 
                the principles that guide how we work, 
                create, and move forward every day.
            </SplitByRowsText>
        </header>
    )
}