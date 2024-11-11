import React from "react";
import Image from "next/image";
import homepagestyles from "@/app/css/homepage.module.css";
import heroimage from "@/app/images/ecosystem/ecosystem.png";
import slider from "@/app/images/xentroslider.png";

const EcosystemHero = () => {
  return (
    <>
      <section className="grid grid-cols-1 min-[769px]:grid-cols-5 px-[8%] pt-[15%] min-[769px]:pt-[10%] min-[1500px]:pt-[6%] place-items-center">
        <div className="min-[769px]:col-span-3 text-center min-[769px]:text-start">
          <h1 className="text-white gilroy-black-bold text-4xl lg:text-5xl min-[1500px]:text-6xl text-center min-[769px]:text-start mb-10">
            <span className={`${homepagestyles.gradientText}`}>XENTRO</span> The
            Ultimate Web3 Financial Ecosystem
          </h1>
          <p className="text-white gilroy-regular text-lg md:text-xl text-center min-[769px]:text-start min-[769px]:w-[60%] mb-10">
            Empowering Your Digital Future with Seamless, Secure, and Innovative
            Financial Solutions
          </p>
          <div
            className={
              homepagestyles.bg_gradient_border +
              " border-0 p-[0.06em] rounded-full hd-shadow inline-block"
            }
          >
            <button className="bg-[#091420] w-full h-full rounded-full  px-5 py-3 text-white text-xl gilroy-bold">
              Join Xentro
            </button>
          </div>
        </div>
        <div className="min-[769px]:col-span-2 scale-[0.8] min-[769px]:scale-[1]">
          <Image
            src={heroimage}
            alt="heroimage"
            className="mix-blend-multiply"
          />
        </div>
      </section>
      <Image src={slider} alt="slider" />
    </>
  );
};

export default EcosystemHero;
