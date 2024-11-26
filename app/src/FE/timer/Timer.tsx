"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import styles from "@/app/css/timer.module.css";
import Image from "next/image";
import logo from "@/app/images/xentroLogoWNameWhite.png";
import rocket from "@/app/images/rocket.png";
import { subscribeEmail } from "../../BE/serveractions";
import useMessage from "antd/es/message/useMessage";
import youtube from "@/app/images/socials/yt.png";
import medium from "@/app/images/socials/Medium.png";
import x from "@/app/images/socials/XTask.png";
import tiktok from "@/app/images/socials/tiktokWhite.png";
import telegram from "@/app/images/socials/Telegram.png";
import instagram from "@/app/images/socials/Instagram.png";
import star from "@/app/images/socials/Star.png";
import Link from "next/link";

type TimeLeft =
  | {
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    }
  | "Complete";

const targetDate = new Date("2024-11-30T00:00:00").getTime();

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft());
  const emailRef = useRef<HTMLInputElement>(null)
  const [message,context] = useMessage()
    const handleSaveEmail = async(e:React.MouseEvent<HTMLButtonElement>)=>{
      e.preventDefault()
      if(!emailRef || !emailRef.current){
        message.destroy()
        message.error("Invalid email address",2)
        return
      }
      message.loading("Subscribing please wait",100000000000)
      const [_,error] = await subscribeEmail(emailRef.current.value)
      message.destroy()
  
      if(error){
        message.error(error,2)
        return
  
      }
      message.success("Email added to waitlist successful",2)
    }
  function calculateTimeLeft(): TimeLeft {
    const difference = targetDate - Date.now();

    if (difference <= 0) {
      return "Complete";
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  const updateTimer = useCallback(() => setTimeLeft(calculateTimeLeft()), []);

  useEffect(() => {
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, [updateTimer]);

  const CountdownBlock = useCallback(
    ({ value, label }: { value: number; label: string }) => (
      <div
        className={`${styles.bg_gradient_border} border-0 p-[0.04em] md:p-[0.01em] lg:p-[0.01em]  w-[50px] md:w-[120px] lg:w-[200px] rounded-lg hd-shadow`}
      >
        <span
          className="px-[5px] py-3 bg-[#002953] block w-full h-full md:py-10 lg:py-20 rounded-lg text-center"
          aria-label={label}
        >
          {value}
        </span>
      </div>
    ),
    []
  );

  return (
<>{context}
      <div className={` ${styles.container}`}>
        <div className=" w-full  max-w-[1200px] absolute z-[3]">
        <Image src={logo} alt="Xentro" className=" w-[120px] md:w-[200px] mb-5 block mx-auto mt-8" />

        <h1 className="gilroy-black-bold tracking-wide text-[25px] md:text-[60px] text-center mb-12 ">
          Launching Soon!
        </h1>

        {timeLeft === "Complete" ? (
          <div className="gilroy-bold text-4xl md:text-6xl text-center">
            Complete
          </div>
        ) : (
          <div
            className={`${styles.countdown} gilroy-bold tracking-wider text-2xl md:text-[70px] lg:text-[120px] mx-auto  w-full`}
          >
            <CountdownBlock value={timeLeft.days} label="Days" />
            <div className="lg:mx-6">:</div> 
            <CountdownBlock value={timeLeft.hours} label="Hours" />
            <div className="lg:mx-6">:</div>
            <CountdownBlock value={timeLeft.minutes} label="Minutes" />
            <div className="lg:mx-6">:</div>
            <CountdownBlock value={timeLeft.seconds} label="Seconds" />
          </div>
        )}

        <section className=" z-10 mt-20 max-w-[700px] mx-auto">
          <div className="w-full flex flex-col items-center gap-3 sm:flex-row justify-center my-6">
            <input
            ref={emailRef}
              type="email"
              placeholder="Email Address"
              className="gilroy-regular w-full px-4 py-2 md:py-2 rounded-2xl md:rounded-full bg-[#1a2b3d42] h-14 focus:outline-none text-white placeholder:text-lg text-lg"
            />
            <div
              className={`${styles.bg_gradient_border} border-0 p-[0.07em] h-14   rounded-full hd-shadow  w-full max-w-[220px]`}
            >
              <button onClick={handleSaveEmail} className="bg-[#021327] h-full w-full rounded-full text-xl text-white gilroy-bold">
                Join the Waitlist
              </button>
            </div>
          </div>
          
        </section>
        <h5 className="text-[18px] md:text-[20px] text-center mt-4">Our socials</h5>
        <ul className="flex items-center space-x-5 my-4 w-full max-w-[500px] mx-auto justify-center gap-2 sm:justify-between flex-wrap" >
                  <li>
                  <Link href="https://medium.com/@joinxentro" target="_blank">

                    <Image src={medium} alt="medium" className="w-6 sm:w-8 md:w-10" />
                    </Link>
                  </li>
                  <li>
                  <Link href="http://www.youtube.com/@Joinxentro" >

                    <Image src={youtube} alt="youtube" className="w-6 sm:w-8 md:w-10" />
                    </Link>
                  </li>
                  <li>
                  <Link href="https://twitter.com/joinxentro" target="_blank">

                    <Image src={x} alt="x" className="w-6 sm:w-8 md:w-10" />
                    </Link>
                  </li>
                  <li>
                  <Link href="https://t.me/joinxentro" target="_blank"> 
                    <Image src={telegram} alt="telegram" className="w-6 sm:w-8 md:w-10" />
                    </Link>
                  </li>
                  <li>
                  <Link href="https://www.instagram.com/joinxentro/" target="_blank">
                    <Image src={instagram} alt="instagram" className="w-6 sm:w-8 md:w-10" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.tiktok.com/@joinxentro"
                      target="_blank"
                    >
                      <Image src={tiktok} alt="tikok" className="w-6 sm:w-8 md:w-10" />
                    </Link>
                  </li>
                  <li>
                  <Link href="https://uk.trustpilot.com/review/joinxentro.com">
                    <Image src={star} alt="star" className="w-6 sm:w-8 md:w-10" />
                    </Link>
                  </li>
                </ul>

    
        </div>
        <Image
            src={rocket}
            alt="Rocket"
            width={300}
            style={{ filter: "grayscale(100%)" }}
            className="w-[200px] md:w-[400px] absolute bottom-0 right-0 hidden min-[890px]:block z-[1]"
          />
      </div>
      
      </>
  );
}
