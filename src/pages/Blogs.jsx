import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarImage } from "../components/ui/avatar";
function Blogs() {
  const [blogs, setBlogs] = React.useState([]);
  const firstBlog = blogs[0];
  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await fetchData("/blogs", "");
      setBlogs(data);
    };
    fetchBlogs();
  }, []);
  return (
    <>
      <div className="mt-24 sm:px-10 px-4">
        {/* main */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-7">
          <div>
            <Card className="sm:h-[25rem] h-[15rem] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/736x/75/02/04/750204ab5ec7c31940435324fe3d0685.jpg"
                alt=""
              />
            </Card>
            <div className="sm:mt-4 mt-2">
              <h1 className="sm:text-3xl text-xl font-bold">Blog 1</h1>
              <div className="flex gap-2 items-center mt-2 sm:mt-3">
                <div className="flex gap-2 text-sm items-center">
                  <div>
                    <Avatar className="sm:w-7 sm:h-7">
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                  </div>
                  <div className="text-secondary">
                    <span>Nama Lengkap</span>
                  </div>
                </div>
                <div className="mx-2">
                  <p className="text-secondary mt-1 text-sm capitalize">
                    september 27, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <SmallBlog />
            <SmallBlog />
            <SmallBlog />
          </div>
        </div>
      </div>
      <div className="mt-10 px-10">
        {/* head */}
        <div className="flex justify-between ">
          <div>
            <h1 className="text-2xl font-semibold">Lainya</h1>
          </div>
        </div>
        {/* blogs */}
        <div className=" mt-7 grid gap-10 grid-cols-4">
          <OtherCard />
          <OtherCard />
          <OtherCard />
          <OtherCard />
          <OtherCard />
        </div>
      </div>
    </>
  );
}

function SmallBlog() {
  return (
    <div className="flex gap-4">
      {/* Small Card */}
      <Card className="h-[8.5rem] w-[40%] flex-shrink-0 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/736x/75/02/04/750204ab5ec7c31940435324fe3d0685.jpg"
          alt=""
        />
      </Card>
      {/* Teks */}
      <div className="flex flex-col justify-around flex-1">
        <div>
          <h1 className="text-2xl font-bold leading-tight">
            Lorem ipsum dolor sit amet consectetur
          </h1>
        </div>
        <div className="flex gap-2 items-center mt-3">
          <div className="flex gap-2 text-sm items-center">
            <div>
              <Avatar className="w-6 h-6">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
            </div>
            <div className="text-secondary">
              <span>Nama Lengkap</span>
            </div>
          </div>
          <div className="mx-2">
            <p className="text-secondary mt-1 text-sm capitalize">
              september 27, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OtherCard() {
  return (
    <div>
      <Card className="overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/736x/75/02/04/750204ab5ec7c31940435324fe3d0685.jpg"
          alt=""
        />
      </Card>
      <div>
        <div>
          <h1 className="text-xl py-2">Lorem ipsum dolor sit amet.</h1>
        </div>
        <div>
          <div className="">
            <p className="text-secondary mt-1 text-base capitalize">
              september 27, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
