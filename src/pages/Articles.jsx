import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import { BASE_URL_PHOTO, fetchData } from "@/api/api";
import { dateFormat } from "@/utils/utils";
function Articles() {
  const [blogs, setBlogs] = useState([]);
  const firstBlog = blogs.length > 0 ? blogs[0] : null;
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await fetchData("/blogs", "");
        console.log(data);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <>
      <div className="sm:mt-24 mt-10 sm:px-10 px-4">
        {/* main */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-7">
          {firstBlog && (
            <div>
              <Card className="sm:h-[25rem] h-[15rem] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={BASE_URL_PHOTO + firstBlog.thumbnail}
                  alt=""
                />
              </Card>
              <div className="sm:mt-4 mt-2">
                <h1 className="sm:text-3xl text-xl font-bold">
                  {firstBlog.title}
                </h1>
                <div className="flex gap-2 items-center mt-2 sm:mt-3">
                  <div className="flex gap-2 text-sm items-center">
                    <div>
                      <Avatar className="sm:w-7  w-6 h-6 sm:h-7">
                        <AvatarImage
                          className="object-cover"
                          src={BASE_URL_PHOTO + firstBlog.photo_author}
                        />
                      </Avatar>
                    </div>
                    <div className="text-secondary">
                      <span>{firstBlog.author}</span>
                    </div>
                  </div>
                  <div className="mx-2">
                    <p className="text-secondary mt-1 text-sm capitalize">
                      {dateFormat(firstBlog.created_at)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-7">
            {blogs.map((blog, index) => (
              <SmallBlog blog={blog} key={index} />
            ))}
          </div>
        </div>
      </div>
      {blogs.length > 5 && (
        <div className="mt-10 px-10">
          {/* head */}
          <div className="flex justify-between ">
            <div>
              <h1 className="text-2xl font-semibold">Lainya</h1>
            </div>
          </div>
          {/* blogs */}
          <div className=" mt-7 grid gap-10 grid-cols-4">
            {blogs.slice(5).map((blog, index) => (
              <OtherCard key={index} blog={blog} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function SmallBlog({ blog }) {
  return (
    <a href={`/blog/${blog.id}`} className="flex gap-4">
      {/* Small Card */}
      <Card className="sm:h-[8.5rem] h-[7rem] sm:w-[40%] w-[50%] flex-shrink-0 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={BASE_URL_PHOTO + blog.thumbnail}
          alt=""
        />
      </Card>
      {/* Teks */}
      <div className="flex flex-col justify-around flex-1">
        <div>
          <h1 className="sm:text-2xl text-lg font-bold leading-tight">
            {blog.title.length > 50
              ? blog.title.slice(0, 30) + "..."
              : blog.title}
          </h1>
        </div>
        <div className="flex gap-1 sm:gap-2 items-center mt-3">
          <div className=" hidden sm:flex gap-2 text-sm items-center">
            <div>
              <Avatar className="sm:w-6 sm:h-6 w-5 h-5">
                <AvatarImage
                  className="object-cover"
                  src={BASE_URL_PHOTO + blog.photo_author}
                />
              </Avatar>
            </div>
            <div className="text-secondary sm:text-base text-xs">
              <span>{blog.author}</span>
            </div>
          </div>
          <div className="sm:mx-2 mx-0">
            <p className="text-secondary mt-1 sm:text-sm text-xs capitalize">
              {dateFormat(blog.created_at)}
            </p>
          </div>
        </div>
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
      <div>
        <div>
          <h1 className="text-xl py-2">{blog.title}</h1>
        </div>
        <div>
          <div className="">
            <p className="text-secondary mt-1 text-base capitalize">
              {blog.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
