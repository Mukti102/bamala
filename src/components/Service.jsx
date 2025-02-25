import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import JurnalSvg from "../../public/article.svg";
import WebDev from "../../public/webDev.svg";
import WebDep from "../../public/webDep.svg";
import CardService from "./ui/CardService";
import SpotlightCard from "./ui/SpotlightCard/SpotlightCard";
import { fetchData } from "@/api/api";
function Service() {
  const [layanan, setLayanan] = React.useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await fetchData("/service", "");
      setLayanan(data);
    };
    fetchBlogs();
  }, []);
  return (
    <div className="sm:px-10 px-5 mt-20 text-center" id="layanan">
      <div className="sm:w-1/2 w-full mx-auto">
        <h1 className="text-2xl md:text-4xl font-black   sm:leading-relaxed">
          Layanan Yang <span className="text-gradient">Kami Tawarkan</span>{" "}
          Dapat Menyesesuiakan
        </h1>
        <p className="mt-5 text-xs sm:text-base text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quaerat ut corrupti assumenda vel, similique illum eos laudantium
          provident, et
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-5">
        <Card
          title={"Publisher Jurnal"}
          svg={JurnalSvg}
          desc={
            "Publikasikan penelitian Anda dengan lebih mudah dan profesional. Kami membantu meningkatkan kredibilitas, jangkauan, dan dampak karya ilmiah Anda di komunitas akademik global."
          }
        />
        <Card
          title={"Web Development"}
          svg={WebDev}
          desc={
            "Ubah ide brilian Anda menjadi solusi digital yang inovatif. Kami merancang dan mengembangkan website modern yang fungsional, responsif, dan sesuai kebutuhan bisnis Anda."
          }
        />
        <Card
          title={"Web Deployment"}
          svg={WebDep}
          desc={
            "Pastikan website atau aplikasi Anda berjalan optimal dan dapat diakses secara global. Kami menyediakan layanan deployment yang cepat, aman, dan andal."
          }
        />
      </div>
    </div>
  );
}

function Card({ title, desc, svg }) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[10rem]">
        <img src={svg} className="w-full h-full" alt="jurnal" />
      </div>
      <div className="mt-5">
        <h1 className="sm:text-xl text-lg font-medium">{title}</h1>
        <p className="mt-2 text-xs font-normal sm:text-sm text-secondary">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default Service;
