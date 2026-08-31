import { ViewReveal } from "@/components/animations/ViewReveal/ViewReveal"
import ProfileCard from "@/components/Cards/ProfileCard"

export const TilerCard = ()=> {
    return (
        <ViewReveal>
            <ProfileCard
                className="z-10"
                name="Didier Puget"
                title="+4,5 ans d'expérience en tant que carreleur"
                handle="tiles"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/tiler/tiler.png"
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                behindGlowEnabled={true}
                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            />
        </ViewReveal>
    )
}