import { Metadata } from "next";
import {
  Hero,
  Quote,
  Gallery,
  ServiceAnimationFeed,
  Values,
  WorkerAbout,
  Contact,
} from "./_sections";

export const metadata: Metadata = {
  title: "Page d'accueil | Carreleur à Étalans, Franche-Comté | DP Carrelage",
  description:
    "DP Carrelage réalise la pose de carrelage, faïence, parquet et panneaux décoratifs à Étalans et en Franche-Comté, pour vos sols et vos murs.",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Quote />
      <Gallery />
      <Values />
      <ServiceAnimationFeed />
      <WorkerAbout />
      <Contact />
    </div>
  );
}
