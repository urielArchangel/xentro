"use client";
import React from "react";
import homepagestyles from "@/app/css/homepage.module.css";
import underline from "@/app/images/underline.png";
import bar from "@/app/images/landing/bar.png";
import dot from "@/app/images/dot.svg";
import defi from "@/app/images/defi.png";
import crosschain from "@/app/images/crosschain.png";
import exclusive from "@/app/images/landing/exclusive.png";
import noncustodial from "@/app/images/noncustodial.png";
import Image from "next/image";

const XentroFeatures = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center">
          <p className="text-white gilroy-bold text-[30px] md:text-[45px] my-2 mb-10">
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
                className="absolute bottom-[0] left-0"
              />
            </span>{" "}
            Features
          </p>
        </div>
        <section className="w-full max-w-[1200px]  flex justify-start mx-auto ">

          <div className="h-full py-4 hidden lg:block">
            <Image src={bar} alt="bar" className="block  lg:mr-10 h-full mt-1" />
          </div>
          <div className=" flex flex-col justify-between items-center flex-1">
            <div className="flex justify-between items-center my-6 lg:my-0 " >
              <FeatureCard
                height="max-w-[780px]  lg:mr-10"
                title="Decentralized Finance (DeFi) Integration"
                description="Seamlessly Connect with the Future of Finance"
                explanation="Access a wide range of DeFi services directly from our platform, allowing you to earn, borrow, and invest with unprecedented ease and security."
              />
                <Image
                  src={defi}
                  alt="mission"
                  width={300}
                  height={300}
                  className="w-[300px] lg:block hidden "
                />
            </div>
            <div className="flex justify-between items-center my-6 lg:my-0">
              <FeatureCard
                height="max-w-[780px]  lg:mr-10"
                title="Non-Custodial Management"
                description="Retain Full Control Over Your Assets"
                explanation="Access a curated selection of exclusive, secure investment opportunities with varying yield potentials, tailored to suit different risk profiles and financial goals."
              />
                <Image
                  src={noncustodial}
                  alt="mission"
                  width={360}
                  height={300}
                  className="w-[300px] lg:block hidden  "
                />
            </div>
            <div className="flex justify-between items-center my-6 lg:my-0 ">
              <FeatureCard
                height="max-w-[780px]  lg:mr-10"
                title="Exclusive Investment Opportunities"
                description="Discover Top-Tier, Secure Yield Options"
                explanation="Access a curated selection of exclusive, secure investment opportunities with varying yield potentials, tailored to suit different risk profiles and financial goals."
              />
                <Image
                  src={exclusive}
                  alt="mission"
                  width={220}
                  height={300}
                  className="w-[300px] lg:block translate-y-[-40px] hidden "
                />
            </div>
            <div className="flex justify-between items-center my-6 lg:my-0">
              <FeatureCard
                height="max-w-[780px]  lg:mr-10"
                title="Seamless Cross-Chain bridging"
                description="Effortlessly Connect Assets Across Blockchains"
                explanation="Access a curated selection of exclusive, secure investment opportunities with varying yield potentials, tailored to suit different risk profiles and financial goals."
              />
                <Image
                  src={crosschain}
                  alt="mission"
                  width={360}
                  height={300}
                  className="w-[300px] lg:block hidden "
                />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

interface FeatureProps {
  title: string;
  description: string;
  explanation: string;
  height?: string;
}

const FeatureCard: React.FC<FeatureProps> = ({
  title,
  description,
  explanation,
  height,
}) => {
  return (
    <section
      className={`rounded-[12px]   border-[#027EFF] border ${height} `}
    >
      <div
        className={` rounded-t-[12px] bg-[#0254a91f] border-b border-[#027EFF] px-8 py-6 ${homepagestyles.featureCard}`}
      >
        <h1 className="text-xl lg:text-2xl uppercase gilroy-black-bold text-white text-center md:text-left">
          {title}
        </h1>
        <div className="flex items-start md:items-center justify-center text-center md:justify-start md:text-left">
          <Image
            src={dot}
            alt="mission"
            width={20}
            height={20}
            className=""
          />
          <p className="text-white text-lg lg:text-xl gilroy-regular ml-2">
            {description}
          </p>
        </div>
      </div>
      <p
        className={`px-8 text-center md:text-left py-6 h-full text-white rounded-b-[12px] text-[19px] lg:text-[22px] bg-[#0254a91f]`}
      >
          {explanation}
      </p>
    </section>
  );
};

export default XentroFeatures;
