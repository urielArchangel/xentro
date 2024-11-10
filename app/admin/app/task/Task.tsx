"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import X from "@/app/images/socials/Twitter.png";
import discord from "@/app/images/socials/discordTask.png";
import insta from "@/app/images/socials/instagramTask.png";
import tiktok from "@/app/images/socials/TikTokTask.png";
import medium from "@/app/images/socials/mediumTask.png";
import yt from "@/app/images/socials/YouTubeTask.png";
import tg from "@/app/images/socials/telegramTask.png";
import { submitTaskAction } from "@/app/src/BE/serveractions";
import { acceptedTaskOptions } from "@/app/src/data/constants";
import useMessage from "antd/es/message/useMessage";
import { useRouter } from "next/navigation";

const Task = () => {
  const router = useRouter()
  const [message, c] = useMessage();
  const [selectedPlatform, setSeletedPlatform] = useState<
    "x" | "discord" | "instagram" | "telegram" | "youtube" | "medium" | "tiktok"
  >("x");
  const taskLinkRef = useRef<HTMLInputElement>(null);
  const taskPointRef = useRef<HTMLInputElement>(null);
  const exclusiveRef = useRef<HTMLInputElement>(null);
  let activeRadioOption = "";
  const handleCreateTask = async () => {
    console.log("starr")
    if (
      !taskLinkRef ||
      !taskLinkRef.current ||
      !taskPointRef ||
      !taskPointRef.current ||
      !exclusiveRef ||
      !exclusiveRef.current
    ) {
      message.error("invalid inputs");
      return;
    }

    (
      document.getElementsByName("task_radio") as NodeListOf<HTMLInputElement>
    ).forEach((e) => {
      if (e.checked) {
        activeRadioOption = e.id.replace("_id", "");
      }
    });
    if (!acceptedTaskOptions.includes(activeRadioOption)) {
      message.error("invalid task");
      return;
    }
    if (
      !selectedPlatform ||
      !taskLinkRef.current.value ||
      !taskPointRef.current.value ||
      isNaN(Number(taskPointRef.current.value))
    ) {
      message.error("invalid inputs");
      return;
    }
    message.destroy();
    message.loading("Creating task, please wait...", 10000000);
    const points = Number(taskPointRef.current.value);
    const task = activeRadioOption;
    const link = taskLinkRef.current.value;
    const platorm = selectedPlatform;
    const exclusive = exclusiveRef.current.checked;
    const [_, error] = await submitTaskAction(
      points,
      link,
      task,
      platorm,
      exclusive
    );
    message.destroy();
    console.log("done")
    if (error) {
      message.error(error);
      console.log(error);
      return;
    }
    message.success("Task created successfully");
    router.push('/admin/app/task')

  };

  return (
    <>
      {" "}
      {c}
      <section className=" w-full  md:w-[90%] md:px-10">
        <h2 className="text-[#0171F3] text-2xl font-bold md:text-3xl">Task</h2>
        <section className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:items-start md:justify-center border-y border-[#CCCCCC] py-10">
          <div className="w-fit md:w-[50%] ">
            <h2 className="text-center md:text-start text-xl font-bold ">
              Select Social Media
            </h2>
          </div>
          <div className="flex w-full md:w-[50%]">
            <div
              className={
                "flex items-center flex-wrap justify-center md:justify-between  w-full gap-6 "
              }
            >
              <button
                onClick={() => {
                  setSeletedPlatform("x");
                }}
                className={`flex space-x-2 items-center text-xl font-semibold border bg-white rounded-lg px-4 py-2 ${
                  selectedPlatform == "x" ? " border-blue-500" : " border-white"
                }`}
              >
                <Image className="w-6" src={X} alt="twitter" />{" "}
                <p className="text-black">Twitter</p>
              </button>
              <button
                onClick={() => {
                  setSeletedPlatform("discord");
                }}
                className={`flex space-x-2 items-center text-xl font-semibold border bg-white rounded-lg px-4 py-2 ${
                  selectedPlatform == "discord"
                    ? " border-blue-500"
                    : " border-white"
                }`}
              >
                <Image className="w-6" src={discord} alt="discord" />{" "}
                <p className="text-[#5865F2]">Discord</p>
              </button>
              <button
                onClick={() => {
                  setSeletedPlatform("telegram");
                }}
                className={`flex space-x-2 items-center text-xl font-semibold border bg-white rounded-lg px-4 py-2 ${
                  selectedPlatform == "telegram"
                    ? " border-blue-500"
                    : " border-white"
                }`}
              >
                <Image className="w-6" src={tg} alt="telegram" />{" "}
                <p className="text-[#3BA8EA]">Telegram</p>
              </button>
              <button
                onClick={() => {
                  setSeletedPlatform("tiktok");
                }}
                className={`flex space-x-2 items-center text-xl font-semibold border bg-white rounded-lg px-4 py-2 ${
                  selectedPlatform == "tiktok"
                    ? " border-blue-500"
                    : " border-white"
                }`}
              >
                <Image className="w-6" src={tiktok} alt="tiktok" />{" "}
                <p className="text-black">Tiktok</p>
              </button>
              <button
                onClick={() => {
                  setSeletedPlatform("instagram");
                }}
                className={`flex space-x-2 items-center text-xl font-semibold border bg-white rounded-lg px-4 py-2 ${
                  selectedPlatform == "instagram"
                    ? " border-blue-500"
                    : " border-white"
                }`}
              >
                <Image className="w-6" src={insta} alt="instagram" />{" "}
                <p className="text-black">Instagram</p>
              </button>
              <button
                onClick={() => {
                  setSeletedPlatform("medium");
                }}
                className={`flex space-x-2 items-center text-xl font-semibold border bg-white rounded-lg px-4 py-2 ${
                  selectedPlatform == "medium"
                    ? " border-blue-500"
                    : " border-white"
                }`}
              >
                <Image className="w-6" src={medium} alt="medium" />{" "}
                <p className="text-black">Medium</p>
              </button>
              <button
                onClick={() => {
                  setSeletedPlatform("youtube");
                }}
                className={`flex space-x-2 items-center text-xl font-semibold border bg-white rounded-lg px-4 py-2 ${
                  selectedPlatform == "youtube"
                    ? " border-blue-500"
                    : " border-white"
                }`}
              >
                <Image className="w-6" src={yt} alt="youtube" />{" "}
                <p className="text-[#FF0302]">Youtube</p>
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:items-start md:justify-center border-b border-[#CCCCCC] py-10">
          <div className="w-fit md:w-[50%] text-center  ">
            <h2 className="text-center md:text-start text-xl font-bold ">
              Select Action
            </h2>
          </div>
          <div className="flex w-full  md:w-[50%]">
            <div className="flex items-center flex-wrap justify-center md:justify-between w-full gap-4">
              <div className="flex space-x-2 items-center text-xl font-semibold  rounded-lg px-4 py-1">
                <label
                  htmlFor="followPage_id"
                  className="cursor-pointer text-black"
                >
                  Follow this Page
                </label>
                <input type="radio" name="task_radio" id="followPage_id" />
              </div>
              <div className="flex space-x-2 items-center text-xl font-semibold  rounded-lg px-4 py-1">
                <label
                  htmlFor="joinPage_id"
                  className="cursor-pointer text-black"
                >
                  Join this Page
                </label>
                <input type="radio" name="task_radio" id="joinPage_id" />
              </div>
              <div className="flex space-x-2 items-center text-xl font-semibold  rounded-lg px-4 py-1">
                <label
                  htmlFor="retweetPost_id"
                  className="cursor-pointer text-black"
                >
                  Retweet this Post
                </label>
                <input type="radio" name="task_radio" id="retweetPost_id" />
              </div>
              <div className="flex space-x-2 items-center text-xl font-semibold  rounded-lg px-4 py-1">
                <label
                  htmlFor="sharePost_id"
                  className="cursor-pointer text-black"
                >
                  Share this Post
                </label>
                <input type="radio" name="task_radio" id="sharePost_id" />
              </div>
              <div className="flex space-x-2 items-center text-xl font-semibold  rounded-lg px-4 py-1">
                <label
                  htmlFor="engagePost_id"
                  className="cursor-pointer text-black"
                >
                  Engage this Post
                </label>
                <input type="radio" name="task_radio" id="engagePost_id" />
              </div>
              <div className="flex space-x-2 items-center text-xl font-semibold rounded-lg px-4 py-1">
                <label
                  htmlFor="commentPost_id"
                  className="cursor-pointer text-black"
                >
                  Comment on this Post
                </label>
                <input type="radio" name="task_radio" id="commentPost_id" />
              </div>
            </div>
          </div>
        </section>{" "}
        <section className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:items-start md:justify-center border-b border-[#CCCCCC] py-10">
          <div className="w-fit md:w-[50%]">
            <h2 className="text-center md:text-start text-xl font-bold">
              Add Link
            </h2>
          </div>
          <div className="flex w-full md:w-[50%]">
            <input
              ref={taskLinkRef}
              type="text"
              placeholder="invite xentro tech/XTyKaFK"
              className="h-16 w-full block px-4 bg-transparent border border-[#DADCDD] max-w-[400px] outline-none rounded-sm"
            />
          </div>
        </section>
        <section className="flex flex-col md:flex-row justify-center py-10">
          <div className="w-full md:w-[50%]">
            <h2 className="text-center md:text-start text-xl font-bold">
              Point
            </h2>
          </div>
          <div className="flex w-full md:w-[50%]">
            <input
              ref={taskPointRef}
              type="number"
              placeholder="0 "
              className="h-16 w-full block px-4 bg-transparent border border-[#DADCDD] max-w-[400px] outline-none rounded-sm"
            />
          </div>
        </section>{" "}
        <div className="text-right">
          <label
            className="text-xl mx-2 cursor-pointer font-bold"
            htmlFor="exclusive"
          >
            Exclusive
          </label>
          <input type="checkbox" id="exclusive" ref={exclusiveRef} />
        </div>
        <section className="space-x-3 space-y-4 md:space-y-0 text-center md:text-right my-8">
          <button className="bg-white border border-[#0171F3] text-[#0171F3] px-8 py-2 rounded-md text-lg font-semibold">
            Preview
          </button>
          <button
            className="text-white bg-[#0171F3] px-8 py-2 rounded-md text-lg font-semibold"
            onClick={handleCreateTask}
          >
            Submit
          </button>
        </section>
      </section>
    </>
  );
};

export default Task;
