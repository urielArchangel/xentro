"use client";
import React, { useState } from "react";
import { FaPlus as Open, FaMinus as Close } from "react-icons/fa6";
import homepagestyles from "@/app/css/homepage.module.css";

// Define the type for props
interface FaqAccordionProps {
  question: string;
  answer: string;
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Define state type explicitly

  const handleOpenAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
    onClick={handleOpenAccordion}

      className={`mb-2 cursor-pointer min-[1500px]:mb-5 px-8 py-6 text-white  ${homepagestyles.faqAccordion} `}
    >
      <div className="flex justify-between" >
        <p className="gilroy-bold text-[20px] md:text-[22px]">
          {question}
        </p>
        <button >
          {isOpen ? <Close /> : <Open />}
        </button>
      </div>
      <p
        className={`${
          isOpen ? null : "hidden"
        } mt-4 text-[18px] md:text-[20px] text-[#fff] gilroy-regular`}
      >
        {answer}
      </p>
    </div>
  );
};

export default FaqAccordion;
