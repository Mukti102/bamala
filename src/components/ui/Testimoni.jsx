import React, { useEffect } from "react";
import TrueFocus from "./TrueFocus/TrueFocus";
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "./carousel";
import { Card, CardContent } from "./card";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { BASE_URL_PHOTO, fetchData } from "@/api/api";

function Testimoni() {
  const [testimoni, setTestimoni] = React.useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      const data = await fetchData("/testimonis", "");
      console.log(data);
      setTestimoni(data);
    };
    fetchFaqs();
  }, []);
  return (
    <section className="w-full overflow-x-hidden my-36" id="testimoni">
      <div className="sm:w-[80%] w-full mx-auto text-center">
        <div className="flex text-lg justify-center items-center gap-3">
          <h1 className="font-black text-xl md:text-4xl  sm:leading-relaxed">
            Tanggapan <span className="text-gradient">Mereka</span> Tentang
            Bamala
          </h1>
          {/* <TrueFocus
            sentence="Bamala"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={3}
            pauseBetweenAnimations={1}
          /> */}
        </div>
        <p className="mt-5 px-4 sm:text-base text-sm text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quaerat ut corrupti assumenda vel, similique illum eos laudantium
          provident, et
        </p>
      </div>
      <div className="w-[80%] px-4 sm:px-0 mt-16 mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="sm:basis-1/3 basis">
                <div className="p-1">
                  {testimoni.map((testimoni) => (
                    <Card key={testimoni.id} className="bg-card">
                      <CardContent className="flex  items-center justify-center">
                        <div className="flex flex-col items-center justify-center mt-6">
                          <Avatar>
                            <AvatarImage
                              className="object-cover"
                              src={BASE_URL_PHOTO + testimoni.photo}
                              alt={testimoni.name}
                            />
                          </Avatar>
                          <h1 className="text-sm mt-2">{testimoni.name}</h1>
                          <p className="mt-2 text-xs sm:text-sm text-secondary text-center">
                            {testimoni.testimoni}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

export default Testimoni;
