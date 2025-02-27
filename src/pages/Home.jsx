import React from "react";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Testimoni from "@/components/ui/Testimoni";
import Journals from "@/components/Journals";
import { Projects } from "@/components/Projects";
import FAQ from "@/components/FAQ";

function Home() {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Service />
      <Journals />
      <Projects />
      <Testimoni />
      <FAQ />
    </>
  );
}

export default Home;
