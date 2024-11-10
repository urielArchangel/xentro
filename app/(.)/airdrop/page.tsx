import React from "react";
import homepagestyles from "@/app/css/homepage.module.css";
import Image from "next/image";
import AirdropHero from "../../src/FE/airdrop/AirdropHero";
import JoinCommunity from "../../src/FE/homepage/components/JoinCommunity";
import Footer from "@/app/src/FE/footer/Footer";
import shield from "@/app/images/shield.png";
import underline from "@/app/images/underline.png";
import HowtoParticipate from "../../src/FE/airdrop/HowtoParticipate";
import ExclusiveTasks from "../../src/FE/airdrop/ExclusiveTasks";
import MintBadge from "../../src/FE/airdrop/MintBadge";
import { xentroQuestions } from "../../src/data/faq/faqQuestions";
import FaqAccordion from "../../src/FE/homepage/components/FaqAccordion";
import { fetchAppData } from "@/app/src/BE/helpers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airdrop | Xentro - Gateway to UNTRAD Banking",
  description:
    "Participate in exclusive tasks on the Xentro platform to earn unique community and warrior badges through our airdrop program. Connect your wallet to access and complete tasks across various platforms, including Discord, Medium, Telegram, and Instagram. Track your progress, unlock badges, and earn invite links to share with others. Mint your badges directly from the platform once tasks are completed and engage with a thriving community!",
  keywords: [
    "Xentro",
    "airdrop",
    "exclusive tasks",
    "community badge",
    "warrior badge",
    "NFT minting",
    "wallet connection",
    "Web3",
    "task tracking",
    "invite link",
    "crypto rewards",
    "Discord tasks",
    "Medium tasks",
    "Telegram tasks",
    "Instagram tasks",
    "social tasks",
    "badge minting",
    "task completion",
    "blockchain rewards",
  ],
  openGraph: {
    title: "Airdrop | Xentro - Gateway to UNTRAD Banking",
    description:
      "Participate in exclusive tasks on the Xentro platform to earn unique community and warrior badges through our airdrop program.",
    url: "https://www.joinxentro.com/airdrop",
    type: "website",
  },
  twitter: {
    title: "Airdrop | Xentro - Gateway to UNTRAD Banking",
    description:
      "Participate in exclusive tasks on the Xentro platform to earn unique community and warrior badges through our airdrop program.",
    card: "summary_large_image",
  },
  robots: { follow: true, index: true },
};

const page = async () => {
  const app = await fetchAppData();

  return (
    <>
      <div className="body pt-5">
        {" "}
        <AirdropHero />
        <div className="px-[8%] pt-[8%]">
          <div className="grid grid-cols-1 min-[769px]:grid-cols-2">
            <div className="min-[1500px]:scale-[1.3] min-[1500px]:translate-x-[200px] flex justify-center min-[769px]:justify-start mt-10 min-[769px]:mt-0 scale-custom scale-[0.7] min-[769px]:scale-[1]">
              <Image src={shield} alt="token" width={300} height={300} />
            </div>
            <div className="flex justify-center flex-col text-white text-center min-[769px]:text-end order-first min-[769px]:order-last">
              <p className="text-white gilroy-bold text-4xl md:text-5xl min-[1500px]:text-6xl mb-10">
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
        <ExclusiveTasks appString={JSON.stringify(app)} />
        <MintBadge />
        <div>
          <div className="flex flex-col items-center pb-20 pt-24">
            <p className="text-white gilroy-bold text-3xl md:text-4xl lg:text-5xl min-[1500px]:text-6xl mb-10">
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
              Airdrop FAQs
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
