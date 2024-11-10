import React from "react";
import Link from "next/link";
import Image from "next/image";
import ecosystemstyles from "@/app/css/ecosystem.module.css";
import homepagestyles from "@/app/css/homepage.module.css";
import heroimage from "@/app/images/airdrophero.png";
import slider from "@/app/images/airdrop/xentroLogoSlider.png";
import underline from "@/app/images/underline.png";
import airdropcss from '@/app/css/airdrop.module.css'

const AirdropHero = () => {
  return (
    <>
      <section className="grid grid-cols-1 min-[769px]:grid-cols-5 px-[8%] pt-[15%] min-[769px]:pt-[10%] min-[1500px]:pt-[6%] place-items-center">
        <div className="min-[769px]:col-span-3 text-center min-[769px]:text-start">
          <h1 className="text-white gilroy-black-bold text-4xl lg:text-6xl min-[1500px]:text-7xl text-center min-[769px]:text-start mb-10">
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
          <p className="text-white gilroy-regular text-lg md:text-xl text-center min-[769px]:text-start w-[100%] mb-10 min-[1500px]:text-2xl">
            Embrace Early Adoption and Earn Exclusive Rewards
          </p>
          <div
            className={
              homepagestyles.bg_gradient_border +
              " border-0 p-[0.07em] rounded-full hd-shadow inline-block"
            }
          >
            < Link href="#exclusive" className="bg-[#091420] w-full h-full rounded-full  px-5 py-3 text-white text-xl gilroy-bold">
              Join Xentro
            </  Link>
          </div>
          <div
            className={
              homepagestyles.bg_gradient_border +
              " border-0 p-[0.07em] rounded-full hd-shadow inline-block ml-5"
            }
          >
            <Link href="#faq" className="bg-[#091420] w-full h-full rounded-full  px-5 py-3 text-white text-xl gilroy-bold block">
              FAQ
            </Link>
          </div>
        </div>
        <div className="min-[769px]:col-span-2 scale-[0.7] min-[769px]:scale-[1]">
          <Image src={heroimage} alt="heroimage" />
        </div>
      </section>
      <section className="relative w-full  h-[60px] md:h-[100px] lg:h-[120px] flex items-center my-12 md:my-20">
        <Image src={slider} alt="slider"  className="block mx-auto absolute  left-0 right-0 w-28 md:w-44"/>
     <div className="absolute text-white flex justify-around w-full top-0 bg-[#00000020] backdrop-blur-[20px] h-full items-center text-[19px] md:text-[28px] lg:text-[35px] font-semibold overflow-hidden">
      <p className={airdropcss.XENTRO_text + '  ' + airdropcss.slideranimation} >AIRDROP INCOMING!</p>
      <p className={airdropcss.XENTRO_text + '  ' + airdropcss.slideranimation}>AIRDROP INCOMING!</p>
      <p className={airdropcss.XENTRO_text + '  ' + airdropcss.slideranimation}>AIRDROP INCOMING!</p>

     </div>
      </section>
      
    </>
  );
};

export default AirdropHero;
