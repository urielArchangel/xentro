"use client";
import React, { useState, useEffect } from "react";

import homepagestyles from "@/app/css/homepage.module.css";
import Image from "next/image";
import discord from "@/app/images/socials/Discord.png";
import medium from "@/app/images/socials/Medium.png";
import x from "@/app/images/socials/XTask.png";
import telegram from "@/app/images/socials/Telegram.png";
import instagram from "@/app/images/socials/Instagram.png";
import youtube from "@/app/images/socials/yt.png";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

interface Task {
  id: number;
  task: string;
  points: number;
  completed: boolean;
  icon: any;
}
const AllTasks = () => {
  const tasksData: Task[] = [
    {
      id: 1,
      task: "Follow Xentro on X",
      points: 5000,
      completed: false,
      icon: x,
    },
    {
      id: 2,
      task: "Join our Telegram Chat",
      points: 5000,
      completed: false,
      icon: telegram,
    },
    {
      id: 3,
      task: "Join our Discord",
      points: 5000,
      completed: false,
      icon: discord,
    },
    {
      id: 4,
      task: "Follow us on Instagram",
      points: 5000,
      completed: false,
      icon: instagram,
    },
    {
      id: 5,
      task: "Follow us on Medium",
      points: 5000,
      completed: false,
      icon: medium,
    },
    {
      id: 6,
      task: "Join our YouTube Channel",
      points: 5000,
      completed: false,
      icon: youtube,
    },
    {
      id: 7,
      task: "Follow Xentro on X",
      points: 5000,
      completed: false,
      icon: x,
    },
    {
      id: 8,
      task: "Follow Xentro on X",
      points: 5000,
      completed: false,
      icon: x,
    },
    {
      id: 9,
      task: "Join our Telegram Chat",
      points: 5000,
      completed: false,
      icon: telegram,
    },
    {
      id: 10,
      task: "Join our Discord",
      points: 5000,
      completed: false,
      icon: discord,
    },
    {
      id: 11,
      task: "Follow us on Instagram",
      points: 5000,
      completed: false,
      icon: instagram,
    },
    {
      id: 12,
      task: "Follow us on Medium",
      points: 5000,
      completed: false,
      icon: medium,
    },
    {
      id: 13,
      task: "Join our YouTube Channel",
      points: 5000,
      completed: false,
      icon: youtube,
    },
    {
      id: 14,
      task: "Follow Xentro on X",
      points: 5000,
      completed: false,
      icon: x,
    },
  ];

  const [tasks, setTasks] = useState<Task[]>(tasksData);

  const completedTasks = tasks.filter((task) => task.completed);
  const handleTaskClick = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  const totalPoints = tasks.reduce((acc, task) => {
    return task.completed ? acc + task.points : acc;
  }, 0);

  const handleSearchTasks = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredTasks = tasksData.filter((task) =>
      task.task.toLowerCase().includes(searchValue)
    );
    setTasks(filteredTasks);
  };

  return (
    <>
      <div className="px-[8%]">
        <div
          className={
            homepagestyles.bg_gradient_border +
            " border-0 p-[0.06em] rounded-xl hd-shadow mb-10"
          }
        >
          <div className="rounded-xl px-5 py-3 text-white bg-[#092747] gilroy-regular">
            <div className="flex md:flex-row flex-col justify-between">
              <div className="flex flex-row justify-between md:justify-normal items-center md:items-start md:flex-col gap-3 mb-3">
                <p className="text-xs min-[400px]:text-lg lg:text-xl font-semibold tracking-wide">
                  Connected Wallet:
                </p>
                <div className="bg-[#081A2E] border-[#2F95FF] border py-1 px-6 flex items-center rounded-full">
                  <span className="text-xs min-[400px]:text-lg lg:text-xl font-bold tracking-wide">
                    0x1232123….789a
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-between md:justify-normal items-center md:items-end md:flex-col gilroy-regular gap-3">
                <p className="text-xs min-[400px]:text-lg lg:text-xl font-semibold text-end tracking-wide">
                  Total Points
                </p>
                <p>
                  {" "}
                  <span
                    className={`${homepagestyles.gradientText} text-white gilroy-bold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider`}
                  >
                    {2000000 + totalPoints}
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
              " border-0 p-[0.06em] rounded-lg hd-shadow"
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
              " border-0 p-[0.06em] rounded-lg hd-shadow my-2"
            }
          >
            <li className="grid grid-cols-3 bg-[#092747] rounded-lg py-3 px-[5%] font-semibold">
              <span className="text-xs max-[599px]:text-md min-[600px]:text-lg flex items-center gap-3 place-self-start">
                Task
              </span>
              <span className="text-xs max-[599px]:text-md min-[600px]:text-lg flex items-center gap-3 place-self-center">
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
          <ul className="space-y-2">
            {tasks.map((task) => (
              <div
                className={
                  homepagestyles.bg_gradient_border +
                  " border-0 p-[0.06em] rounded-lg hd-shadow"
                }
              >
                <li
                  key={task.id}
                  className="grid grid-cols-3 bg-[#092747] rounded-lg py-3 px-[5%]"
                >
                  <span className="text-xs max-[599px]:text-md min-[600px]:text-lg flex items-center gap-3 place-self-start">
                    <Image
                      src={task.icon}
                      alt="task"
                      className="w-[15px] md:w-[25px]"
                    />
                    {task.task}
                  </span>
                  <span className="text-xs max-[599px]:text-md min-[600px]:text-lg flex items-center place-self-center">
                    {task.points}
                  </span>
                  <button
                    className={`px-4 py-2 text-white rounded-full font-bold place-self-end text-xs max-[599px]:text-md min-[600px]:text-lg ${
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
      </div>
    </>
  );
};

export default AllTasks;
