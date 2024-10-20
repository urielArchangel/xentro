import React from "react";
import homepagestyles from "@/app/css/homepage.module.css";
import underline from "@/app/images/underline.png";
import xentrobadge from "@/app/images/badge.png";
import Image from "next/image";

const MintBadge = () => {
  return (
    <>
      <section className="px-[8%] pt-[8%]">
        <h3 className="text-white gilroy-bold text-3xl md:text-4xl lg:text-5xl mb-10 text-center">
          Mint Your{" "}
          <span className="inline-block relative">
            <span
              className={`${homepagestyles.gradientText} text-white gilroy-bold text-4xl`}
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
          Badge
        </h3>
        <div className="flex justify-center items-center flex-col min-[961px]:flex-row space-y-10 min-[961px]:space-y-0 min-[961px]:space-x-10">
          <XentroBadge
            title="Xentro Community Badge"
            description="Complete all Xentro Exclusive Social Tasks."
          />
          <XentroBadge
            title="Xentro Warrior Badge"
            description="Join the ranks of the Xentro Warriors and be eligible for the airdrop."
          />
        </div>
      </section>
    </>
  );
};

interface MintBadgeProps {
  title: string;
  description: string;
}

const XentroBadge: React.FC<MintBadgeProps> = ({ title, description }) => {
  return (
    <div className="bg-[#0028511f] p-5 rounded-xl text-white border border-[#002953] min-[480px]:h-[530px] min-[480px]:relative w-[90%] min-[480px]:w-max">
      <div className="group relative">
        <div className={`blur-sm p-1`}>
          <Image
            src={xentrobadge}
            alt="badge"
            className="rounded-xl min-[480px]:w-[400px]"
          />
        </div>
        <div
          className={`absolute inset-0 flex justify-center border-[0.5px] border-[#002953] rounded-lg font-bold text-white transition-opacity duration-300 opacity-100
          `}
        >
          <div className="flex flex-col justify-end items-center font-bold">
            <ul className="flex min-[480px]:space-x-5 space-x-1 gilroy-bold min-[480px]:text-3xl text-xl min-[480px]:mb-10 mb-4">
              <li className="p-1 min-[480px]:w-10 min-[480px]:h-12 w-8 h-8 text-center rounded-md bg-[#254367]">
                0
              </li>
              <li className="p-1 min-[480px]:w-10 min-[480px]:h-12 w-8 h-8 text-center rounded-md bg-[#254367]">
                1
              </li>
              <li className="p-1 min-[480px]:w-10 min-[480px]:h-12 w-8 h-8 text-center rounded-md bg-[#254367]">
                4
              </li>
              <li className="p-1 min-[480px]:w-10 min-[480px]:h-12 w-8 h-8 text-center rounded-md bg-[#254367]">
                7
              </li>
              <li className="p-1 min-[480px]:w-10 min-[480px]:h-12 w-8 h-8 text-center rounded-md bg-[#254367]">
                4
              </li>
              <li className="p-1 min-[480px]:w-10 min-[480px]:h-12 w-8 h-8 text-center rounded-md bg-[#254367]">
                2
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-xl font-semibold tracking-wide my-3">{title}</p>
      <p className="text-sm font-light min-[480px]:w-[400px]">{description}</p>
      <div
        className={
          homepagestyles.bg_gradient_border +
          " border-0 p-[0.06em] rounded-full hd-shadow mt-8 inline-block w-full min-[480px]:w-[90%] min-[480px]:absolute bottom-6 left-5"
        }
      >
        <button className="bg-[#08131E] w-full h-full rounded-full px-5 py-2 text-[#0477EF] text-xl">
          <span className="flex justify-center items-center gap-2">
            <svg
              width="18"
              height="20"
              viewBox="0 0 29 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.65276 8.51785V12.5089H19.6304V8.51785C19.6304 5.76152 17.3979 3.52901 14.6416 3.52901C11.8853 3.52901 9.65276 5.76152 9.65276 8.51785ZM6.65946 12.5089V8.51785C6.65946 4.10896 10.2327 0.535706 14.6416 0.535706C19.0505 0.535706 22.6237 4.10896 22.6237 8.51785V12.5089H24.6193C26.8206 12.5089 28.6104 14.2987 28.6104 16.5V28.4732C28.6104 30.6745 26.8206 32.4643 24.6193 32.4643H4.66392C2.4626 32.4643 0.672852 30.6745 0.672852 28.4732V16.5C0.672852 14.2987 2.4626 12.5089 4.66392 12.5089H6.65946ZM3.66616 16.5V28.4732C3.66616 29.022 4.11515 29.471 4.66392 29.471H24.6193C25.1681 29.471 25.617 29.022 25.617 28.4732V16.5C25.617 15.9512 25.1681 15.5022 24.6193 15.5022H4.66392C4.11515 15.5022 3.66616 15.9512 3.66616 16.5Z"
                fill="#0477EF"
              />
            </svg>
            <span className="font-semibold">Locked</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default MintBadge;
