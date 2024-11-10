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
  const itemizeLists = (answer: string) => {
    if(answer.includes('--newline--')){
    const unsorted = answer.split("--newline--");
    const startingText = answer.split("--start--")[0]
    return( <ul className=" list-decimal">
      {startingText}
      {unsorted.map((e,i)=>{
        if(!e.includes("--start--")){
          return <li className="ml-4 opacity-[0.7]" key={i}>
          {e.replace("--start--","")}
        </li>
        }
        
      })}

    </ul>);
    }else{
      return answer
    }
  };
  return (
    <div
      onClick={handleOpenAccordion}
      className={`mb-2 cursor-pointer min-[1500px]:mb-5 px-8 py-6 text-white  ${homepagestyles.faqAccordion} `}
    >
      <div className="flex justify-between">
        <p className="gilroy-bold text-[20px] md:text-[22px]">{question}</p>
        <button>{isOpen ? <Close /> : <Open />}</button>
      </div>
      <p
        className={`${
          isOpen ? null : "hidden"
        } mt-4 text-[18px] md:text-[20px] text-[#fff] gilroy-regular`}
      >
        {itemizeLists(answer)}
      </p>
    </div>
  );
};

export default FaqAccordion;
