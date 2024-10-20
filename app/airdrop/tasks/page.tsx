import React from "react";
import Navbar from "@/app/src/FE/navbar/Navbar";
import Footer from "@/app/src/FE/footer/Footer";
import JoinCommunity from "@/app/src/FE/homepage/components/JoinCommunity";
import Link from "next/link";
import homepagestyles from "@/app/css/homepage.module.css";
import AllTasks from "@/app/src/airdrop/AllTasks";

const page = () => {
  return (
    <>
      <div className="body pt-5">
        <section className="px-[8%] pt-[15%] min-[769px]:pt-[8%] min-[1500px]:pt-[6%] text-white gilroy-regular">
          <button>
            <Link href="/">
              <span className="text-white text-md md:text-lg flex gap-1 items-center mt-4">
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_0_2319)">
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
            className={`${homepagestyles.gradientText} gilroy-black-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-[1500px]:text-6xl text-center min-[769px]:text-start mb-3`}
          >
            EARN XENTRO POINTS
          </h1>
          <p>Complete all tasks to earn rewards</p>
        </section>
        <AllTasks />
        <Navbar />
        <JoinCommunity />
        <Footer />
      </div>
    </>
  );
};

export default page;
