"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/app/images/xentroLogoWNameWhite.png";
import activeidentifier from "@/app/images/active.png";
import homepagestyles from "@/app/css/homepage.module.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-transparent px-[4%] bg-[#002953] bg-opacity-90 backdrop-blur-md fixed w-full z-[10000] top-0 start-0">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={logo} alt="xentro" className="mx-auto w-[200px]" />
          </Link>
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg min-[1000px]:hidden focus:outline-none"
          >
            <svg
              width="26"
              height="30"
              viewBox="0 0 26 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_7_1977)">
                <path
                  opacity="0.4"
                  d="M0.723633 15.0672C0.723633 14.0713 1.52829 13.2666 2.52427 13.2666H24.132C25.128 13.2666 25.9326 14.0713 25.9326 15.0672C25.9326 16.0632 25.128 16.8679 24.132 16.8679H2.52427C1.52829 16.8679 0.723633 16.0632 0.723633 15.0672Z"
                  fill="white"
                />
                <path
                  d="M25.9326 6.06334C25.9326 5.06736 25.128 4.2627 24.132 4.2627H2.52427C1.52829 4.2627 0.723633 5.06736 0.723633 6.06334C0.723633 7.05932 1.52829 7.86398 2.52427 7.86398H24.132C25.128 7.86398 25.9326 7.05932 25.9326 6.06334ZM25.9326 24.0698C25.9326 23.0738 25.128 22.2691 24.132 22.2691H2.52427C1.52829 22.2691 0.723633 23.0738 0.723633 24.0698C0.723633 25.0657 1.52829 25.8704 2.52427 25.8704H24.132C25.128 25.8704 25.9326 25.0657 25.9326 24.0698Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_7_1977">
                  <rect
                    width="25.209"
                    height="28.8103"
                    fill="white"
                    transform="translate(0.723633 0.661133)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>

          {/* Mobile Navbar */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } fixed top-0 right-0 z-40 w-full h-screen bg-gradient-to-b from-[#002953] to-[#000] text-white p-8 min-[1000px]:hidden gilroy-regular`}
          >
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse absolute top-6 left-6"
            >
              <Image src={logo} alt="xentro" className="mx-auto w-[100px]" />
            </Link>
            <button
              className="absolute top-6 right-6 text-white"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="space-y-6 mt-12 text-lg">
              <li>
                <Link href="/ecosystem" className="hover:text-blue-400">
                  Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/airdrop" className="hover:text-blue-400">
                  Airdrop
                </Link>
              </li>
              <li>
                <Link href="/stake" className="hover:text-blue-400">
                  Stake
                </Link>
              </li>
              <li>
                <Link href="/bridge" className="hover:text-blue-400">
                  Bridge
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-400">
                  FAQ
                </Link>
              </li>
              <li className="mt-8">
                <div
                  className={
                    homepagestyles.bg_gradient_border +
                    " border-0 p-[0.06em] rounded-full hd-shadow inline-block"
                  }
                >
                  <button className="bg-[#002953] w-full h-full rounded-full  px-5 py-3 text-white text-lg gilroy-regular font-semibold">
                    Connect Wallet
                  </button>
                </div>
              </li>
            </ul>
          </div>

          {/* Desktop Navbar */}
          <div
            className={
              homepagestyles.bg_gradient_border +
              " border-0 p-[0.06em] rounded-full hd-shadow hidden w-[600px] min-[1000px]:block md:w-auto"
            }
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4  mt-4 text-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-[#002953] w-full h-full rounded-full  px-5 py-3 text-white text-lg gilroy-regular font-medium">
              <li className="flex flex-col items-center">
                <Link
                  href="/ecosystem"
                  className={`py-2 px-3 bg-blue-700 md:bg-transparent md:p-0 `}
                >
                  Ecosystem
                </Link>
                <Image
                  src={activeidentifier}
                  alt="active"
                  width={100}
                  className={`${
                    pathname === "/ecosystem"
                      ? "block translate-y-[12px]"
                      : "hidden"
                  }`}
                />
              </li>
              <li className="flex flex-col items-center">
                <Link
                  href="/airdrop"
                  className={`py-2 px-3 bg-blue-700 md:bg-transparent md:p-0 `}
                >
                  Airdrop
                </Link>
                <Image
                  src={activeidentifier}
                  alt="active"
                  width={100}
                  className={`${
                    pathname === "/airdrop"
                      ? "block translate-y-[12px]"
                      : "hidden"
                  }`}
                />
              </li>
              <li className="flex flex-col items-center">
                <Link
                  href="/stake"
                  className={`py-2 px-3 bg-blue-700 md:bg-transparent md:p-0 `}
                >
                  Stake
                </Link>
                <Image
                  src={activeidentifier}
                  alt="active"
                  width={100}
                  className={`${
                    pathname === "/stake"
                      ? "block translate-y-[12px]"
                      : "hidden"
                  }`}
                />
              </li>
              <li className="flex flex-col items-center">
                <Link
                  href="/bridge"
                  className={`py-2 px-3 bg-blue-700 md:bg-transparent md:p-0 `}
                >
                  Bridge
                </Link>
                <Image
                  src={activeidentifier}
                  alt="active"
                  width={100}
                  className={`${
                    pathname === "/bridge"
                      ? "block translate-y-[12px]"
                      : "hidden"
                  }`}
                />
              </li>
              <li>
                <Link
                  href="/faq"
                  className={`py-2 px-3 bg-blue-700 md:bg-transparent md:p-0 `}
                >
                  FAQ
                </Link>
                <Image
                  src={activeidentifier}
                  alt="active"
                  width={100}
                  className={`${
                    pathname === "/faq" ? "block translate-y-[12px]" : "hidden"
                  }`}
                />
              </li>
            </ul>
          </div>
          <div
            className={
              homepagestyles.bg_gradient_border +
              " border-0 p-[0.06em] rounded-full hd-shadow inline-block hidden min-[1000px]:block"
            }
          >
            <button className="bg-[#002953] w-full h-full rounded-full  px-5 py-3 text-white text-lg gilroy-regular font-semibold">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
