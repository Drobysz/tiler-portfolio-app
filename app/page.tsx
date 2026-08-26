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
  title: "Main Page",
  description: "Lorem ipsum",
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
