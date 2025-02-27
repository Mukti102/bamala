import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card } from "./ui/card";
import { BASE_URL_PHOTO, fetchData } from "@/api/api";
import { Skeleton } from "./ui/skeleton";

function Journals() {
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJournals = async () => {
      const data = await fetchData("/journals", "");
      setJournals(data);
      setLoading(false);
    };
    fetchJournals();
  }, []);

  return (
    <section className="w-full overflow-x-hidden my-36" id="testimoni">
      <div className="sm:w-[80%] w-full mx-auto text-center">
        <div className="flex text-lg justify-center items-center gap-3">
          <h1 className="font-black md:text-4xl text-2xl sm:leading-relaxed">
            Jurnal Yang Kami<span className="text-gradient"> Kelola</span>
          </h1>
        </div>
      </div>
      <div className="sm:w-[85%] w-[100%] px-5 sm:px-0 mt-10 sm:mt-16 mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {loading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <CrdSkeleton key={index} />
                ))
              : journals?.map((item) => (
                  <CardJournal key={item.id} item={item} />
                ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

function CrdSkeleton() {
  return (
    <CarouselItem className="sm:basis-[16rem] basis-[55%]">
      <Skeleton className="h-[15rem] mx-1 sm:mx-5 sm:h-[20rem] w-full rounded-md" />
    </CarouselItem>
  );
}

function CardJournal({ item }) {
  return (
    <a
      href={item?.link}
      className="sm:basis-[16rem] basis-[55%] overflow-hidden -z-1 group relative"
    >
      <h1 className="text-start font-semibold text-xs sm:text-sm mb-1 ml-5">
        {item?.title?.length > 50
          ? item.title.substring(0, 50) + "..."
          : item.title}
      </h1>
      <CarouselItem>
        <Card className="bg-gradient rounded-sm overflow-hidden h-[15rem] sm:h-[20rem]">
          <img
            src={BASE_URL_PHOTO + item?.image}
            className="w-full h-full object-cover"
            alt=""
          />
        </Card>
        <div>
          <p className="text-xs mt-2 text-secondary">
            {item?.description?.length > 60
              ? item.description.substring(0, 60) + "..."
              : item.description}
          </p>
        </div>
      </CarouselItem>
    </a>
  );
}

export default Journals;
