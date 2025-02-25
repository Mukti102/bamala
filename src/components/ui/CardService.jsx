import { Card } from "flowbite-react";
import React from "react";
import SpotlightCard from "./SpotlightCard/SpotlightCard";
import StarBorder from "./StarBorder/StarBorder";

function CardService({ item }) {
  const extractListItems = (htmlString) => {
    if (!htmlString) return "";

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const listItems = doc.querySelectorAll("li");

    return Array.from(listItems)
      .map((li) => li.outerHTML)
      .join("");
  };

  const extractParagraphs = (htmlString) => {
    if (!htmlString) return "";

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const paragraphs = doc.querySelectorAll("p");

    return Array.from(paragraphs)
      .map((p) => p.outerHTML)
      .join("");
  };
  return (
    <SpotlightCard className="sm:w-1/3 w-full max bg-none shadow-lg bg-card border border-border">
      <div className="w-full rounded-lg">
        <h5 className="mb-4  text-xl text-start font-black ">{item?.name}</h5>
        <div className="h-[16rem] ">
          <article
            dangerouslySetInnerHTML={{
              __html: item?.description,
            }}
            className="prose text-card-foreground prose-text text-sm text-start"
          ></article>
        </div>
        <div className="flex gap-2 mt-5">
          <a
            href={`https://wa.me/${item?.contact}`}
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900"
          >
            Kontak Kami
          </a>
          <a
            href={item?.view}
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-teal-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900"
          >
            Preview
          </a>
        </div>
      </div>
    </SpotlightCard>
  );
}

export default CardService;
