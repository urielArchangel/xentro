"use client";
import React, { useState, useEffect } from "react";
import underline from "@/app/images/underline.png";
import homepagestyles from "@/app/css/homepage.module.css";
import Image from "next/image";
import discord from "@/app/images/socials/Discord.png";
import medium from "@/app/images/socials/Medium.png";
import x from "@/app/images/socials/XTask.png";
import telegram from "@/app/images/socials/Telegram.png";
import instagram from "@/app/images/socials/Instagram.png";
import xentro from "@/app/images/socials/xentro.png";

interface Task {
  id: number;
  name: string;
  icon: any;
  completed: boolean;
}

const ExclusiveTasks = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const tasksData: Task[] = [
    { id: 1, name: "Follow Xentro on X", completed: false, icon: x },
    { id: 2, name: "Like the Post on Xentro Page", completed: false, icon: x },
    {
      id: 3,
      name: "Follow Xentro on Telegram",
      completed: false,
      icon: telegram,
    },
    {
      id: 4,
      name: "Join Xentro Community on Discord",
      completed: false,
      icon: discord,
    },
    {
      id: 5,
      name: "Follow Xentro on Instagram",
      completed: false,
      icon: instagram,
    },
    { id: 6, name: "Follow Xentro on Medium", completed: false, icon: medium },
    {
      id: 7,
      name: "Mint your Xentro Community Badge",
      completed: false,
      icon: xentro,
    },
    {
      id: 8,
      name: "Mint your Xentro Warrior Badge",
      completed: false,
      icon: xentro,
    },
  ];
  const [tasks, setTasks] = useState<Task[]>(tasksData);

  useEffect(() => {
    console.log("Tasks: ", tasks);
  }, []);

  const handleConnectWallet = () => {
    setIsConnected(true);
  };

  const completedTasks = tasks.filter((task) => task.completed).length;

  const handleTaskClick = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };
  return (
    <>
      <section className="px-[8%] pt-[10%]">
        <h3 className="text-white gilroy-bold text-3xl md:text-4xl lg:text-5xl min-[1500px]:text-6xl mb-8 text-center min-[401px]:text-start">
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
          Exclusive Tasks
        </h3>
        <p
          className={`text-white gilroy-regular text-center min-[401px]:text-start mb-10 ${
            isConnected ? "hidden" : "block"
          }`}
        >
          Connect Wallet to View the Tasks
        </p>
        <div className="group relative">
          <div className={`${isConnected ? "" : "blur-md p-3"}`}>
            <h4 className="text-lg mb-4 text-white gilroy-regular">
              Completed: <span className="font-bold">{completedTasks}</span> out
              of <span className="font-bold">{tasks.length}</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
              <div className="text-white gilroy-regular h-full">
                <ul className="space-y-4">
                  {tasks.map((task) => (
                    <div
                      className={
                        homepagestyles.bg_gradient_border +
                        " border-0 p-[0.06em] rounded-lg hd-shadow"
                      }
                    >
                      <li
                        key={task.id}
                        className="flex items-center justify-between bg-[#0B1219] rounded-lg p-3"
                      >
                        <span className="text-xs max-[599px]:text-md min-[600px]:text-lg flex items-center gap-3">
                          <Image
                            src={task.icon}
                            alt="task"
                            width={25}
                            height={25}
                          />
                          {task.name}
                        </span>
                        <button
                          className={`px-4 py-2 text-white rounded-full font-bold ${
                            task.completed
                              ? "bg-gray-500 cursor-not-allowed"
                              : "bg-[#004995] glow"
                          }`}
                          onClick={() => handleTaskClick(task.id)}
                          disabled={task.completed}
                        >
                          {task.completed ? "Done" : "Start"}
                        </button>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
              <div>
                <WalletInfo />
              </div>
            </div>
          </div>
          <div
            className={`absolute inset-0 flex items-center justify-center rounded-lg font-bold text-white transition-opacity duration-300 opacity-100 border border-[#027EFF] ${
              isConnected ? "hidden" : ""
            }`}
          >
            <div className="flex flex-col justify-center items-center font-bold">
              <svg
                width="50"
                height="65"
                viewBox="0 0 65 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7_1084)">
                  <path
                    d="M20.7005 18.3058V27.4587H43.5827V18.3058C43.5827 11.9846 38.4628 6.86468 32.1416 6.86468C25.8204 6.86468 20.7005 11.9846 20.7005 18.3058ZM13.8358 27.4587V18.3058C13.8358 8.19471 22.0305 0 32.1416 0C42.2527 0 50.4474 8.19471 50.4474 18.3058V27.4587H55.0239C60.0723 27.4587 64.1768 31.5632 64.1768 36.6116V64.0703C64.1768 69.1187 60.0723 73.2232 55.0239 73.2232H9.25935C4.21095 73.2232 0.106445 69.1187 0.106445 64.0703V36.6116C0.106445 31.5632 4.21095 27.4587 9.25935 27.4587H13.8358ZM6.97112 36.6116V64.0703C6.97112 65.3288 8.00082 66.3585 9.25935 66.3585H55.0239C56.2824 66.3585 57.3121 65.3288 57.3121 64.0703V36.6116C57.3121 35.3531 56.2824 34.3234 55.0239 34.3234H9.25935C8.00082 34.3234 6.97112 35.3531 6.97112 36.6116Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7_1084">
                    <rect
                      width="64.0703"
                      height="73.2232"
                      fill="white"
                      transform="translate(0.106445)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div
                className={
                  homepagestyles.bg_gradient_border +
                  " border-0 p-[0.06em] rounded-full hd-shadow mt-8 inline-block"
                }
              >
                <button
                  className="bg-[#0B1B2A] w-[200px] h-full rounded-full  px-5 py-3 text-white text-xl gilroy-bold"
                  onClick={handleConnectWallet}
                >
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const WalletInfo: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState<string>("");
  const inviteLink = "bit.ly/InviteCode298ayu712kliobha";

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(inviteLink)
      .then(() => {
        setCopySuccess("Link copied!");
        setTimeout(() => setCopySuccess(""), 2000); // Reset message after 2 seconds
      })
      .catch(() => {
        setCopySuccess("Failed to copy");
      });
  };

  return (
    <div className="rounded-xl text-white mx-auto gilroy-regular border-[#027EFF] border h-full">
      {/* Connected Wallet */}
      <div className="border-b border-[#027EFF]">
        <div className="px-6 py-6">
          <div className="bg-[#081A2E] border-[#2F95FF] border py-2 px-2 mb-8 flex justify-between items-center rounded-full">
            <span className="text-xs min-[400px]:text-lg lg:text-xl">
              Connected Wallet: 0x123....789a
            </span>
            <button className="text-[#027EFF] p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="23"
                viewBox="0 0 38 31"
                fill="none"
              >
                <path
                  d="M4.34574 14.8532C1.10041 18.0986 1.10041 23.3592 4.34574 26.5988C7.44093 29.694 12.4013 29.8557 15.6929 26.9741L16.0451 26.6623L14.2203 24.5777L13.8681 24.8895C11.6737 26.8067 8.37065 26.697 6.30911 24.6354C4.14941 22.4757 4.14941 18.9705 6.30911 16.805L12.8517 10.2682C15.0115 8.10847 18.5166 8.10847 20.6821 10.2682C22.7437 12.3297 22.8534 15.6328 20.9362 17.8271L20.6244 18.1794L22.709 20.0042L23.0208 19.6519C25.9024 16.3604 25.7349 11.4 22.6455 8.30481C19.4002 5.05948 14.1395 5.05948 10.8942 8.30481L4.34574 14.8532ZM34.4084 16.1467C37.6537 12.9014 37.6537 7.64073 34.4084 4.3954C31.319 1.30598 26.3586 1.13851 23.067 4.02005L22.7148 4.33187L24.5396 6.41651L24.8918 6.10468C27.0862 4.18751 30.3892 4.29723 32.4508 6.35876C34.6105 8.51847 34.6105 12.0237 32.4508 14.1891L25.9081 20.7318C23.7484 22.8915 20.2375 22.8915 18.0778 20.7318C16.0162 18.6702 15.9065 15.3672 17.8237 13.1728L18.0951 12.861L16.0105 11.0362L15.7391 11.348C12.8633 14.6396 13.0308 19.6 16.1202 22.6894C19.3655 25.9347 24.6262 25.9347 27.8715 22.6894L34.4084 16.1467Z"
                  fill="#027EFF"
                />
              </svg>
            </button>
          </div>

          {/* Referrals */}
          <div>
            <span className="text-xl">
              {" "}
              <span className="font-semibold">Number of Referrals:</span> 100
            </span>
          </div>
        </div>
      </div>

      <div className="border-b border-[#027EFF]">
        <div className="px-6 py-6">
          {/* Invite Link */}
          <div className="mb-6">
            <span className="text-xl block mb-2 font-semibold">
              Invite Link
            </span>
            <div className="bg-transparent border-white border p-3 flex justify-between items-center rounded-full">
              <span className="truncate text-xs min-[400px]:text-lg lg:text-xl">
                {inviteLink}
              </span>
              <button onClick={handleCopyClick} className="text-[#027EFF] p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="30"
                  viewBox="0 0 31 34"
                  fill="none"
                >
                  <g clip-path="url(#clip0_7_1390)">
                    <path
                      opacity="0.4"
                      d="M0.855957 11.6875V30.8125C0.855957 32.5723 2.29569 34 4.07024 34H19.0702C20.8448 34 22.2845 32.5723 22.2845 30.8125V27.625H17.9988V29.75H5.14167V12.75H9.42739V8.5H4.07024C2.29569 8.5 0.855957 9.92773 0.855957 11.6875Z"
                      fill="#027EFF"
                    />
                    <path
                      d="M11.5708 3.1875C11.5708 1.42773 13.0105 0 14.7851 0H23.0954C23.9458 0 24.7628 0.338672 25.3654 0.936328L29.9123 5.44531C30.515 6.04297 30.8565 6.85313 30.8565 7.69648V22.3125C30.8565 24.0723 29.4168 25.5 27.6422 25.5H14.7851C13.0105 25.5 11.5708 24.0723 11.5708 22.3125V3.1875Z"
                      fill="#027EFF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_7_1390">
                      <rect
                        width="30"
                        height="34"
                        fill="white"
                        transform="translate(0.855957)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            {copySuccess && (
              <span className="text-green-400 mt-2 block">{copySuccess}</span>
            )}
          </div>
        </div>
      </div>

      <div className="border-b border-[#027EFF]">
        <div className="px-6 py-6">
          {/* Points */}
          <div className="mb-4">
            <span className="text-xl font-semibold">XENTRO Points</span>
            <h3
              className={
                "text-4xl font-black gilroy-black-bold tracking-wider " +
                homepagestyles.gradientText
              }
            >
              200000
            </h3>
          </div>

          {/* Tokens */}
        </div>
      </div>
      <div>
        <div className="px-6 py-5">
          <div className="mb-6">
            <span className="text-xl font-semibold">XENTRO Tokens</span>
            <p>Coming Soon!</p>
          </div>

          {/* Claim Button */}
          <button className="bg-[#081A2E] border border-[#027EFF] w-full py-3 text-lg rounded-full glow text-[#0477EF]">
            Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveTasks;
