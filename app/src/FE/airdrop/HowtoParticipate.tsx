import React from "react";
import participate from "@/app/images/airdrop/howToParticipate.png";
import logo from "@/app/images/xentrotext.png";
import Image from "next/image";

const HowtoParticipate = () => {
  return (
    <>
      <section className="px-[8%] mt-28 overflow-hidden" id="exclusive">
        <div className="flex justify-center">
          <p className="text-white gilroy-bold text-3xl md:text-4xl lg:text-5xl mb-10">
            How To Participate
          </p>
        </div>
        <div className="relative">
          <Image src={participate} alt="shield" className="z-10"  data-aos="zoom-in" data-aos-delay="100" data-aos-duration="700" data-aos-easing="ease-out"/>

       
        </div>
      </section>
    </>
  );
};

export default HowtoParticipate;
