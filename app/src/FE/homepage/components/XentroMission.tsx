import React from "react";
import homepagestyles from "@/app/css/homepage.module.css";
import mission from "@/app/images/mission.png";
import underline from "@/app/images/underline.png";
import Image from "next/image";

const Xentromission = () => {
  return (
      <div className="w-full mx-auto flex max-w-[1200px] md:flex-row flex-col items-center md:justify-between my-10 mb-20 md:mb-40">
        <div className="mt-10 md:mt-0">
          <p className="text-white gilroy-bold hidden md:block md:text-[45px] ">
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
                className="absolute bottom-[0] left-0"
              />
            </span>{" "}
            Mission:
          </p>
          <p className="text-white gilroy-bold text-[30px] md:hidden text-center w-full">
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
                className="absolute bottom-[0] left-0"
              />
            </span>{" "}
            Mission
          </p>
          <p className=" text-white text-[19px] md:text-[22px] max-w-[700px] text-center md:text-left">
            At Xentro, our mission is to revolutionize financial management by
            leveraging the power of blockchain technology. We aim to provide a
            transparent, secure, and user-centric platform that enables you to
            take full control of your financial future.
          </p>
        </div>
          <Image
            src={mission}
            alt="mission"
            width={300}
            height={300}
            className=" w-[320px] h-[320px] block my-10 md:my-0"
          />
      </div>
  
  );
};

export default Xentromission;
