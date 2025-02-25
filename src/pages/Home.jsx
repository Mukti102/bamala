import React from "react";
import Particles from "../components/ui/Particles/Particles";
import Hero from "../components/Hero";
import About from "../components/About";
import Service from "../components/Service";
import Testimoni from "../components/ui/Testimoni";
import FAQ from "../components/Faq";
import BallonContact from "../components/ui/BallonContact";
import Journals from "@/components/Journals";
import { Projects } from "@/components/Projects";

function Home() {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Service />
      <Projects />
      <Journals />
      <Testimoni />
      <FAQ />
    </>
  );
}

export default Home;
