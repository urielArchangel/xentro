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
import useMessage from "antd/es/message/useMessage";
import { useRouter } from "next/navigation";
import cmc from '@/app/images/socials/coinmarketcap.svg'
import trustpilot from '@/app/images/socials/trustpilot.svg'
import { ITask } from "@/declarations";
import { useModal } from "@/app/src/FE/misc/modals/ModalProvider";


const EditTask = ({task}:{task:ITask}) => {
  const router = useRouter();
  const { setModal, closeModal } = useModal()
  const [message, c] = useMessage();
  const [selectedPlatform, setSeletedPlatform] = useState<
    "x" | "discord" | "instagram" | "telegram" | "youtube" | "medium" | "tiktok" |"trustpilot" | "coinmarketcap" 
  | string>(task.platform);
  const taskLinkRef = useRef<HTMLInputElement>(null);
  const taskPointRef = useRef<HTMLInputElement>(null);
  const taskRef = useRef<HTMLInputElement>(null);
  const exclusiveRef = useRef<HTMLInputElement>(null);
  let activeRadioOption = "";
  const handleCreateTask = async () => {
    if (
      !taskLinkRef ||
      !taskLinkRef.current ||
      !taskPointRef ||
      !taskPointRef.current ||
      !exclusiveRef ||
      !exclusiveRef.current ||
      !taskRef ||
      !taskRef.current
      
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
    message.loading("editing task, please wait...", 10000000);
    const points = Number(taskPointRef.current.value);
    const _task = taskRef.current.value;
    const link = taskLinkRef.current.value;
    const platorm = selectedPlatform;
    const exclusive = exclusiveRef.current.checked;
    const [_, error] = await submitTaskAction(
      points,
      link,
      _task,
      platorm,
      exclusive,
      task.id
    );
    await message.destroy();
    if (error) {
     await message.error(error);
      console.log(error);
      return;
    }
    await message.success("Task edited successfully");
    router.push("/admin/app/task-overview");
    setModal(<></>)
    closeModal()
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
              <button
                onClick={() => {
                  setSeletedPlatform("trustpilot");
                }}
                className={`flex space-x-2 items-center text-xl font-semibold border bg-white rounded-lg px-4 py-2 ${
                  selectedPlatform == "trustpilot"
                    ? " border-blue-500"
                    : " border-white"
                }`}
              >
                <Image className="w-6" src={trustpilot} alt="trustpilot" />{" "}
                <p className="text-[#5FB87B]">Trust Pilot</p>
              </button>  <button
                onClick={() => {
                  setSeletedPlatform("coinmarketcap");
                }}
                className={`flex space-x-2 items-center text-xl font-semibold border bg-white rounded-lg px-4 py-2 ${
                  selectedPlatform == "coinmarketcap"
                    ? " border-blue-500"
                    : " border-white"
                }`}
              >
                <Image className="w-6" src={cmc} alt="coinmarketcap" />{" "}
                <p className="text-[#000000]">CoinmarketCap</p>
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:items-start md:justify-center border-b border-[#CCCCCC] py-10">
          <div className="w-fit md:w-[50%] text-center  ">
            <h2 className="text-center md:text-start text-xl font-bold ">
               Action
            </h2>
          </div>
          <div className="flex w-full  md:w-[50%]">
            <div className="flex items-center flex-wrap justify-center md:justify-between w-full gap-4">
              <div className="flex space-x-2 items-center text-xl font-semibold  rounded-lg px-4 py-1">
                <input
                  type="text"
                  placeholder="Task description"
                  className="h-16 w-full block px-4 bg-transparent border border-[#DADCDD] max-w-[400px] outline-none rounded-sm"
                  ref={taskRef}
                  defaultValue={task.task}
                />
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
              defaultValue={task.link}
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
              defaultValue={task.points}
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
          <input type="checkbox" id="exclusive" ref={exclusiveRef} defaultChecked={task.exclusive} />
        </div>
        <section className="space-x-3 space-y-4 md:space-y-0 text-center md:text-right my-8">
      
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

export default EditTask;
