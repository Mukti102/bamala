import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { Card } from "../components/ui/card";
import { CiShare2 } from "react-icons/ci";

import { Button } from "../components/ui/button";
import React, { useEffect } from "react";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import { useParams } from "react-router-dom";
import { BASE_URL_PHOTO, fetchData } from "@/api/api";
import { Carousel } from "flowbite-react";

function SingleProject() {
  const id = useParams().id;
  const [project, setProject] = React.useState([]);
  useEffect(() => {
    const fetchProject = async () => {
      const data = await fetchData("/projects/" + id, "");
      setProject(data);
    };
    fetchProject();
  }, []);
  return (
    <div className="sm:mt-10 mt-3 px-3  sm:px-16">
      {/* header */}
      <div className="sm:mx-3 mx-0  text-start">
        {/* Title */}
        <div className="mt-3 text-sm">
          <h1 className="sm:text-4xl text-xl font-black">{project?.name}</h1>
          <div className="flex gap-2 sm:text-base text-xs font-[600]  mt-2 text-gray-400">
            <span>{project?.created_at}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1  sm:grid-cols-3 gap-5">
        <div className="col-span-2">
          {/* Thumbnail */}
          <div className="h-56 sm:h-64 xl:h-[30rem] 2xl:h-[35rem] mt-5 sm:mt-6 ">
            <Carousel>
              <img src={BASE_URL_PHOTO + project?.thumbnail} alt="..." />
            </Carousel>
          </div>
          {/* Blog Content */}
          <div className="mt-5  px-1 sm:px-0 sm:mt-10">
            <div className="w-full">
              <article
                dangerouslySetInnerHTML={{
                  __html: project?.description,
                }}
                className="prose text-card-foreground prose-sm max-w-none sm:prose-base lg:prose-lg xl:prose-lg"
              ></article>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          {/* Small Card Section */}
          <div className="sm:mt-6 mt-0 flex gap-3 sm:gap-5 items-start">
            {/* Card */}
            <div className="flex-none w-40 ">
              <Card
                className="h-[7rem]"
                title={project?.title}
                desc={project?.description}
                img={BASE_URL_PHOTO + project?.thumbnail}
              />
            </div>
            {/* Text */}
            <div className="flex-1 text-base sm:text-lg">
              <h1 className="font-semibold">{project?.name}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
