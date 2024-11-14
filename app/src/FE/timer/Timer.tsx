"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import styles from "@/app/css/timer.module.css";
import Image from "next/image";
import logo from "@/app/images/xentroLogoWNameWhite.png";
import rocket from "@/app/images/rocket.png";

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
        className={`${styles.bg_gradient_border} border-0 p-[0.018em] lg:w-[110px] min-[520px]:w-[90px] w-[50px] xl:w-[130px] 2xl:w-[165px] rounded-lg hd-shadow`}
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
    <div className="flex items-center justify-center">
      <div className={`relative mt-[200px] ${styles.container}`}>
        <Image src={logo} alt="Xentro" className="mx-auto w-[150px] mb-5" />

        <h1 className="gilroy-black-bold tracking-wide text-3xl md:text-5xl text-center mb-5">
          Launching Soon!
        </h1>

        {timeLeft === "Complete" ? (
          <div className="gilroy-bold text-4xl md:text-6xl text-center">
            Complete
          </div>
        ) : (
          <div
            className={`${styles.countdown} gilroy-bold tracking-wider text-3xl min-[400px]:text-4xl min-[520px]:text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl`}
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

        <form className="flex justify-center items-center w-[80%] sm:w-[60%] md:w-[60%] lg:w-[50%] z-10">
          <div className="w-full flex flex-col md:flex-row justify-center my-6">
            <input
              type="email"
              placeholder="Email Address"
              className="gilroy-regular w-full px-4 py-2 md:py-2 rounded-2xl md:rounded-full bg-[#1a2b3d42] border border-[#151515] focus:outline-none text-white placeholder:text-lg text-lg"
            />
            <div
              className={`${styles.bg_gradient_border} border-0 p-[0.07em] rounded-full hd-shadow h-14 w-full md:max-w-[150px] xl:max-w-[200px] mx-auto my-4 md:my-0 md:ml-4`}
            >
              <button className="bg-[#021327] w-full h-full rounded-full text-xl text-white gilroy-bold">
                Join the Waitlist
              </button>
            </div>
          </div>
        </form>

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
  );
}
