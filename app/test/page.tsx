import { MainBtn } from "@/components/Buttons/MainBtn/MainBtn";
import { UnderlinedInnerLink } from "@/components/UnderlinedLink/UnderlinedInnerLink";
import { UnderlinedLink } from "@/components/UnderlinedLink/UnderlinedLink";

export default function TestPage () {
    return (
        <div className="p-10 flex flex-col gap-5 bg-primary-500">
            <MainBtn
                size="lg"
            >
                test
            </MainBtn>

            <MainBtn
                size="md"
            >
                test
            </MainBtn>

            <MainBtn
                size="sm"
            >
                test
            </MainBtn>

            <MainBtn
                withArrow
                size="lg"
            >
                test
            </MainBtn>

            <MainBtn
                withArrow
                size="md"
            >
                test
            </MainBtn>

            <MainBtn
                withArrow
                size="sm"
            >
                test
            </MainBtn>

            <UnderlinedLink
                href="#"
                className="text-white"
            >
                LinkedIn
            </UnderlinedLink>

            <UnderlinedInnerLink
                href="#"
                className="text-white"
            >
                Portfolio
            </UnderlinedInnerLink>
        </div>
    )
}