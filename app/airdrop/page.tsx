import React from "react";
import Link from "next/link";
import homepagestyles from "@/app/css/homepage.module.css";
import Image from "next/image";
import AirdropHero from "../src/FE/homepage/components/airdrop/AirdropHero";
import JoinCommunity from "../src/FE/homepage/components/JoinCommunity";
import Footer from "@/app/src/FE/footer/Footer";
import shield from "@/app/images/shield.png";
import underline from "@/app/images/underline.png";
import HowtoParticipate from "../src/FE/homepage/components/airdrop/HowtoParticipate";
import ExclusiveTasks from "../src/FE/homepage/components/airdrop/ExclusiveTasks";
import MintBadge from "../src/FE/homepage/components/airdrop/MintBadge";
import { xentroQuestions } from "../src/data/faq/faqQuestions";
import FaqAccordion from "../src/FE/homepage/components/FaqAccordion";

const page = () => {
  return (
    <>
      <div className="body pt-5">
        {" "}
        <AirdropHero />
        <div className="px-[8%] pt-[8%]">
          <div className="grid grid-cols-2">
            <div className="min-[1500px]:scale-[1.3] min-[1500px]:translate-x-[200px]">
              <Image src={shield} alt="token" width={300} height={300} />
            </div>
            <div className="flex justify-center flex-col text-white text-end">
              <p className="text-white gilroy-bold text-5xl min-[1500px]:text-6xl mb-10">
                Become a{" "}
                <span className={`${homepagestyles.gradientText} gilroy-bold`}>
                  Xentro
                </span>
                <br />
                Early Adopter
              </p>
              <p className="gilroy-regular text-xl min-[1500px]:text-2xl">
                Be among the first to secure early access to Xentro <br /> and
                earn rewards
              </p>
            </div>
          </div>
        </div>
        <HowtoParticipate />
        <ExclusiveTasks />
        <MintBadge />
        <div>
          <div className="flex flex-col items-center pb-20 pt-24">
            <p className="text-white gilroy-bold text-4xl min-[1500px]:text-6xl mb-10">
              <span className="inline-block relative">
                <span
                  className={`${homepagestyles.gradientText} text-white gilroy-bold`}
                >
                  Xentro
                </span>
                <Image
                  src={underline}
                  alt="underline"
                  width={300}
                  height={300}
                  className="absolute bottom-[-2] left-0"
                />
              </span>{" "}
              Airdrop FAqs
            </p>
            <div className="w-[80%]">
              {xentroQuestions.map((question, index) => (
                <FaqAccordion
                  key={index}
                  question={question}
                  answer={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quis ut facere nulla, error ipsam nisi rerum aut reprehenderit libero non ipsum? Blanditiis, voluptate qui."
                  }
                />
              ))}
            </div>
          </div>
        </div>
        <JoinCommunity />
        <Footer />
      </div>
    </>
  );
};

export default page;
