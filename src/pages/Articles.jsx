import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import { BASE_URL_PHOTO, fetchData } from "@/api/api";
import { dateFormat } from "@/utils/utils";
import { Skeleton } from "@/components/ui/skeleton";

function Articles() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const firstBlog = blogs.length > 0 ? blogs[0] : null;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await fetchData("/blogs", "");
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="sm:mt-24 mt-10 sm:px-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-7">
        {loading ? (
          <SkeletonMainBlog />
        ) : (
          firstBlog && <MainBlog blog={firstBlog} />
        )}
        <div className="flex flex-col gap-7">
          {loading
            ? Array(5)
                .fill(0)
                .map((_, index) => <SkeletonSmallBlog key={index} />)
            : blogs.map((blog, index) => <SmallBlog blog={blog} key={index} />)}
        </div>
      </div>

      {blogs.length > 5 && (
        <div className="mt-10 px-10">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Lainya</h1>
          </div>
          <div className="mt-7 grid gap-10 grid-cols-4">
            {loading
              ? Array(4)
                  .fill(0)
                  .map((_, index) => <SkeletonOtherCard key={index} />)
              : blogs
                  .slice(5)
                  .map((blog, index) => <OtherCard key={index} blog={blog} />)}
          </div>
        </div>
      )}
    </div>
  );
}

function SkeletonMainBlog() {
  return (
    <div className="animate-pulse">
      <Skeleton className="sm:h-[25rem] h-[15rem] " />
      <div className="sm:mt-4 mt-2">
        <Skeleton className="h-6 w-3/4  rounded"></Skeleton>
        <div className="flex gap-2 items-center mt-2 sm:mt-3">
          <Skeleton className="h-5 w-5  rounded-full"></Skeleton>
          <Skeleton className="h-4 w-1/4  rounded"></Skeleton>
        </div>
      </div>
    </div>
  );
}

function SkeletonSmallBlog() {
  return (
    <div className="flex gap-4 animate-pulse">
      <Skeleton className="sm:h-[8.5rem] h-[7rem] sm:w-[40%] w-[50%] " />
      <div className="flex flex-col justify-around flex-1">
        <Skeleton className="h-4 w-3/4  rounded"></Skeleton>
        <div className="flex gap-2 items-center mt-3">
          <Skeleton className="h-4 w-1/4  rounded"></Skeleton>
        </div>
      </div>
    </div>
  );
}

function SkeletonOtherCard() {
  return (
    <div className="animate-pulse">
      <Skeleton className="h-40 " />
      <Skeleton className="h-4 w-3/4  rounded mt-2"></Skeleton>
    </div>
  );
}

function MainBlog({ blog }) {
  return (
    <div>
      <Card className="sm:h-[25rem] h-[15rem] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={BASE_URL_PHOTO + blog.thumbnail}
          alt=""
        />
      </Card>
      <div className="sm:mt-4 mt-2">
        <h1 className="sm:text-3xl text-xl font-bold">{blog.title}</h1>
        <div className="flex gap-2 items-center mt-2 sm:mt-3">
          <Avatar className="sm:w-7 w-6 h-6 sm:h-7">
            <AvatarImage
              src={BASE_URL_PHOTO + blog.photo_author}
              className="object-cover"
            />
          </Avatar>
          <span className="text-secondary">{blog.author}</span>
          <p className="text-secondary mt-1 text-sm capitalize">
            {dateFormat(blog.created_at)}
          </p>
        </div>
      </div>
    </div>
  );
}

function SmallBlog({ blog }) {
  return (
    <a href={`/blog/${blog.id}`} className="flex gap-4">
      <Card className="sm:h-[8.5rem] h-[7rem] sm:w-[40%] w-[50%] flex-shrink-0 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={BASE_URL_PHOTO + blog.thumbnail}
          alt=""
        />
      </Card>
      <div className="flex flex-col justify-around flex-1">
        <h1 className="sm:text-2xl text-lg font-bold leading-tight">
          {blog.title.length > 50
            ? blog.title.slice(0, 30) + "..."
            : blog.title}
        </h1>
        <p className="text-secondary mt-1 sm:text-sm text-xs capitalize">
          {dateFormat(blog.created_at)}
        </p>
      </div>
    </a>
  );
}

function OtherCard({ blog }) {
  return (
    <div>
      <Card className="overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={BASE_URL_PHOTO + blog.thumbnail}
          alt=""
        />
      </Card>
      <h1 className="text-xl py-2">{blog.title}</h1>
      <p className="text-secondary mt-1 text-base capitalize">{blog.date}</p>
    </div>
  );
}

export default Articles;
