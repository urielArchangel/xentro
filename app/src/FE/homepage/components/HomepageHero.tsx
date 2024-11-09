import React from "react";
import Image from "next/image";
import homepagestyles from "@/app/css/homepage.module.css";
import round from "@/app/images/circle.png";
import Link from "next/link";

const HomepageHero = () => {
  return (
    <>
      <div className={`${homepagestyles.hero} `}>
        <div
          className={`max-w-[1021px]  mx-auto pt-36 text-center`}
        >
          <h1 className="text-white gilroy-black-bold my-4 text-[35px] md:text-[65px] leading-[44px] md:leading-[64px] mt-24 md:mt-0">
            Enjoy Finance on a <br /> Freeway with{" "}
            <span className="inline-block relative">
              <span className={`text-white gilroy-bold relative`}>XENTRO</span>
              <Image
                src={round}
                alt="underline"
                className="absolute top-1 md:top-0 scale-[1.2] "
              />
            </span>{" "}
          </h1>
          <p className="text-white gilroy-regular text-2xl md:text-[33px] font-semibold my-4 ">
            Gateway to UNTRAD Banking
          </p>
          <p className="text-white gilroy-regular w-full text-[20px] my-2 ">
            Unlock vast financial opportunities and effortlessly trade, earn
            interest and borrow assets across multiple blockchains, creating a
            unified and borderless financial network.
          </p>
          <div
            className={
              homepagestyles.bg_gradient_border +
              " border-0 p-[0.07em] rounded-full hd-shadow mt-4 inline-block"
            }
          >
            <Link href="/airdrop" className="bg-[#002953] h-full block rounded-full text-white gilroy-regular py-4 px-6 text-xl font-semibold">
              Join Xentro Airdrop
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageHero;
