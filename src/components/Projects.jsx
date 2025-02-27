import React, { useEffect, useState } from "react";
import { BASE_URL_PHOTO, fetchData } from "@/api/api";
import { Skeleton } from "./ui/skeleton";
import { Link } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState([]);
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
    <section className="sm:px-16 px-5 mt-32">
      <div className="flex mt-10 justify-between">
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
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <CardSkeletonProject key={index} />
            ))
          : projects.map((project) => <Card project={project} />)}
      </div>
    </section>
  );
}

function Card({ project }) {
  return (
    <Link to={`/projects/${project?.id}`}>
      <div className="overflow-hidden shadow-sm h-[7rem] sm:h-[15rem] rounded-md">
        <img
          className="w-full h-full object-cover"
          src={BASE_URL_PHOTO + project?.thumbnail}
          alt=""
        />
      </div>
      <div>
        <h1 className="mt-2 font-bold text-xs sm:text-lg">
          {project?.name.length > 35
            ? project?.name.slice(0, 35) + "..."
            : project?.name}
        </h1>

        <p
          dangerouslySetInnerHTML={{
            __html:
              project?.description.length > 100
                ? project?.description.substring(0, 50) + "..."
                : project?.description,
          }}
          className="sm:text-sm w-full text-[10px] text-secondary"
        ></p>
        <a
          href=""
          className="sm:text-xs text-[10px] text-gradient font-semibold"
        >
          Selengkapnya
        </a>
      </div>
    </Link>
  );
}

function CardSkeletonProject() {
  return (
    <div className="animate-pulse">
      <Skeleton className="h-[7rem] sm:h-[15rem] w-full rounded-md" />
      <Skeleton className="h-4 w-3/4 mt-2" />
      <Skeleton className="h-3 w-full mt-1" />
      <Skeleton className="h-3 w-1/2 mt-1" />
    </div>
  );
}

export { Projects, Card, CardSkeletonProject };
