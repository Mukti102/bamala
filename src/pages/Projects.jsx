import { fetchData } from "@/api/api";
import { Card, CardSkeletonProject } from "@/components/Projects";
import React, { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await fetchData("/projects", "");
      setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, []);
  return (
    <section className="sm:px-16 px-5 mt-10 sm:mt-20">
      <div className="sm:w-[80%] w-full mx-auto text-center">
        <div className="flex text-lg justify-center items-center gap-3">
          <h1 className="font-black text-2xl md:text-4xl  sm:leading-relaxed">
            Project <span className="text-gradient">Terbaru</span> Kami
          </h1>
        </div>
        <p className="mt-5 px-4 sm:text-base text-xs text-secondary">
          Jelajahi keberagaman proyek-proyek kami yang menarik. Temukan
          inspirasi untuk memulai perjalanan digital Anda bersama kami.
        </p>
      </div>
      {/* cards */}
      <div className="sm:mt-10 mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-10">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <CardSkeletonProject key={index} />
            ))
          : projects.map((project) => <Card project={project} />)}
      </div>
    </section>
  );
}

export default Projects;
