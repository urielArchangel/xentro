'use client'
import React from "react";
import homepagestyles from "@/app/css/homepage.module.css";
import underline from "@/app/images/underline.png";
import check from "@/app/images/check.svg";
import Image from "next/image";

const JoinCommunity = () => {
  return (
    <>
      <section
        className={` py-16 ${homepagestyles.community}`}
      >
        <div className="flex justify-center">
          <p className="text-white gilroy-bold text-3xl md:text-4xl lg:text-5xl mb-10 text-center">
            Join the{" "}
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
            Community
          </p>
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row text-[20px] md:text-[24px] text-white gap-2 md:gap-10 gilroy-regular">
          <p className="flex items-center">
            <Image src={check} alt="check" width={20} height={20} />
            <span className="ml-2">Exclusive Updates</span>
          </p>
          <p className="flex items-center">
            <Image src={check} alt="check" width={20} height={20} />
            <span className="ml-2">Expert Insights</span>
          </p>
          <p className="flex items-center">
            <Image src={check} alt="check" width={20} height={20} />
            <span className="ml-2">Special Offers</span>
          </p>
        </div>
        <form className="flex justify-center items-center w-full ">
          <div className=" w-full flex justify-center  md:flex-row flex-col max-w-[800px] my-6">
            <input
              type="email"
              placeholder="Email Address"
              className="gilroy-regular w-full px-4 py-3 md:py-4 rounded-full  bg-[#1a2b3d42] border border-[#151515] focus:outline-none text-white placeholder:text-lg text-lg"
            />
            <div
              className={
                homepagestyles.bg_gradient_border +
                " border-0 p-[0.07em] rounded-full hd-shadow h-14  w-full max-w-[200px] mx-auto my-10 md:my-0"
              }
            >
              <button onClick={(e)=>{
                e.preventDefault()
              }} className="bg-[#021327] w-full  h-full rounded-full text-xl text-white gilroy-bold ">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default JoinCommunity;
