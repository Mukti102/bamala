import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function BallonContact() {
  return (
    <a
      href="https://wa.me/628563063077"
      className="fixed bottom-7 sm:bottom-10 right-5 sm:right-10"
    >
      <button className="bg-green-500 text-white p-3 rounded-full shadow-lg">
        <FaWhatsapp size={50} />
      </button>
    </a>
  );
}
