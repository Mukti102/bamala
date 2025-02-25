import React from "react";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Testimoni from "@/components/ui/Testimoni";
import FAQ from "@/components/Faq";
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
