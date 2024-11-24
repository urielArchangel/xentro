"use client";
import React, { useEffect, useState } from "react";
import homepagestyles from "@/app/css/homepage.module.css";
import underline from "@/app/images/underline.png";
import xentrobadge from "@/app/images/badge.png";
import Image from "next/image";
import { fetchUserClient } from "../helpers";
import { useAccount } from "wagmi";
import { IUser } from "@/declarations";
import Loading from "@/app/(.)/loading";
import { Lock, Unlock } from "lucide-react";
import { useSearchParams } from "next/navigation";

const MintBadge = ({
  communityMints,
  warriorMints,
}: {
  communityMints: string;
  warriorMints: string;
}) => {
  const padMintsValue = (m: string) => {
    return m.padStart(6, "0");
  };
  const [loading, setLoading] = useState(true);
  const [hasUserMintedCommunityBadge, setHasUserMintedCommunityBadge] =
    useState(false);
  const [hasUserMintedWarriorBadge, setHasUserMintedWarriorBadge] =
    useState(false);
  const [user, setUser] = useState<IUser>();

  const { address } = useAccount();
  const ref = useSearchParams().get("ref");

  useEffect(() => {
    const run = async () => {
      if (address) {

        const [user, error] = (await fetchUserClient(
          String(address),
          ref ? ref : undefined
        )) as [IUser, any];
        setUser(user);
        if (error) {
          throw new Error(error);
        }
        if (user.community_badge) {
          setHasUserMintedCommunityBadge(true);
        }
        if (user.warrior_badge) {
          setHasUserMintedWarriorBadge(true);
        }
      }
    };
    run();
    setLoading(false);
  }, [address]);

  useEffect(() => {
    const run = async () => {
      if (user) {
        if (user.community_badge) {
          setHasUserMintedCommunityBadge(true);
        }
        if (user.warrior_badge) {
          setHasUserMintedWarriorBadge(true);
        }
      }
    };
    run();
  }, [user]);

  return (
    <>
      {loading ? <Loading /> : null}
      <section className="mt-20">
        <h3 className="text-white gilroy-bold text-3xl md:text-4xl lg:text-5xl mb-10 text-center">
          Mint Your{" "}
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
          Badge
        </h3>
        <div className="flex justify-center items-center flex-col min-[961px]:flex-row space-y-10 min-[961px]:space-y-0 min-[961px]:space-x-10">
          <XentroBadge
            mints={padMintsValue(communityMints)}
            unlocked={hasUserMintedCommunityBadge}
            title="Xentro Community Badge"
            description="Complete all Xentro Exclusive Social Tasks."
          />
          <XentroBadge
            mints={padMintsValue(warriorMints)}
            unlocked={hasUserMintedWarriorBadge}
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
  mints: string;
  unlocked: boolean;
}

const XentroBadge: React.FC<MintBadgeProps> = ({
  title,
  description,
  mints,
  unlocked,
}) => {
  return (
    <div
      data-aos={
        title.toLowerCase().includes("warrior") ? "slide-left" : "slide-right"
      }
      className="bg-[#0028511f] p-5 rounded-xl text-white border border-[#002953] min-[480px]:h-[530px] min-[480px]:relative w-[90%] min-[480px]:w-max"
    >
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
              {mints.split("").map((e, i) => {
                return (
                  <li
                    key={i}
                    data-aos="fade-down"
                    data-aos-delay={`${i * 100}`}
                    className="p-1 min-[480px]:w-10 min-[480px]:h-12 w-8 h-8 text-center rounded-md bg-[#254367]"
                  >
                    {e}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <p className="text-xl font-semibold tracking-wide my-3">{title}</p>
      <p className="text-sm font-light min-[480px]:w-[400px]">{description}</p>
      <div
        className={
          homepagestyles.bg_gradient_border +
          " border-0 p-[0.07em] rounded-full hd-shadow mt-8 inline-block w-full min-[480px]:w-[90%] min-[480px]:absolute bottom-6 left-5"
        }
      >
        <button className="bg-[#08131E] w-full h-full rounded-full px-5 py-2 text-[#0477EF] text-xl">
          {unlocked ? (
            <span className="flex justify-center items-center gap-2">
              <Unlock />
              <span className="font-semibold">Unlocked</span>
            </span>
          ) : (
            <span className="flex justify-center items-center gap-2">
              <Lock />
              <span className="font-semibold">Locked</span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default MintBadge;
