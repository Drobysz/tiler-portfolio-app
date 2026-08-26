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
                Mes services
            </SplitText>

            <SplitByRowsText
                tag="p"
                className={s.desc}
            >
                Ma vision ne prend vie que 
                grâce aux principes qui guident 
                notre façon de travailler, de créer 
                et d&lsquo;aller de l&lsquo;avant au quotidien.
            </SplitByRowsText>
        </header>
    )
}