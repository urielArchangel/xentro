"use client";
import React, { useState, useEffect } from "react";
import homepagestyles from "@/app/css/homepage.module.css";
import underline from "@/app/images/underline.png";
import bar from "@/app/images/featureBar.png";
import dot from "@/app/images/dot.svg";
import defi from "@/app/images/defi.png";
import crosschain from "@/app/images/crosschain.png";
import exclusive from "@/app/images/exclusive.png";
import noncustodial from "@/app/images/noncustodial.png";
import Image from "next/image";

const XentroFeatures = () => {
  const [imageWidth, setImageWidth] = useState(7);

  const updateImageWidth = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 556) {
      setImageWidth(7);
    } else if (screenWidth <= 768) {
      setImageWidth(6.7);
    } else if (screenWidth >= 1109) {
      setImageWidth(6.5);
    } else if (screenWidth <= 1023) {
      setImageWidth(9.4);
    } else {
      setImageWidth(7);
    }
  };

  useEffect(() => {
    updateImageWidth();

    window.addEventListener("resize", updateImageWidth);

    return () => {
      window.removeEventListener("resize", updateImageWidth);
    };
  }, []);

  return (
    <>
      <div className="py-16 lg:px-20 md:px-10 px-4">
        <div className="flex justify-center">
          <p className="text-white gilroy-bold text-3xl md:text-4xl lg:text-5xl mb-10 min-[1500px]:text-6xl">
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
            Features
          </p>
        </div>
        <section className="grid grid-cols-8 lg:grid-cols-7 items-stretch">
          <div className="h-full">
            <Image src={bar} alt="mission" width={imageWidth} height={300} />
          </div>
          <div className="col-span-7 lg:col-span-6 h-full">
            <div className="grid grid-cols-7 md:grid-cols-6 md:mb-32 mt-5">
              <FeatureCard
                height="min-[1381px]:h-[232px]"
                title="Decentralized Finance (DeFi) Integration"
                description="Seamlessly Connect with the Future of Finance"
                explanation="Access a wide range of DeFi services directly from our platform, allowing you to earn, borrow, and invest with unprecedented ease and security."
              />
              <div className="col-span-7 lg:col-span-2 flex justify-center items-center md:ml-20 mt-10 lg:mt-0">
                <Image
                  src={defi}
                  alt="mission"
                  width={270}
                  height={300}
                  className="md:scale-[1] scale-[0.7] translate-x-[-15px] sm:translate-x-[-30px] lg:translate-x-[0]"
                />
              </div>
            </div>
            <div className="grid grid-cols-7 lg:grid-cols-6 mb-10 md:mb-32">
              <FeatureCard
                title="Non-Custodial Management"
                description="Retain Full Control Over Your Assets"
                explanation="Access a curated selection of exclusive, secure investment opportunities with varying yield potentials, tailored to suit different risk profiles and financial goals."
              />
              <div className="col-span-7 lg:col-span-2 flex justify-center items-center lg:ml-20 mt-10 lg:mt-0">
                <Image
                  src={noncustodial}
                  alt="mission"
                  width={360}
                  height={300}
                  className="md:scale-[1] scale-[0.7] translate-x-[-15px] sm:translate-x-[-30px] lg:translate-x-[0]"
                />
              </div>
            </div>
            <div className="grid grid-cols-7 lg:grid-cols-6 md:mb-32">
              <FeatureCard
                title="Exclusive Investment Opportunities"
                description="Discover Top-Tier, Secure Yield Options"
                explanation="Access a curated selection of exclusive, secure investment opportunities with varying yield potentials, tailored to suit different risk profiles and financial goals."
              />
              <div className="col-span-7 lg:col-span-2 flex justify-center items-center lg:ml-20 mt-10 lg:mt-0">
                <Image
                  src={exclusive}
                  alt="mission"
                  width={220}
                  height={300}
                  className="md:scale-[1] scale-[0.7] translate-x-[-15px] sm:translate-x-[-30px] lg:translate-x-[0]"
                />
              </div>
            </div>
            <div className="grid grid-cols-7 lg:grid-cols-6 md:mb-32">
              <FeatureCard
                title="Seamless Cross-Chain bridging"
                description="Effortlessly Connect Assets Across Blockchains"
                explanation="Access a curated selection of exclusive, secure investment opportunities with varying yield potentials, tailored to suit different risk profiles and financial goals."
              />
              <div className="col-span-7 lg:col-span-2 flex justify-center items-center lg:ml-5 mt-10 lg:mt-0">
                <Image
                  src={crosschain}
                  alt="mission"
                  width={360}
                  height={300}
                  className="md:scale-[1] scale-[0.7] translate-x-[-15px] sm:translate-x-[-30px] lg:translate-x-[0]"
                />
              </div>
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
    <div
      className={`rounded-2xl col-span-7 lg:col-span-4 translate-x-[-15px] sm:translate-x-[-30px] lg:translate-x-[-70px] border-[#027EFF] border ${height}  min-[1500px]:h-[235px]`}
    >
      <div
        className={`md:py-7 md:px-5 px-3 py-3 rounded-t-2xl h-auto ${homepagestyles.featureCard}`}
      >
        <p className="text-sm md:text-lg lg:text-2xl uppercase gilroy-black-bold text-white">
          {title}
        </p>
        <div className="flex items-center">
          <Image
            src={dot}
            alt="mission"
            width={20}
            height={20}
            className="scale-[0.7] md:scale-[1]"
          />
          <p className="text-white text-xs md:text-md lg:text-xl gilroy-regular ml-2">
            {description}
          </p>
        </div>
      </div>
      <div
        className={`md:py-7 md:px-5 px-3 py-3 rounded-b-2xl border-t border-t-[#027EFF] h-auto ${homepagestyles.featureCard}`}
      >
        <p className="text-white text-xs md:text-md lg:text-xl gilroy-regular">
          {explanation}
        </p>
      </div>
    </div>
  );
};

export default XentroFeatures;
