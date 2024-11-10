"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/app/images/xentroLogoWNameWhite.png";
import homepagestyles from "@/app/css/homepage.module.css";
import {
  useAccountModal,
  useConnectModal,
  
} from "@rainbow-me/rainbowkit";
import { useAccount,useDisconnect } from "wagmi";
import Loading from "@/app/(.)/loading";
import { MenuIcon } from "lucide-react";
import { trauncateAddressMiddle } from "../helpers";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const { isConnected, address } = useAccount();
  const {disconnect} = useDisconnect()

  const { openConnectModal } = useConnectModal();
    const { openAccountModal } = useAccountModal();
    const [loading,setLoading] = useState(true)
  const [hash,setHash] =useState("") 
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setLoading(false); // Ensure loading only on component mount, not on every render
    setIsMobileMenuOpen(false)
  }, [pathname]);
  const connectWalletButtonAction = async() => {
    console.log({openAccountModal})
    if (openAccountModal) {
      openAccountModal();
      return;
    }
    
    if (openConnectModal) {
      openConnectModal();
      return;
    }
    disconnect()

  };
  useLayoutEffect(()=>{
    
    if(window.location.hash){
  setHash( window.location.hash.replace("#",''))
    }else{
      setHash("")
    }

  },[hash,pathname])

  return (
    <>
    {loading?<Loading />:null}
      <nav className=" left-0 px-2 bg-[#00295310] bg-opacity-90 backdrop-blur-md fixed w-screen z-[10] top-0 py-4">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center "
          >
            <Image
              src={logo}
              alt="xentro"
              className="mx-auto w-[130px] md:w-[200px]"
            />
          </Link>
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="hidden md:block min-[1200px]:hidden"
            
          >
           <MenuIcon size={40} className=" text-white" />
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
              <Image src={logo} alt="xentro" className="mx-auto w-[80px]" />
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
              <li className="opacity-[0.5]">
                <Link href="" className="hover:text-blue-400">
                  Stake
                </Link>
              </li>
              <li className="opacity-[0.5]">
                <Link href="" className="hover:text-blue-400">
                  Bridge
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-blue-400">
                  FAQ
                </Link>
              </li>
             
            </ul>
          </div>

          {/* Desktop Navbar */}
          <div
            className={
              homepagestyles.bg_gradient_border +
              " border-0 p-[0.07em] rounded-full hd-shadow hidden w-[600px] min-[1200px]:block md:w-auto"
            }
            id="navbar-default"
          >
            <ul className=" flex flex-col h-16 px-10 mt-4  text-white md:flex-row md:space-x-8 md:items-center md:mt-0 md:border-0 bg-[#002953] w-full md:justify-between rounded-full  text-lg gilroy-regular font-medium">
              <li className="w-[80px]  relative h-full ">
                <Link
                  href="/ecosystem"
                  className={`h-full flex items-center justify-center px-3 bg-blue-700 md:bg-transparent md:p-0 `}
                >
                  Ecosystem
                </Link>
                <span
                  hidden={!pathname.includes("ecosystem")}
                  className="bg-white h-[5px] absolute w-full bottom-0 rounded-tl-[10px] rounded-tr-[10px]"
                ></span>
              </li>
              <li className="h-full w-[80px]  relative">
                <Link
                  href="/airdrop"
                  className={`h-full flex items-center justify-center py-2 px-3 bg-blue-700 md:bg-transparent md:p-0 `}
                >
                  Airdrop
                </Link>
                <span
                  hidden={!pathname.includes("airdrop")}
                  className="bg-white h-[5px] absolute w-full bottom-0 rounded-tl-[10px] rounded-tr-[10px]"
                ></span>
              </li>
              <li className=" w-[80px] relative h-full opacity-[0.5]">
                <Link
                  href="/stake"
                  className={`h-full flex items-center justify-center py-2 px-3 bg-blue-700 md:bg-transparent md:p-0 `}
                >
                  Stake
                </Link>
                <span
                  hidden={!pathname.includes("stake")}
                  className="bg-white h-[5px] absolute w-full bottom-0 rounded-tl-[10px] rounded-tr-[10px]"
                ></span>
              </li>
              <li className=" w-[80px] relative h-full opacity-[0.5]">
                <Link
                  href=""
                  className={` h-full flex items-center justify-center py-2 px-3 bg-blue-700 md:bg-transparent md:p-0 `}
                >
                  Bridge
                </Link>
                <span
                  hidden={!pathname.includes("bridge")}
                  className="bg-white h-[5px] absolute w-full bottom-0 rounded-tl-[10px] rounded-tr-[10px]"
                ></span>
              </li>
              <li className=" w-[80px] relative h-full ">
                <Link
                  href="#faq"
                  className={` h-full flex items-center justify-center py-2 px-3 bg-blue-700 md:bg-transparent md:p-0 `}
                >
                  FAQ
                </Link>
                <span
                  hidden ={hash != "faq"}
                  className="bg-white h-[5px] absolute w-full bottom-0 rounded-tl-[10px] rounded-tr-[10px]"
                ></span>
              </li>
            </ul>
          </div>

          <div
            className={
              homepagestyles.bg_gradient_border +
              " border-0 p-[0.07em] rounded-full hd-shadow  max-w-[250px] block"
            }
          >
            <button
              onClick={connectWalletButtonAction}
              className="bg-[#002953] w-full h-full rounded-full overflow-hidden text-ellipsis px-4 md:px-5 py-2 text-white text-[14px] md:text-lg gilroy-regular font-semibold"
            >
              {isConnected ? trauncateAddressMiddle(address,4) : "Connect Wallet"}
            </button>
          </div>

          <button
            onClick={toggleMobileMenu}
            type="button"
            className="md:hidden"
            
          >
           <MenuIcon size={40} className=" text-white" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
