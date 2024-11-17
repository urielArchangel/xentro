import React from "react";
import Image from "next/image";
import homepagestyles from "@/app/css/homepage.module.css";
import heroimage from "@/app/images/ecosystem/ecosystem.png";
import slider from "@/app/images/airdrop/xentroLogoSlider.png";
import ecosystemcss from '@/app/css/airdrop.module.css'
import Link from "next/link";

const EcosystemHero = () => {
  return (
    <>
      <section className="grid grid-cols-1 min-[769px]:grid-cols-5 px-[8%] pt-[15%] min-[769px]:pt-[10%] min-[1500px]:pt-[6%] place-items-center" >
        <div className="min-[769px]:col-span-3 text-center min-[769px]:text-start" data-aos='fade-right'>
          <h1 className="text-white gilroy-black-bold text-4xl lg:text-5xl min-[1500px]:text-6xl text-center min-[769px]:text-start mb-10" >
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
              " border-0 p-[0.07em] rounded-full hd-shadow inline-block"
            }
          >
            <Link href="/airdrop" className="block bg-[#091420] w-full h-full rounded-full  px-5 py-3 text-white text-xl gilroy-bold">
              Join Xentro
            </Link>
          </div>
        </div>
        <div className="min-[769px]:col-span-2 scale-[0.8] min-[769px]:scale-[1]">
          <Image
            data-aos="fade-left"
            src={heroimage}
            alt="heroimage"
            className="mix-blend-multiply"
          />
        </div>
      </section>
      <section className="relative w-full  h-[60px] md:h-[100px] lg:h-[120px] flex items-center my-12 md:my-20">
        <Image src={slider} alt="slider"  className="block mx-auto absolute  left-0 right-0 w-28 md:w-44"/>
     <div className="absolute text-white flex justify-around w-full top-0 bg-[#00000020] backdrop-blur-[20px] h-full items-center text-[19px] md:text-[28px] lg:text-[35px] font-semibold overflow-hidden">
      <p className={ecosystemcss.XENTRO_text + '  ' + ecosystemcss.slideranimation} >$XENTRO</p>
      <p className={ecosystemcss.XENTRO_text + '  ' + ecosystemcss.slideranimation}>$XENTRO</p>
      <p className={ecosystemcss.XENTRO_text + '  ' + ecosystemcss.slideranimation}>$XENTRO</p>

     </div>
      </section>    </>
  );
};

export default EcosystemHero;
