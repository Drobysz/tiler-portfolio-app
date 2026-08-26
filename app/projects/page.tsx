import { Metadata } from "next";
import {
    Hero,
} from "./_sections";

export const metadata: Metadata = {
  title: "Projets",
  description: "Lorem ipsum",
};

export default function ProjectsPage () {
    return (
        <div>
            <Hero />
        </div>
    )
}