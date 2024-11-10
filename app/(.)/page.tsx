import React from "react";
import homepagestyles from "@/app/css/homepage.module.css";
import XentroFeatures from "@/app/src/FE/homepage/components/XentroFeatures";
import JoinCommunity from "@/app/src/FE/homepage/components/JoinCommunity";
import FaqAccordion from "@/app/src/FE/homepage/components/FaqAccordion";
import HomepageHero from "@/app/src/FE/homepage/components/HomepageHero";
import Xentromission from "@/app/src/FE/homepage/components/XentroMission";
import Footer from "@/app/src/FE/footer/Footer";
import faq from "@/app/src/data/faq/faq.json";
import Link from "next/link";
import { Metadata } from "next";

type FAQData = {
  question: string;
  answer: string;
};

export const metadata:Metadata={
  title:"Xentro | Gateway to UNTRAD Banking & Borderless Finance",
  "description": "Step into the world of Xentro, where finance meets freedom. Enjoy seamless multi-chain trading, earn interest, and access borrowing options all in one unified platform. Join the Xentro Airdrop now.",
  "keywords": [
    "Xentro",
    "UNTRAD Banking",
    "multi-chain trading",
    "blockchain finance",
    "crypto airdrop",
    "borderless finance",
    "earn interest",
    "borrowing assets",
    "financial network",
    "decentralized finance"
  ],
  openGraph: {
    "title": "Xentro - Gateway to UNTRAD Banking",
    "description": "Unlock financial opportunities and navigate a borderless financial network with Xentro. Join our airdrop to start your journey.",
    "url": "https://www.joinxentro.com",
    "type": "website",
  },
  twitter: {
    "title": "Xentro - Gateway to UNTRAD Banking",
    "description": "Unlock financial opportunities and navigate a borderless financial network with Xentro. Join our airdrop to start your journey.",
    "card": "summary_large_image",
  
  },
  robots:{ follow:true,index:true}
}
const page = () => {


  return (
    <>
      <main className={`${homepagestyles.body} py-6 px-4 md:px-0"`}>
        <HomepageHero />
        <div >
          <Xentromission />
          {/* Feature */}
          <XentroFeatures />

          {/* MINT */}
          <div className="flex flex-col items-center pb-20 pt-32">
            <p className="text-white text-[30px] md:text-[40px] font-bold max-w-[680px] text-center">
              Mint your{" "}
              <span className={`${homepagestyles.gradientText}`}>Xentro</span>{" "}
              badge to qualify for the{" "}
              <span className={`${homepagestyles.gradientText}`}>Xentro</span>{" "}
              Airdrop
            </p>
            <div
              className={
                homepagestyles.bg_gradient_border +
                " border-0 p-[0.07em] rounded-full hd-shadow mt-8 inline-block"
              }
              id="faq"
            >
              <Link href='/airdrop' className="bg-[#070D12] block w-full h-full rounded-full  px-10 py-3 text-white text-xl gilroy-bold">
                Join Xentro Airdrop
              </Link>
            </div>
          </div>
          {/* FAQ */}
          <div className="flex flex-col items-center py-4">
            <p className="text-white gilroy-bold px-3 text-3xl md:text-4xl lg:text-5xl  text-center mb-10">
              Frequently Asked Questions{" "}
              <span className={`${homepagestyles.gradientText}`}>
                (FAQs)
              </span>
            </p>
            <div className="w-full max-w-[1200px] mb-40">
              {faq.faq.map((data: FAQData, index: number) => {
                return (
                  <FaqAccordion
                  
                    key={index}
                    question={data.question}
                    answer={data.answer}
                  />
                );
              })}
            </div>
          </div>
          {/* Community */}
          <JoinCommunity />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default page;
