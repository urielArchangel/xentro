import React from "react";
import homepagestyles from "@/app/css/homepage.module.css";
import XentroFeatures from "@/app/src/FE/homepage/components/XentroFeatures";
import JoinCommunity from "@/app/src/FE/homepage/components/JoinCommunity";
import FaqAccordion from "@/app/src/FE/homepage/components/FaqAccordion";
import HomepageHero from "@/app/src/FE/homepage/components/HomepageHero";
import Xentromission from "@/app/src/FE/homepage/components/XentroMission";
import Footer from "@/app/src/FE/footer/Footer";
import faq from "@/app/src/data/faq/faq.json";

type FAQData = {
  question: string;
  answer: string;
};

const page = () => {
  return (
    <>
      <main className="body pt-5">
        <HomepageHero />
        <div className="min-[500px]:translate-y-[-200px] min-[800px]:translate-y-[-100px] max-[400px]:translate-y-[px] lg:translate-y-0">
          <Xentromission />
          {/* Feature */}
          <XentroFeatures />

          {/* MINT */}
          <div className="flex flex-col items-center pb-20 pt-32">
            <p className="text-white gilroy-bold text-3xl md:text-4xl lg:text-5xl text-center mb-10 min-[769px]:w-[60%] px-3">
              Mint your{" "}
              <span className={`${homepagestyles.gradientText}`}>Xentro</span>{" "}
              badge to qualify for the{" "}
              <span className={`${homepagestyles.gradientText}`}>Xentro</span>{" "}
              Airdrop
            </p>
            <div
              className={
                homepagestyles.bg_gradient_border +
                " border-0 p-[0.06em] rounded-full hd-shadow mt-8 inline-block"
              }
            >
              <button className="bg-[#070D12] w-full h-full rounded-full  px-5 py-3 text-white text-xl gilroy-bold">
                Join Xentro Airdrop
              </button>
            </div>
          </div>
          {/* FAQ */}
          <div className="flex flex-col items-center pb-20 pt-24">
            <p className="text-white gilroy-bold px-3 text-3xl md:text-4xl lg:text-5xl  text-center mb-10">
              Frequently Asked Questions{" "}
              <span className={`${homepagestyles.gradientText}`}>
                (FAQ&apos;s)
              </span>
            </p>
            <div className="w-[80%]">
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
