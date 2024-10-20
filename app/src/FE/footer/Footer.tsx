import React from "react";
import footercss from "@/app/css/footer.module.css";
import Image from "next/image";
import logo from "@/app/images/xentroLogoWNameWhite.png";
import airdropcss from "@/app/css/airdrop.module.css";
import discord from "@/app/images/socials/Discord.png";
import medium from "@/app/images/socials/Medium.png";
import x from "@/app/images/socials/Twitter.png";
import telegram from "@/app/images/socials/Telegram.png";
import instagram from "@/app/images/socials/Instagram.png";
import star from "@/app/images/socials/Star.png";

const Footer = () => {
  return (
    <footer className="text-[#ffffff8d] w-[90%] mx-auto gilroy-regular">
      {/* desktop */}
      <div
        className={
          footercss.bg_gradient_border +
          " border-0 p-[0.07em] rounded-[18px] hd-shadow min-[850px]:block hidden"
        }
      >
        <section
          className={
            footercss.innterContainerBG +
            " relative py-28 flex-wrap flex justify-around w-full h-full rounded-[18px] px-14 "
          }
        >
          <div className="self-start">
            <Image src={logo} alt="xentro" className="block mb-8" />
            <h6 className="text-[18px] text-white max-w-[400px]">
              Gateway to UNTRAD Banking <br /> Enjoy Finance on a Freeway with
              Xentro
            </h6>
            <section>
              <ul className="flex items-center space-x-5 my-10">
                <li>
                  <Image src={medium} alt="medium" />
                </li>
                <li>
                  <Image src={discord} alt="discord" />
                </li>
                <li>
                  <Image src={x} alt="x" />
                </li>
                <li>
                  <Image src={telegram} alt="telegram" />
                </li>
                <li>
                  <Image src={instagram} alt="instagram" />
                </li>
                <li>
                  <Image src={star} alt="star" />
                </li>
              </ul>
              <ul className="text-[20px] font-bold space-y-4 my-10">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </section>
          </div>
          <div className="flex text-[20px] font-semibold items-center justify-between w-full max-w-[320px] self-center mx-10">
            <ul className="space-y-4">
              <li>Medium</li>
              <li>Discord</li>
              <li>Twitter</li>
              <li>Telegram</li>
              <li>Instagram</li>
              <li>TrustPilot</li>
            </ul>
            <ul className="space-y-4">
              <li>Ecosystem</li>
              <li>Airdrop</li>
              <li>Stake</li>
              <li>Bridge</li>
              <li>LaunchPad</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="self-center">
            <h6 className="max-w-[300px] text-[20px] font-semibold mx-5">
              For partnerships, please get in touch with us at
            </h6>
            <div
              className={
                airdropcss.bg_gradient_border +
                " border-0 p-[0.06em] rounded-[11px] hd-shadow mt-8"
              }
            >
              <button className="bg-[#021327] block w-full h-full rounded-[11px] px-6 py-4 text-white text-[20px] font-bold">
                info@joinxentro.com
              </button>
            </div>
          </div>
          <p className="text-center absolute left-0 right-0 mx-auto bottom-6 text-[20px]">
            Copyright © 2024 Xentro. All rights reserved.
          </p>
        </section>
      </div>
      {/* mobile */}
      <div
        className={
          footercss.bg_gradient_border +
          " border-0 p-[0.07em] rounded-[18px] hd-shadow min-[850px]:hidden block"
        }
      >
        <section
          className={
            footercss.innterContainerBG +
            " relative py-28 flex-col items-center flex justify-center w-full h-full rounded-[18px] px-5"
          }
        >
          <div className="flex flex-col justify-center items-center">
            <Image src={logo} alt="xentro" className="block mb-8 w-[200px]" />
            <h6 className="text-[18px] text-white text-center mb-8">
              Gateway to UNTRAD Banking <br /> Enjoy Finance on a Freeway with
              Xentro
            </h6>
          </div>
          <div className="flex text-[20px] font-semibold items-center justify-between w-full max-w-[320px] self-center">
            <ul className="space-y-4">
              <li>Medium</li>
              <li>Discord</li>
              <li>Twitter</li>
              <li>Telegram</li>
              <li>Instagram</li>
              <li>TrustPilot</li>
            </ul>
            <ul className="space-y-4">
              <li>Ecosystem</li>
              <li>Airdrop</li>
              <li>Stake</li>
              <li>Bridge</li>
              <li>LaunchPad</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <section>
              <ul className="flex items-center space-x-5 my-10">
                <li>
                  <Image src={medium} alt="medium" />
                </li>
                <li>
                  <Image src={discord} alt="discord" />
                </li>
                <li>
                  <Image src={x} alt="x" />
                </li>
                <li>
                  <Image src={telegram} alt="telegram" />
                </li>
                <li>
                  <Image src={instagram} alt="instagram" />
                </li>
                <li>
                  <Image src={star} alt="star" />
                </li>
              </ul>
              <ul className="text-[20px] font-bold space-y-4 my-10 text-center">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </section>
          </div>
          <div className="self-center">
            <h6 className="text-[20px] font-semibold text-center mt-8">
              For partnerships, please get in touch with us at
            </h6>
            <div
              className={
                airdropcss.bg_gradient_border +
                " border-0 p-[0.06em] rounded-[11px] hd-shadow mt-8"
              }
            >
              <button className="bg-[#021327] block w-full h-full rounded-[11px] px-6 py-4 text-white text-[20px] font-bold">
                info@joinxentro.com
              </button>
            </div>
          </div>
          <p className="text-center absolute left-0 right-0 mx-auto bottom-6 text-[20px] ">
            Copyright © 2024 Xentro. All rights reserved.
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
