import React from "react";
import Squares from "./Squares";
import hero from "../../public/hero.png";
import { Button } from "./ui/button";
import RotatingText from "./ui/RotatingText";
import ClickSpark from "./ui/ClickSpark";
import Particles from "./ui/Particles/Particles";
import TrueFocus from "./ui/TrueFocus/TrueFocus";

export default function Hero() {
  return (
    <div
      id="/"
      className="w-full h-[calc(100vh-200px)]  sm:h-[calc(100vh-50px)] flex justify-center text-center items-center pr-1 pl-4 sm:pl-16"
    >
      <div className="sm:w-[80%]   w-[100%]">
        <div className="">
          <h1 className="text-[1.6rem] md:text-5xl text-gradient font-black leading-10 block">
            Publikasi & Pengembangan Digital, Mudah & Cepat!
          </h1>
        </div>

        <p className="mt-4 sm:w-[70%] w-full sm:text-base text-sm mx-auto text-secondary">
          Tingkatkan visibilitas penelitian dan bisnismu dengan layanan
          publikasi jurnal, pengembangan website, dan aplikasi web yang
          profesional dan terpercaya.
        </p>

        <div className="mt-6 flex gap-3 sm:gap-5 justify-center">
          <Button
            size="sm"
            className="sm:text-lg hover:bg-gradient  bg-foreground text-sm text-card font-semibold py-5 px-4 sm:px-7 sm:py-7"
          >
            Tentang Kami
          </Button>
          <Button
            size="sm"
            className="sm:text-lg bg-gradient text-sm text-white font-semibold py-5 px-4 sm:px-7 sm:py-7"
          >
            Konsultasi Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
}
