import React, { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { BASE_URL_PHOTO, fetchData } from "@/api/api";

function Journals() {
  const [journals, setjournals] = React.useState([]);
  useEffect(() => {
    const fetchJournals = async () => {
      const data = await fetchData("/journals", "");
      setjournals(data);
    };
    fetchJournals();
  }, []);
  return (
    <section className="w-full overflow-x-hidden my-36" id="testimoni">
      <div className="sm:w-[80%] w-full mx-auto text-center">
        <div className="flex text-lg justify-center items-center gap-3">
          <h1 className="font-black md:text-4xl text-2xl  sm:leading-relaxed">
            Jurnal Yang Kami<span className="text-gradient"> Kelola</span>
          </h1>
        </div>
      </div>
      <div className="sm:w-[85%] w-[100%] px-5 sm:px-0 mt-10 sm:mt-16 mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {journals?.map((item) => {
              return <CardJornal key={item.id} item={item} />;
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

function CardJornal({ item }) {
  return (
    <>
      <a
        href={item?.link}
        className="sm:basis-[15rem]  basis-1/2 overflow-hidden -z-1    group  relative"
      >
        <h1 className="text-start text-sm mb-1 ml-5 ">{item?.title}</h1>
        <CarouselItem>
          <Card className="bg-gradient overflow-hidden h-[15rem]  sm:h-[20rem]">
            <img
              src={BASE_URL_PHOTO + item?.image}
              className="w-full h-full object-cover"
              alt=""
            />
          </Card>
          <div>
            <p className="text-xs mt-2">{item?.description}</p>
          </div>
        </CarouselItem>
      </a>
    </>
  );
}

export default Journals;
