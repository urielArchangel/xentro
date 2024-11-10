import React from "react";
import footercss from "@/app/css/footer.module.css";
import Image from "next/image";
import logo from "@/app/images/xentroLogoWNameWhite.png";
import airdropcss from "@/app/css/airdrop.module.css";
import discord from "@/app/images/socials/Discord.png";
import medium from "@/app/images/socials/Medium.png";
import x from "@/app/images/socials/XTask.png";
import telegram from "@/app/images/socials/Telegram.png";
import instagram from "@/app/images/socials/Instagram.png";
import star from "@/app/images/socials/Star.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-[#ffffff8d] w-[90%]  mx-auto gilroy-regular pb-8">
      {/* desktop */}
      <div
        className={
          footercss.bg_gradient_border +
          " border-0 p-[0.07em] rounded-[18px] hd-shadow block "
        }
      >
        <section
          className={
            footercss.innterContainerBG +
            " relative p-10 pt-20 flex-col flex items-between w-full h-full rounded-[18px] "
          }
        >
          <div className=" flex items-center flex-col gap-10 min-[1200px]:gap-0  w-full min-[1200px]:flex-row min-[1200px]:justify-around min-[1200px]:w-full max-w-[1300px] mx-auto" >
            <div className=" max-w-[400px] w-full ">
              <Image src={logo} alt="xentro" className="block mb-8" />
              <h6 className="text-[18px] text-white max-w-[400px]">
                Gateway to UNTRAD Banking <br /> Enjoy Finance on a Freeway with
                Xentro
              </h6>
              <section>
                <ul className="flex items-center space-x-5 my-4">
                  <li>
                  <Link href="https://medium.com/@joinxentro" target="_blank">

                    <Image src={medium} alt="medium" className="w-10" />
                    </Link>
                  </li>
                  <li>
                  <Link href="" className="opacity-[0.5]">

                    <Image src={discord} alt="discord" className="w-10" />
                    </Link>
                  </li>
                  <li>
                  <Link href="https://twitter.com/joinxentro" target="_blank">

                    <Image src={x} alt="x" className="w-10" />
                    </Link>
                  </li>
                  <li>
                  <Link href="https://t.me/joinxentro" target="_blank"> 
                    <Image src={telegram} alt="telegram" className="w-10" />
                    </Link>
                  </li>
                  <li>
                  <Link href="https://www.instagram.com/joinxentro/" target="_blank">
                    <Image src={instagram} alt="instagram" className="w-10" />
                    </Link>
                  </li>
                  <li>
                  <Link href="" className="opacity-[0.5]">
                    <Image src={star} alt="star" className="w-10" />
                    </Link>
                  </li>
                </ul>
              </section>
            </div>

            <div className=" text-[20px] font-semibold w-full max-w-[400px]  ">
              <h6 className="text-white mb-4">Quick links</h6>
              <ul className="grid grid-cols-2 gap-4 ">
                <li>
                  <Link href="/ecosystem">Ecosystem</Link>
                </li>
                <li>
                  <Link href="" className="opacity-[0.5]">
                    Stake
                  </Link>
                </li>
                <li>
                  <Link href="/airdrop">Airdrop</Link>
                </li>
                <li>
                  <Link href="" className="opacity-[0.5]">
                    Bridge{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/faq"> FAQ </Link>
                </li>
                <li>
                  <Link href="" className="opacity-[0.5]">
                    LaunchPad
                  </Link>
                </li>
                <li>
                  <Link href={"/terms-and-condition"}>Terms & Conditions</Link>
                </li>
                <li>
                  <Link href={"/privacy-policy"}>Privacy Policy</Link>
                </li>
              </ul>
            </div>
          <div className="min-[1200px]:max-w-[300px] text-center min-[1200px]:text-left max-w-[400px] w-full">
            <h6 className="text-[20px] text-white pt-8 font-semibold mx-5">
              For partnerships, please get in touch with us at
            </h6>
            <div
              className={
                airdropcss.bg_gradient_border +
                " border-0 p-[0.07em] w-full rounded-[11px] hd-shadow mt-8"
              }
            >
              <button className="bg-[#021327] block w-full h-full rounded-[11px] px-6 py-4 text-white text-[20px] font-bold">
                info@joinxentro.com
              </button>
            </div>
          </div>
        </div>
          <p className="text-center mx-auto  text-[20px] mt-10 md:mt-10 ">
            Copyright © 2024 Xentro. All rights reserved.
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
