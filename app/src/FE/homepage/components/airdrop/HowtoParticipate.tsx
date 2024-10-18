import React from "react";
import participate from "@/app/images/participate.png";
import logo from "@/app/images/xentrotext.png";
import Image from "next/image";

const HowtoParticipate = () => {
  return (
    <>
      <section className="px-[8%] mt-28 overflow-hidden">
        <div className="flex justify-center">
          <p className="text-white gilroy-bold text-5xl mb-10">
            How To Participate
          </p>
        </div>
        <div className="relative">
          <Image src={participate} alt="shield" className="z-10" />

          <Image
            src={logo}
            alt="logo"
            className="absolute top-0 right-0 translate-x-[140px] scale-[0.8] translate-y-[-100px]"
          />
        </div>
      </section>
    </>
  );
};

export default HowtoParticipate;
