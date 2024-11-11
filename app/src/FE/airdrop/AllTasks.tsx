"use client";
import React, { useState, useEffect, useCallback } from "react";

import homepagestyles from "@/app/css/homepage.module.css";
import Image, { StaticImageData } from "next/image";
import discord from "@/app/images/socials/Discord.png";
import medium from "@/app/images/socials/Medium.png";
import x from "@/app/images/socials/XTask.png";
import telegram from "@/app/images/socials/Telegram.png";
import instagram from "@/app/images/socials/Instagram.png";
import youtube from "@/app/images/socials/yt.png";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { useAccount } from "wagmi";
import { trauncateAddressMiddle } from "../helpers";
import { ITask } from "@/declarations";
import { taskCompletedAction } from "../../BE/serveractions";
import useMessage from "antd/es/message/useMessage";

interface Task {
  id: number;
  task: string;
  points: number;
  completed: boolean;
  icon: any;
}
const AllTasks = ({
  t,
  completedTasksIds,
  userTotalPoint,
}: {
  t: ITask[];
  completedTasksIds: string[];
  userTotalPoint: number;
}) => {
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const [message, messageContext] = useMessage();

  const handleClickStateUpdate = async (id: string) => {
    message.loading("Please wait...", 10000000);

    const [res, error] = await taskCompletedAction(id, String(address));
    message.destroy();
    if (error) {
      message.error(error, 2);
      return;
    }
    await message.success(res, 2);
    setCompletedTasksCount((prev) => (prev += 1));
  };

  const taskPlatformIconMapping = (platformName: string) => {
    const icons: { [id: string]: StaticImageData } = {
      x,
      telegram,
      medium,
      instagram,
      discord,
    };
    return icons[platformName] || x;
  };
  const [tasks, setTasks] = useState<ITask[]>(t);


  const isTaskCompleted = useCallback(
    (id: string) => completedTasksIds.includes(id) ?? false,
    [completedTasksIds]
  );
  const handleSearchTasks = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredTasks = t.filter((task) =>
      task.task.toLowerCase().includes(searchValue)
    );
    setTasks(filteredTasks);
  };

  const { address } = useAccount();

  return (
    <>
      {messageContext}
      <div >
        <div
          className={
            homepagestyles.bg_gradient_border +
            " border-0 p-[0.07em] rounded-xl hd-shadow mb-10"
          }
        >
          <div className="rounded-xl px-5 py-3 text-white bg-[#092747] gilroy-regular">
            <div className="flex md:flex-row flex-col justify-between">
              <div className="flex flex-row justify-between items-center ">
                <div className="bg-[#081A2E] border-[#2F95FF] border py-1 px-6 flex items-center rounded-full my-2 md:my-0">
                  <span className="text-[16px] sm:text-[20px] md:text-[22px]">
                    {trauncateAddressMiddle(address, 4)}
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-between md:justify-normal items-center md:items-end md:flex-col gilroy-regular gap-3">
                <p className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-end tracking-wide">
                  Total Points
                </p>
                <p>
                  {" "}
                  <span
                    className={`${homepagestyles.gradientText} text-white gilroy-bold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider`}
                  >
                    {userTotalPoint}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gilroy-regular mb-5">
          <p className="font-bold text-xl xl:text-2xl text-white">Tasks</p>
          <div
            className={
              homepagestyles.bg_gradient_border +
              " border-0 p-[0.07em] rounded-lg hd-shadow"
            }
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                onChange={handleSearchTasks}
                className="w-full px-4 py-2 pl-10 text-xs max-[599px]:text-md min-[600px]:text-lg rounded-lg bg-[#092747] text-white focus:outline-none placeholder:text-white"
              />
              <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
                <FaSearch />
              </i>
            </div>
          </div>
        </div>
        <div className="text-white gilroy-regular h-full">
          <div
            className={
              homepagestyles.bg_gradient_border +
              " border-0 p-[0.07em] rounded-lg hd-shadow my-2"
            }
          >
            <li className="flex justify-between bg-[#092747] rounded-lg py-3 px-[5%] font-semibold">
              <span className="text-xs max-[599px]:text-md min-[600px]:text-lg flex items-center gap-3 place-self-start">
                Task
              </span>
              <span className="text-xs max-[599px]:text-md min-[600px]:text-lg flex items-center self-center">
                Points{" "}
                <svg
                  width="27"
                  height="18"
                  viewBox="0 0 53 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.527344"
                    width="52"
                    height="35"
                    rx="5"
                    fill="#0477EF"
                  />
                  <path
                    d="M25.8223 27H22.2853L18.1273 20.169L13.9693 27H10.4323L16.3723 17.28L10.7833 8.1H14.2933L18.1273 14.391L21.9613 8.1H25.4983L19.9093 17.28L25.8223 27ZM35.0728 8.1C36.8548 8.1 38.3398 8.694 39.5278 9.882C40.7338 11.07 41.3368 12.546 41.3368 14.31C41.3368 16.056 40.7338 17.532 39.5278 18.738C38.3398 19.926 36.8548 20.52 35.0728 20.52H31.2118V27H28.1068V8.1H35.0728ZM35.0728 17.604C35.9908 17.604 36.7468 17.298 37.3408 16.686C37.9348 16.056 38.2318 15.264 38.2318 14.31C38.2318 13.356 37.9348 12.573 37.3408 11.961C36.7468 11.331 35.9908 11.016 35.0728 11.016H31.2118V17.604H35.0728Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="text-xs max-[599px]:text-md min-[600px]:text-lg flex items-center gap-3 place-self-end mr-3">
                Action
              </span>
            </li>
          </div>
          <ul className="space-y-2 mb-10">
            {tasks.map((task, index) => (
              <div
                key={index}
                className={
                  homepagestyles.bg_gradient_border +
                  " border-0 p-[0.07em] rounded-lg hd-shadow"
                }
              >
                <li
                  key={task.id || index}
                  className="flex items-center bg-[#092747] rounded-lg py-3 px-[5%] justify-between "
                >
                  <span className="text-[14px] max-[599px]:text-md min-[600px]:text-lg flex items-center  w-[33%] ">
                    <Image
                      src={taskPlatformIconMapping(task.platform)}
                      alt="task"
                      className="w-[15px] md:w-[25px] mx-2"
                    />
                    {task.task}
                  </span>
                  <span className="text-xs max-[599px]:text-md min-[600px]:text-lg flex items-center place-self-center  w-[33%]">
                    {task.points}
                  </span>
                  <Link
                    target="_blank"
                    onClick={() => {
                      handleClickStateUpdate(task.id);
                    }}
                    className={`px-4 py-2 text-white rounded-full font-bold text-[10px] sm:text-[16px] ${
                      isTaskCompleted(task.id)
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-[#004995] glow"
                    }`}
                    href={task.link}
                  >
                    {isTaskCompleted(task.id) ? "Done" : "Start"}
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AllTasks;
