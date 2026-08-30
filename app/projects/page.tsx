import { Metadata } from "next";
import {
    Hero,
    ProjectsFeed,
} from "./_sections";

export const metadata: Metadata = {
  title: "Projets | Réalisations de carrelage, faïence et parquet",
  description:
    "Découvrez des réalisations de pose : carrelage extérieur en grès cérame, faïence murale, parquet en bois et panneaux décoratifs en Franche-Comté.",
};

export default function ProjectsPage () {
    return (
        <div>
            <Hero />
            <ProjectsFeed />
        </div>
    )
}
