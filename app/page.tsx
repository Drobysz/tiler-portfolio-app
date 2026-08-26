import { Metadata } from "next";
import {
  Hero,
  Quote,
  ServiceAnimationFeed,
  Values,
  WorkerAbout,
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
      <ServiceAnimationFeed />
      <Values />
      <WorkerAbout />
    </div>
  );
}
