import React from "react";
import homepagestyles from "@/app/css/homepage.module.css";
import underline from "@/app/images/underline.png";
import check from "@/app/images/check.svg";
import Image from "next/image";

const JoinCommunity = () => {
  return (
    <>
      <section
        className={`px-[4%] md:px-[8%] py-16 ${homepagestyles.community}`}
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
        <div className="flex justify-center text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-white gap-2 md:gap-10 gilroy-regular">
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
        <form className="flex justify-center w-full sm:px-4">
          <div className="text-center w-full flex justify-center gap-2 md:gap-0">
            <input
              type="email"
              placeholder="Email Address"
              className="gilroy-regular px-3 py-3 md:px-5 md:py-4 rounded-full border-[#0477EF] w-full sm:w-[50%] mt-6 bg-[#1a2b3d42] border border-[#151515] focus:outline-none text-white placeholder:text-xl"
            />
            <div
              className={
                homepagestyles.bg_gradient_border +
                " border-0 p-[0.06em] rounded-full hd-shadow mt-4 inline-block w-[50%] sm:w-[20%] sm:ml-5"
              }
            >
              <button className="bg-[#021327] w-full h-full rounded-full px-3 py-1 md:px-5 md:py-3 text-white text-lg md:text-xl gilroy-bold">
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
