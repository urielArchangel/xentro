'use client'
import { ChevronDown, ChevronsUpDownIcon } from "lucide-react";
import React from "react";
import msExcel from "@/app/images/admin/overview/msExcelIcon.png";
import Image from "next/image";
import data from "@/app/src/data/database/dataObject.json";
import X from "@/app/images/socials/XTask.png";
import discord from "@/app/images/socials/discordTask.png";
import insta from "@/app/images/socials/instagramTask.png";
import tiktok from "@/app/images/socials/TikTokTask.png";
import medium from "@/app/images/socials/mediumTask.png";
import yt from "@/app/images/socials/YouTubeTask.png";
import tg from "@/app/images/socials/telegramTask.png";

const TaskOverview = () => {
  const downloadCSV = () => {
    const csvData = [
      ["Platform", "Task", "Link","Points", "Status"],
      ...data.tasks.map((e) => [
        e.platform,
        e.task,
        e.link,
        e.points,
        e.status
      ]),
    ];

    const csvContent =
      "data:text/csv;charset=utf-8," +
      csvData.map((row) => row.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "task_log.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const returnPlatformImage = (a: string) => {
    switch (a) {
      case "x":
        return (
          <button className="flex space-x-2 items-center text-xl font-semibold bg-white rounded-lg px-4 py-2">
            <Image className="w-6" src={X} alt="twitter" />{" "}
            <p className="text-black">Twitter</p>
          </button>
        );
      case "discord":
        return (
          <button className="flex space-x-2 items-center text-xl font-semibold bg-white rounded-lg px-4 py-2">
            <Image className="w-6" src={discord} alt="discord" />{" "}
            <p className="text-[#5865F2]">Discord</p>
          </button>
        );
      case "telegram":
        return (
          <button className="flex space-x-2 items-center text-xl font-semibold bg-white rounded-lg px-4 py-2">
            <Image className="w-6" src={tg} alt="telegram" />{" "}
            <p className="text-[#3BA8EA]">Telegram</p>
          </button>
        );
      case "tiktok":
        return (
          <button className="flex space-x-2 items-center text-xl font-semibold bg-white rounded-lg px-4 py-2">
            <Image className="w-6" src={tiktok} alt="tiktok" />{" "}
            <p className="text-black">Tiktok</p>
          </button>
        );
      case "instagram":
        return (
          <button className="flex space-x-2 items-center text-xl font-semibold bg-white rounded-lg px-4 py-2">
            <Image className="w-6" src={insta} alt="instagram" />{" "}
            <p className="text-black">Instagram</p>
          </button>
        );
      case "medium":
        return (
          <button className="flex space-x-2 items-center text-xl font-semibold bg-white rounded-lg px-4 py-2">
            <Image className="w-6" src={medium} alt="medium" />{" "}
            <p className="text-black">Medium</p>
          </button>
        );
      case "youtube":
        return (
          <button className="flex space-x-2 items-center text-xl font-semibold bg-white rounded-lg px-4 py-2">
            <Image className="w-6" src={yt} alt="youtube" />{" "}
            <p className="text-[#FF0302]">Youtube</p>
          </button>
        );
      default:
        break;
    }
  };
  return (
    <section className="">
      <h2 className="text-[#0171F3] text-xl my-4 md:text-3xl font-bold">
        Task Overview
      </h2>

      <section className="bg-white  rounded-xl my-4 overflow-x-scroll">
        <div className="w-full min-w-[1000px]">
          <div className="flex justify-end px-8 items-center border-[#CCCCCC] border-b py-4">
            <div className="flex items-center space-x-6">
              <button className="flex items-center  text-lg md:text-xl border space-x-2 border-[#0171F3] text-[#0171F3] p-4 rounded-lg">
                <p>Bulk Action</p>
                <ChevronDown size={20} />
              </button>
              <button onClick={downloadCSV} className="border border-[#20744A]  text-lg md:text-xl space-x-2 p-4 flex rounded-lg items-center">
                <Image src={msExcel} alt="MS Excel" />
                <p className="text-[#20744A]" >Download CSV</p>
              </button>
            </div>
          </div>
          <table className="w-full border-[#CCCCCC] border-y">
            <thead className="">
              <tr className="border-b">
                <th className="w-[80px] text-start p-4 ">
                  <input type="checkbox" className="block cursor-pointer" />
                </th>
                <th className="w-[300px] text-[18px] cursor-pointer p-4">
                  <div className="flex items-center space-x-1">
                    <h2>Platform</h2>
                    <ChevronsUpDownIcon className="text-[#3E3E3E]" />
                  </div>
                </th>
                <th className="w-[300px] text-[18px] p-4 cursor-pointer">
                  <div className="flex items-center space-x-1">
                    <h2>Task</h2>
                    <ChevronsUpDownIcon className="text-[#3E3E3E]" />
                  </div>
                </th>
                <th className="w-[300px] text-[18px] p-4 cursor-pointer">
                  <div className="flex items-center space-x-1">
                    <h2>Link</h2>
                  </div>
                </th>
                <th className="w-[300px] text-[18px] p-4 cursor-pointer">
                  <div className="flex items-center space-x-1">
                    <h2>Points</h2>
                    <ChevronsUpDownIcon className="text-[#3E3E3E]" />
                  </div>
                </th>
                <th className="w-[300px] text-[18px] p-4 cursor-pointer">
                  <div className="flex items-center space-x-1 ">
                    <h2>Status</h2>
                    <ChevronsUpDownIcon className="text-[#3E3E3E]" />
                  </div>
                </th>
                <th className="w-[300px] text-start text-[18px] p-4 cursor-pointer">
                  <h2>Actions</h2>
                </th>
              </tr>
            </thead>

            <tbody>
              {data.tasks.map((e, i) => (
                <tr key={i}>
                  <td className="w-[80px] text-start p-4 ">
                    <input type="checkbox" className="block cursor-pointer" />
                  </td>
                  <td className="p-4">{returnPlatformImage(e.platform)}</td>
                  <td className="p-4">{e.task}</td>
                  <td className="p-4">{e.link}</td>
                  <td className="p-4">{e.points}</td>
                  <td className="p-4">
                    {e.status == "active" ? (
                      <div className="bg-[#9BFF99] w-full max-w-[100px] text-center text-[#20744A] rounded-3xl px-6 py-2">
                        {e.status}
                      </div>
                    ) : (
                      <div className="bg-[#FF000025] w-full max-w-[100px] text-center text-[#FF0000] rounded-3xl px-6 py-2">
                        {e.status}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default TaskOverview;
