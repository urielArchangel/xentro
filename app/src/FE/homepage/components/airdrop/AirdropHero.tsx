import React from "react";
import Link from "next/link";
import Image from "next/image";
import ecosystemstyles from "@/app/css/ecosystem.module.css";
import homepagestyles from "@/app/css/homepage.module.css";
import heroimage from "@/app/images/airdrophero.png";
import slider from "@/app/images/airdropslider.png";
import underline from "@/app/images/underline.png";
import Navbar from "../../../navbar/Navbar";

const AirdropHero = () => {
  return (
    <>
      <Navbar />
      <section className="grid grid-cols-5 px-[8%] pt-10 place-items-center">
        <div className="col-span-3">
          <h1 className="text-white gilroy-black-bold text-3xl md:text-4xl lg:text-6xl min-[1500px]:text-7xl text-start mb-10">
            <span className="inline-block relative">
              <span
                className={`${homepagestyles.gradientText} text-white gilroy-bold`}
              >
                XENTRO
              </span>
              <Image
                src={underline}
                alt="underline"
                width={300}
                height={30}
                className="absolute bottom-[-1] left-0 translate-y-[-10px]"
              />
            </span>{" "}
            <span>EARLY ADOPTERS AIRDROP</span>
          </h1>
          <p className="text-white gilroy-regular text-lg md:text-xl text-start w-[100%] mb-10 min-[1500px]:text-2xl">
            Embrace Early Adoption and Earn Exclusive Rewards
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
          <div
            className={
              homepagestyles.bg_gradient_border +
              " border-0 p-[0.06em] rounded-full hd-shadow inline-block ml-5"
            }
          >
            <button className="bg-[#091420] w-full h-full rounded-full  px-5 py-3 text-white text-xl gilroy-bold">
              FAQ
            </button>
          </div>
        </div>
        <div className="col-span-2">
          <Image src={heroimage} alt="heroimage" />
        </div>
      </section>
      <Image src={slider} alt="slider" />
    </>
  );
};

export default AirdropHero;
