import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { BASE_URL_PHOTO, fetchData } from "@/api/api";

function Projects() {
  const [projects, setProjects] = React.useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await fetchData("/projects", "");
      setProjects(data);
    };
    fetchProjects();
  }, []);
  console.log(projects);
  return (
    <section className="sm:px-16 px-5 mt-32">
      <div className="flex  mt-10 justify-between">
        <div>
          <span className="font-bold">Project Terbaru</span>
        </div>
        <div>
          <a href="/projects" className="text-gradient text-sm">
            Project Lainya
          </a>
        </div>
      </div>
      {/* cards */}
      <div className="sm:mt-10 mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10">
        {projects?.map((project) => (
          <Card
            key={project.id}
            img={project.thumbnail}
            title={project?.name}
            desc={project.description}
          />
        ))}
      </div>
    </section>
  );
}

function Card({ title, desc, img }) {
  return (
    <a href="/projects/1">
      <div className="overflow-hidden h-[7rem] sm:h-[15rem]  rounded-md">
        <img
          className="w-full h-full  object-cover"
          src={BASE_URL_PHOTO + img}
          alt=""
        />
      </div>
      {/* teks */}
      <div className="">
        <h1 className="mt-2 font-bold text-sm sm:text-lg">{title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: desc.length > 100 ? desc.substring(0, 50) + "..." : desc,
          }}
          className="sm:text-sm w-full text-[10px] text-secondary"
        ></p>

        <a
          href=""
          className="sm:text-xs text-[10px]  text-gradient font-semibold"
        >
          Selengkapnya
        </a>
      </div>
    </a>
  );
}

export { Projects, Card };
