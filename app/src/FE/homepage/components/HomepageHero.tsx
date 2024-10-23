import React from "react";
import Image from "next/image";
import homepagestyles from "@/app/css/homepage.module.css";
import round from "@/app/images/circle.png";
import Link from "next/link";

const HomepageHero = () => {
  return (
    <>
      <div className={`${homepagestyles.hero} w-full`}>
        <div
          className={`flex flex-col items-center gap-2 md:gap-5 pb-20 pt-24 px-[4%] ${homepagestyles.zindex}`}
        >
          <h1 className="text-white gilroy-black-bold text-2xl min-[340px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl min-[1500px]:text-8xl min-[1500px]:pt-20 text-center">
            Enjoy Finance on a <br /> Freeway with{" "}
            <span className="inline-block relative">
              <span className={`text-white gilroy-bold`}>XENTRO</span>
              <Image
                src={round}
                alt="underline"
                className="absolute translate-y-[-30px] min-[340px]:translate-y-[-35px] sm:translate-y-[-38px] md:translate-y-[-50px] lg:translate-y-[-60px] min-[1500px]:translate-y-[-100px] scale-[1.1]"
              />
            </span>{" "}
          </h1>
          <p className="text-white gilroy-regular md:text-2xl sm:text-xl text-lg lg:text-3xl text-center font-semibold">
            Gateway to UNTRAD Banking
          </p>
          <p className="text-white gilroy-regular text-sm sm:text-md md:text-lg text-center w-[70%] md:w-[60%]">
            Unlock vast financial opportunities and effortlessly trade, earn
            interest and borrow assets across multiple blockchains, creating a
            unified and borderless financial network.
          </p>
          <div
            className={
              homepagestyles.bg_gradient_border +
              " border-0 p-[0.07em] rounded-full hd-shadow mt-8 inline-block"
            }
          >
            <Link href="/airdrop" className="bg-[#002953] block w-full h-full rounded-full md:px-5 md:py-3 px-2 py-1 text-white text-lg md:text-xl gilroy-regular font-semibold">
              Join Xentro Airdrop
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageHero;
