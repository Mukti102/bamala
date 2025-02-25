import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import TrueFocus from "./ui/TrueFocus/TrueFocus";
import { fetchData } from "@/api/api";

function FAQ() {
  const [faqs, setFaqs] = React.useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      const data = await fetchData("/faqs", "");
      setFaqs(data);
    };
    fetchFaqs();
  }, []);
  return (
    <section id="faq" className="w-full my-36">
      <div className="sm:w-[80%] mb-10 sm:px-0 px-3 w-full mx-auto text-center">
        <div className="flex items-center gap-3">
          <h1 className="text-xl sm:text-3xl font-black md:text-3xl  sm:leading-relaxed">
            Frequently Asked Question (FAQ)
          </h1>
        </div>
      </div>
      <div className="sm:w-[80%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10  w-full sm:px-0 px-5 mt-2 sm:mt-5 mx-auto">
        <Accordions faqs={faqs} title="Umum" />
        <Accordions faqs={faqs} title="Proses Kerja" />
        <Accordions faqs={faqs} title="Teknis" />
        <Accordions faqs={faqs} title="Lain-Lain" />
      </div>
    </section>
  );
}

function Accordions({ faqs, title }) {
  const faqsFiter = faqs.filter((faq) => faq.category === title);
  return (
    <div className="">
      <div>
        <h1 className="text-sm font-bold sm:text-xl text-gradient">{title}</h1>
      </div>
      <Accordion type="single" collapsible>
        {faqsFiter?.map((faq) => (
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

export default FAQ;
