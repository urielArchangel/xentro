"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import styles from "@/app/css/timer.module.css";
import Image from "next/image";
import logo from "@/app/images/xentroLogoWNameWhite.png";
import rocket from "@/app/images/rocket.png";
import { subscribeEmail } from "../../BE/serveractions";
import useMessage from "antd/es/message/useMessage";

type TimeLeft =
  | {
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    }
  | "Complete";

const targetDate = new Date("2024-11-31T00:00:00").getTime();

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
        className={`${styles.bg_gradient_border} border-0 p-[0.04em] w-[50px] md:w-[70px] rounded-lg hd-shadow`}
      >
        <span
          className="px-[5px] py-3 bg-[#002953] block w-full h-full rounded-lg text-center"
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
        <div className=" w-full  max-w-[700px]">
        <Image src={logo} alt="Xentro" className=" w-[120px] md:w-[150px] mb-5 block mx-auto" />

        <h1 className="gilroy-black-bold tracking-wide text-[25px] md:text-[35px] text-center mb-12 ">
          Launching Soon!
        </h1>

        {timeLeft === "Complete" ? (
          <div className="gilroy-bold text-4xl md:text-6xl text-center">
            Complete
          </div>
        ) : (
          <div
            className={`${styles.countdown} gilroy-bold tracking-wider text-2xl md:text-[35px] mx-auto `}
          >
            <CountdownBlock value={timeLeft.days} label="Days" />
            <div>:</div> 
            <CountdownBlock value={timeLeft.hours} label="Hours" />
            <div>:</div>
            <CountdownBlock value={timeLeft.minutes} label="Minutes" />
            <div>:</div>
            <CountdownBlock value={timeLeft.seconds} label="Seconds" />
          </div>
        )}

        <section className=" z-10 mt-20">
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

        <div className="absolute bottom-0 right-0 hidden min-[890px]:block">
          <Image
            src={rocket}
            alt="Rocket"
            width={300}
            style={{ filter: "grayscale(100%)" }}
            className="md:scale-[0.8] lg:scale-[1]"
          />
        </div>
        </div>
      </div>
      </>
  );
}
