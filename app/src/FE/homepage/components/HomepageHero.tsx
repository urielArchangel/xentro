import React from "react";
import Link from "next/link";
import Image from "next/image";
import homepagestyles from "@/app/css/homepage.module.css";
import round from "@/app/images/circle.png";
import Navbar from "../../navbar/Navbar";

const HomepageHero = () => {
  return (
    <>
      <Navbar />
      <div
        className={`flex flex-col items-center gap-5 pb-20 pt-24 ${homepagestyles.hero}`}
      >
        <h1 className="text-white gilroy-black-bold text-3xl md:text-4xl lg:text-6xl min-[1500px]:text-8xl min-[1500px]:pt-20 text-center">
          Enjoy Finance on a <br /> Freeway with{" "}
          <span className="inline-block relative">
            <span className={`text-white gilroy-bold`}>XENTRO</span>
            <Image
              src={round}
              alt="underline"
              className="absolute translate-y-[-60px] min-[1500px]:translate-y-[-100px] scale-[1.1]"
            />
          </span>{" "}
        </h1>
        <p className="text-white gilroy-regular md:text-2xl text-xl lg:text-3xl text-center">
          Gateway to UNTRAD Banking
        </p>
        <p className="text-white gilroy-regular text-lg md:text-xl text-center w-[60%]">
          Unlock vast financial opportunities and effortlessly trade, earn
          interest and borrow assets across multiple blockchains, creating a
          unified and borderless financial network.
        </p>
        <div
          className={
            homepagestyles.bg_gradient_border +
            " border-0 p-[0.06em] rounded-full hd-shadow mt-8 inline-block"
          }
        >
          <button className="bg-[#002953] w-full h-full rounded-full  px-5 py-3 text-white text-xl gilroy-regular font-semibold">
            Join Xentro Airdrop
          </button>
        </div>
      </div>
    </>
  );
};

export default HomepageHero;
