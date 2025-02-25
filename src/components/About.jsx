import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Book from "../../public/books.png";
import TrueFocus from "./ui/TrueFocus/TrueFocus";
function About() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 mt-52 px-10 gap-6 items-center">
      {/* gamabar */}
      <div>
        <img src={Book} alt="" />
      </div>
      {/* text */}
      <div className="col-span-1">
        <h1 className="text-3xl md:text-3xl font-black  leading-relaxed">
          Kami bantu <span className="text-primary">100% kelulusan</span> dan
          BKD di bulan Februari
        </h1>

        <p className="mt-3 text-secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          consequatur incidunt sed ab, doloremque rem aliquid velit sint
          exercitationem deleniti quae saepe aspernatur,
        </p>
        <ul className="mt-3 text-sm flex flex-col gap-4">
          <li className="flex gap-2 items-center font-semibold">
            <span className="text-green-500">
              <FaCheckCircle />
            </span>
            Lorem ipsum dolor sit amet consectetur.
          </li>
          <li className="flex gap-2 items-center font-semibold">
            <span className="text-green-500">
              <FaCheckCircle />
            </span>
            Lorem ipsum dolor sit amet consectetur.
          </li>
          <li className="flex gap-2 items-center font-semibold">
            <span className="text-green-500">
              <FaCheckCircle />
            </span>
            Lorem ipsum dolor sit amet consectetur.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
