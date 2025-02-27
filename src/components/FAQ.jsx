import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import TrueFocus from "./ui/TrueFocus/TrueFocus";
import { fetchData } from "@/api/api";
import { Skeleton } from "./ui/skeleton";

function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      const data = await fetchData("/faqs", "");
      setFaqs(data);
      setLoading(false);
    };
    fetchFaqs();
  }, []);

  return (
    <section id="faq" className="w-full my-36">
      <div className="sm:w-[80%] mb-10 sm:px-0 px-3 w-full mx-auto text-center">
        <div className="flex items-center gap-3">
          <h1 className="text-xl sm:text-3xl font-black md:text-3xl sm:leading-relaxed">
            Frequently Asked Question (FAQ)
          </h1>
        </div>
      </div>
      <div className="sm:w-[80%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 w-full sm:px-0 px-5 mt-2 sm:mt-5 mx-auto">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <FAQSkeleton key={index} />
          ))
        ) : (
          <>
            <Accordions faqs={faqs} title="Umum" />
            <Accordions faqs={faqs} title="Proses Kerja" />
            <Accordions faqs={faqs} title="Teknis" />
            <Accordions faqs={faqs} title="Lain-Lain" />
          </>
        )}
      </div>
    </section>
  );
}

function Accordions({ faqs, title }) {
  const faqsFilter = faqs.filter((faq) => faq.category === title);
  return (
    <div>
      <div>
        <h1 className="text-[1rem] font-bold sm:text-xl text-gradient">
          {title}
        </h1>
      </div>
      <Accordion type="single" collapsible>
        {faqsFilter?.map((faq) => (
          <AccordionItem value={faq.id} key={faq.id}>
            <AccordionTrigger className="sm:text-base text-sm text-start">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="sm:text-base text-sm text-secondary">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

function FAQSkeleton() {
  return (
    <div className="animate-pulse">
      <Skeleton className="h-6 w-1/3 mb-4" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

export default FAQ;
