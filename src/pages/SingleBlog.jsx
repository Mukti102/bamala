import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { dateFormat } from "@/utils/utils";
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
import { Skeleton } from "@/components/ui/skeleton";

function SingleBlog() {
  const id = useParams().id;
  const [blog, setBlog] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchBlogs = async () => {
      try {
        const data = await fetchData(`/blogs/${id}`, "");
        setBlog(data[0]);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [id]);

  const currentUrl = window.location.href;
  const title = blog?.title;
  const handleNativeShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title,
          url: currentUrl,
        })
        .catch((error) => console.log("Error sharing:", error));
    } else {
      alert("Web Share API tidak didukung di browser ini.");
    }
  };

  return (
    <div className="sm:mt-20 mt-3">
      <div className="sm:mx-16 mx-3 text-start">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {loading ? <Skeleton width={100} /> : blog?.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-3 text-sm">
          <h1 className="sm:text-4xl text-xl font-black">
            {loading ? <Skeleton width={300} /> : title}
          </h1>
          <div className="flex gap-2 sm:text-base text-xs font-[600] mt-2 text-gray-400">
            <span>{loading ? <Skeleton width={100} /> : blog?.author}</span>
            <span className="mx-2">|</span>
            <span>
              {loading ? (
                <Skeleton width={150} />
              ) : (
                dateFormat(blog?.created_at)
              )}
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={handleNativeShare}
            className="flex bg-transparent text-secondary hover:bg-transparent gap-0 capitalize text-xs sm:text-sm font-normal"
          >
            Bagikan :
          </button>
          <FacebookShareButton url={currentUrl} quote={title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={currentUrl} title={title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton url={currentUrl} title={title}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <WhatsappShareButton url={currentUrl} title={title}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      </div>

      <div className="sm:px-16 px-3 mt-5">
        <div className="rounded-lg h-[15rem] sm:h-[35rem] shadow-xl">
          <Card className="overflow-hidden h-full">
            {loading ? (
              <Skeleton height="100%" />
            ) : (
              <img
                className="w-full h-full object-cover"
                src={BASE_URL_PHOTO + blog?.thumbnail}
                alt=""
              />
            )}
          </Card>
        </div>
      </div>

      <div className="sm:px-16 px-3 mt-10">
        <div className="w-full">
          {loading ? (
            <Skeleton count={5} />
          ) : (
            <article
              dangerouslySetInnerHTML={{ __html: blog?.body }}
              className="prose text-card-foreground prose-sm max-w-none sm:prose-base lg:prose-lg xl:prose-lg"
            ></article>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
