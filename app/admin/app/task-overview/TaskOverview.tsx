"use client";
import { ChevronDown, ChevronsUpDownIcon } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import msExcel from "@/app/images/admin/overview/msExcelIcon.png";
import Image from "next/image";
import X from "@/app/images/socials/Twitter.png";
import discord from "@/app/images/socials/discordTask.png";
import insta from "@/app/images/socials/instagramTask.png";
import tiktok from "@/app/images/socials/TikTokTask.png";
import medium from "@/app/images/socials/mediumTask.png";
import yt from "@/app/images/socials/YouTubeTask.png";
import tg from "@/app/images/socials/telegramTask.png";
import cmc from "@/app/images/socials/coinmarketcap.svg";
import trustpilot from "@/app/images/socials/trustpilot.svg";
import { IApp } from "@/declarations";
import { FaEllipsisVertical } from "react-icons/fa6";
import { useModal } from "@/app/src/FE/misc/modals/ModalProvider";


const TaskOverview = ({appString}:{appString:string}) => {

  const [app, setApp] = useState<IApp>(JSON.parse(appString))
  useEffect(()=>{
    setApp(JSON.parse(appString))
  },[appString])


  const downloadCSV = () => {
    if (!app) return
    const csvData = [
      ["Platform", "Task", "Link", "Points", "Status"],
      ...app.tasks.map((e) => [e.platform, e.task, e.link, e.points, e.status]),
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
      case "coinmarketcap":
        return (
          <button className="flex space-x-2 items-center text-xl font-semibold bg-white rounded-lg px-4 py-2">
            <Image className="w-6" src={cmc} alt="coinmmarketcap" />{" "}
            <p className="text-[#000000]">Coinmarketcap</p>
          </button>
        );
      case "trustpilot":
        return (
          <button className="flex space-x-2 items-center text-xl font-semibold bg-white rounded-lg px-4 py-2">
            <Image className="w-6" src={trustpilot} alt="trustpilot" />{" "}
            <p className="text-[#5FB87B]">Trust Pilot</p>
          </button>
        );
      default:
        break;
    }
  };
  const { setModal, openModal } = useModal();
  console.log({ app })
  const editTask = async (id: string) => {
    if (app) {
      const task = app.tasks.filter((e) => e.id == id)[0];
      const EditTaskModal = (await import("./EditTaskModal")).default;
      setModal(<EditTaskModal task={task} />);
      openModal();
    }
  };
  const deleteTask = async (id: string) => {
    if (app) {
      const DeleteTaskModal = (await import("./DeleteTaskModal")).default;
      setModal(<DeleteTaskModal id={id} />);
      openModal();
    }
  }

  const openMenuAction = (i: number) => {
    const menu = document.getElementById("menu_" + i) as HTMLDivElement;

    menu.hidden = false;
    menu.style.display = "flex";
  };
  const closeMenuAction = (i: number) => {
    const menu = document.getElementById("menu_" + i) as HTMLDivElement;

    menu.onmouseover = () => {
      return
    }
    const menus = document.querySelectorAll(
      ".menuaction"
    ) as NodeListOf<HTMLDivElement>;
    menus.forEach((e) => {
      e.hidden = true;
      e.style.display = "none";
    });
  };
  return (
    <section className="">
      <h2 className="text-[#0171F3] text-xl my-4 md:text-3xl font-bold">
        Task Overview
      </h2>

      <section className="bg-white  rounded-xl my-4 overflow-x-scroll pb-24">
        <div className="w-full min-w-[1400px]">
          <div className="flex justify-end px-8 items-center border-[#CCCCCC] border-b py-4">
            <div className="flex items-center space-x-6">
              <button className="flex items-center  text-lg md:text-xl border space-x-2 border-[#0171F3] text-[#0171F3] p-4 rounded-lg">
                <p>Bulk Action</p>
                <ChevronDown size={20} />
              </button>
              <button
                onClick={downloadCSV}
                className="border border-[#20744A]  text-lg md:text-xl space-x-2 p-4 flex rounded-lg items-center"
              >
                <Image src={msExcel} alt="MS Excel" />
                <p className="text-[#20744A]">Download CSV</p>
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
              {app && app.tasks.map((e, i) => (
                <tr key={i}>
                  <td className="w-[80px] text-start p-4 ">
                    <input type="checkbox" className="block cursor-pointer" />
                  </td>
                  <td className="p-4">{returnPlatformImage(e.platform)}</td>
                  <td className="p-4">{e.task}</td>
                  <td className="p-4">{e.link}</td>
                  <td className="p-4">{e.points}</td>
                  <td className="p-4">
                    {e.status ? (
                      <div className="bg-[#9BFF99] w-full max-w-[100px] text-center text-[#20744A] rounded-3xl px-6 py-2">
                        active
                      </div>
                    ) : (
                      <div className="bg-[#FF000025] w-full max-w-[100px] text-center text-[#FF0000] rounded-3xl px-6 py-2">
                        disabled
                      </div>
                    )}
                  </td>
                  <td className="text-lg py-4 relative ">

                    <FaEllipsisVertical
                      onMouseEnter={() => {
                        openMenuAction(i);
                      }}
                      onMouseLeave={() => {
                        closeMenuAction(i);
                      }}
                      size={25}
                      className="text-[#A2A7B4] cursor-pointer w-10 "
                    />
                    <div
                      id={"menu_" + i}
                      key={i}
                      className={
                        "absolute w-full right-[95%] top-[0px] z-[5] hidden flex-col menuaction border bg-white py-6 px-2 rounded-[10px] space-y-4"
                      } onMouseEnter={() => {
                        openMenuAction(i);
                      }}
                      onMouseLeave={() => {
                        closeMenuAction(i);
                      }}

                    >
                      <button
                        onClick={() => {
                          editTask(e.id);
                        }}
                        className="border-blue-500 border text-blue-500 py-2 rounded-[10px] hover:bg-blue-100/20"
                      >
                        Edit
                      </button>
                      <button onClick={() => {
                        deleteTask(e.id)
                      }} className="bg-red-500 text-white py-2 rounded-[10px] hover:bg-red-700">
                        Delete
                      </button>
                    </div>
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
