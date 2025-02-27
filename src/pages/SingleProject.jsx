import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_URL_PHOTO, fetchData } from "@/api/api";
import { Carousel, Spinner } from "flowbite-react";
import { dateFormat } from "@/utils/utils";

function SingleProject() {
  const id = useParams().id;
  const [project, setProject] = React.useState([]);
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProject = async () => {
      const data = await fetchData("/projects/" + id, "");
      const datas = await fetchData("/projects", "");
      setProject(data);
      setProjects(datas);
      setLoading(false);
    };
    fetchProject();
  }, [id]);
  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <div className="text-center">
            <Spinner aria-label="Center-aligned spinner example" />
          </div>
        </div>
      ) : (
        <div className="sm:mt-10 mt-3 px-3 sm:px-16">
          {/* Header */}
          <div className="sm:mx-3 mx-0 text-start">
            <div className="mt-3 text-sm">
              <h1 className="sm:text-4xl text-xl font-black">
                {project?.name}
              </h1>
              <div className="flex gap-2 sm:text-base text-xs font-[600] mt-2 text-gray-400">
                <span>{dateFormat(project?.created_at)}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="col-span-2">
              {/* Thumbnail */}
              <div className="h-56 sm:h-64 xl:h-[30rem] 2xl:h-[35rem] mt-5 sm:mt-6">
                <Carousel>
                  <img src={BASE_URL_PHOTO + project?.thumbnail} alt="..." />
                </Carousel>
              </div>
              {/* Blog Content */}
              <div className="mt-5 px-1 sm:px-0 sm:mt-10">
                <div className="w-full">
                  <article
                    dangerouslySetInnerHTML={{ __html: project?.description }}
                    className="prose text-foreground prose-headings:text-foreground prose-p:text-foreground prose-a:text-foreground prose-blockquote:text-foreground prose-strong:text-foreground prose-em:text-foreground prose-code:text-foreground prose-sm max-w-none sm:prose-base lg:prose-lg xl:prose-lg"
                  ></article>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              {projects?.slice(0, 5).map((project) => (
                <SmallCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SmallCard({ project }) {
  return (
    <Link
      to={`/projects/${project?.id}`}
      className="sm:mt-6 mt-0 flex gap-3 my-2  sm:my-2 sm:gap-5 items-start"
    >
      <div className="flex-none shadow-sm w-40 h-24 rounded-sm overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={BASE_URL_PHOTO + project?.thumbnail}
          alt=""
        />
      </div>
      <div className="flex-1 text-sm sm:text-base">
        <h1 className="font-semibold">
          {project?.name.length > 25
            ? project?.name.slice(0, 25) + "..."
            : project?.name}
        </h1>
        <p
          className="sm:text-sm text-xs text-secondary mt-1"
          dangerouslySetInnerHTML={{
            __html:
              project?.description.length > 100
                ? project?.description.substring(0, 50) + "..."
                : project?.description,
          }}
        ></p>
      </div>
    </Link>
  );
}

export default SingleProject;
