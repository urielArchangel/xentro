import React from "react";
import homepagestyles from "@/app/css/homepage.module.css";
import mission from "@/app/images/mission.png";
import underline from "@/app/images/underline.png";
import Image from "next/image";

const Xentromission = () => {
  return (
      <div className="w-full mx-auto  py-16 flex md:flex-row flex-col items-center justify-between max-w-[1400px] ">
        <div className="text-center min-[769px]:text-start">
          <p className="text-white gilroy-bold text-3xl md:text-4xl lg:text-5xl mb-10 min-[1500px]:text-6xl">
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
            Mission:
          </p>
          <p className="mt-3 text-white text-sm sm:text-md md:text-lg gilroy-regular max-w-[550px]">
            At Xentro, our mission is to revolutionize financial management by
            leveraging the power of blockchain technology. We aim to provide a
            transparent, secure, and user-centric platform that enables you to
            take full control of your financial future.
          </p>
        </div>
        <div className="min-[1500px]:scale-[1.3] max-[768px]:scale-[0.8] flex justify-center mt-10 min-[769px]:mt-0">
          <Image
            src={mission}
            alt="mission"
            width={300}
            height={300}
            className="mx-auto w-[300px] h-[300px]"
          />
        </div>
      </div>
  
  );
};

export default Xentromission;
