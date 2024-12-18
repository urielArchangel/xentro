"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/app/src/FE/footer/Footer";
import JoinCommunity from "@/app/src/FE/homepage/components/JoinCommunity";
import Link from "next/link";
import homepagestyles from "@/app/css/homepage.module.css";
import AllTasks from "@/app/src/FE/airdrop/AllTasks";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { fetchUserClient } from "@/app/src/FE/helpers";
import { IApp, IUser } from "@/declarations";
import Loading from "../../loading";
import useMessage from "antd/es/message/useMessage";

const AllTasksComponent = ({ appString }: { appString: string }) => {
  const app = JSON.parse(appString) as IApp;
  const router = useRouter();
  const { address } = useAccount();
  const [loading, setLoading] = useState(true);
  const [valid, setValidity] = useState(false);
  const [message, c] = useMessage();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const run = async () => {
      if (!address) {
        window.location.href = "/airdrop";
      }
      if (address) {
        const [user, error] = (await fetchUserClient(address)) as [
          user: IUser,
          error: any
        ];
        if (error) {
          message.destroy();
          await message.warning(
            "You must complete all exclusive tasks first ",
            2
          );

          setTimeout(() => {
            window.location.href = "/airdrop";
          }, 2000);
        }
        setUser(user);
        const exclusiveIds = app.tasks
          .filter((task) => task.exclusive)
          .map((task) => task.id);

        // Create a Set for O(1) lookups
        const completedIdSet = new Set(user.tasks_completed_ids);

        // Check if all exclusive IDs are in the completed IDs
        const allExclusiveCompleted = exclusiveIds.every((id) =>
          completedIdSet.has(id)
        );

        if (!allExclusiveCompleted) {
          window.location.href = "/airdrop";
        }

        setValidity(true);
      }
    };
    run();

    setLoading(false);
  }, [valid, address]);
  return (
    <>
      {c}
      {loading ? <Loading /> : null}
      {valid ? (
        <div className=" pt-24 md:pt-32 max-w-[1000px] mx-auto px-2">
          <section className="px-4  text-white gilroy-regular">
            <button>
              <Link href="/airdrop">
                <span className="text-white text-md md:text-lg flex gap-1 items-center mt-4">
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 28 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_0_2319)">
                      <path
                        d="M7.43611 20.8029C8.11265 21.4795 9.21135 21.4795 9.88788 20.8029C10.5644 20.1264 10.5644 19.0277 9.88788 18.3512L5.91526 14.3839H22.5148C23.4727 14.3839 24.2467 15.1579 24.2467 16.1159V24.7755C24.2467 25.7335 25.0207 26.5075 25.9786 26.5075C26.9366 26.5075 27.7106 25.7335 27.7106 24.7755V16.1159C27.7106 13.2474 25.3833 10.9201 22.5148 10.9201H5.91526L9.88788 6.94745C10.5644 6.27092 10.5644 5.17222 9.88788 4.49568C9.21135 3.81915 8.11265 3.81915 7.43611 4.49568L0.508379 11.4234C-0.168158 12.1 -0.168158 13.1987 0.508379 13.8752L7.43611 20.8029Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_2319">
                        <rect
                          width="27.7109"
                          height="27.7109"
                          fill="white"
                          transform="translate(-0.000976562 0.527344)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Back
                </span>
              </Link>
            </button>
            <h1
              className={`${homepagestyles.gradientText} gilroy-black-bold text-[25px] md:text-[35px]`}
            >
              EARN XENTRO POINTS
            </h1>
            <p className="mb-4"> Complete all tasks to earn rewards</p>
          </section>
          <AllTasks appString={appString} />
          <JoinCommunity />
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default AllTasksComponent;
