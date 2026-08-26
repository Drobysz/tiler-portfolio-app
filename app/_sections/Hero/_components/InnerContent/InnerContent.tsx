import s from "./style.module.scss";
import {
    Title,
    LastProjCard,
} from "./_components";

export const InnerContent = ()=> {
    return (
        <div className={s.inner_content}>
            <Title />
            <LastProjCard />
        </div>
    )
}