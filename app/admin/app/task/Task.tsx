import Image from "next/image";
import React from "react";
import X from "@/app/images/socials/XTask.png";
import discord from "@/app/images/socials/discordTask.png";
import insta from "@/app/images/socials/instagramTask.png";
import tiktok from "@/app/images/socials/TikTokTask.png";
import medium from "@/app/images/socials/mediumTask.png";
import yt from "@/app/images/socials/YouTubeTask.png";
import tg from "@/app/images/socials/telegramTask.png";

const Task = () => {
  return (
    <section className=" w-full  md:w-[90%] md:px-10">
      <h2 className="text-[#0171F3] text-2xl font-bold md:text-3xl">Task</h2>
      <section className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:items-start md:justify-center border-y border-[#CCCCCC] py-10">
        <div className="w-fit md:w-[50%] ">
          <h2 className="text-center md:text-start text-xl font-bold ">Select Social Media</h2>
        </div>
        <div className="flex w-full md:w-[50%]">
          <div className="flex items-center flex-wrap justify-center md:justify-between  w-full gap-6">
            <button className="flex space-x-2 items-center text-xl font-semibold bg-white rounded-lg px-4 py-2">
              <Image className="w-6" src={X} alt="twitter" />{" "}
              <p className="text-black">Twitter</p>
            </button>
            <button className="flex space-x-2 items-center text-xl font-semibold bg-white rounded-lg px-4 py-2">
              <Image className="w-6" src={discord} alt="discord" />{" "}
              <p className="text-[#5865F2]">Discord</p>
            </button>
            <button className="flex space-x-2 items-center text-xl font-semibold bg-white rounded-lg px-4 py-2">
              <Image className="w-6" src={tg} alt="telegram" />{" "}
              <p className="text-[#3BA8EA]">Telegram</p>
            </button>
            <button className="flex space-x-2 items-center text-xl font-semibold bg-white rounded-lg px-4 py-2">
              <Image className="w-6" src={tiktok} alt="tiktok" />{" "}
              <p className="text-black">Tiktok</p>
            </button>
            <button className="flex space-x-2 items-center text-xl font-semibold bg-white rounded-lg px-4 py-2">
              <Image className="w-6" src={insta} alt="instagram" />{" "}
              <p className="text-black">Instagram</p>
            </button>
            <button className="flex space-x-2 items-center text-xl font-semibold bg-white rounded-lg px-4 py-2">
              <Image className="w-6" src={medium} alt="medium" />{" "}
              <p className="text-black">Medium</p>
            </button>
            <button className="flex space-x-2 items-center text-xl font-semibold bg-white rounded-lg px-4 py-2">
              <Image className="w-6" src={yt} alt="youtube" />{" "}
              <p className="text-[#FF0302]">Youtube</p>
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:items-start md:justify-center border-b border-[#CCCCCC] py-10">
        <div className="w-fit md:w-[50%] text-center  ">
          <h2 className="text-center md:text-start text-xl font-bold ">Select Action</h2>
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
              <input type="checkbox" name="" id="followPage_id" />
            </div>
            <div className="flex space-x-2 items-center text-xl font-semibold  rounded-lg px-4 py-1">
              <label
                htmlFor="joinPage_id"
                className="cursor-pointer text-black"
              >
                Join this Page
              </label>
              <input type="checkbox" name="" id="joinPage_id" />
            </div>
            <div className="flex space-x-2 items-center text-xl font-semibold  rounded-lg px-4 py-1">
              <label
                htmlFor="retweetPost_id"
                className="cursor-pointer text-black"
              >
                Retweet this Post
              </label>
              <input type="checkbox" name="" id="retweetPost_id" />
            </div>
            <div className="flex space-x-2 items-center text-xl font-semibold  rounded-lg px-4 py-1">
              <label
                htmlFor="shareVideo_id"
                className="cursor-pointer text-black"
              >
                Share this Post
              </label>
              <input type="checkbox" name="" id="shareVideo_id" />
            </div>
            <div className="flex space-x-2 items-center text-xl font-semibold  rounded-lg px-4 py-1">
              <label
                htmlFor="engagePost_id"
                className="cursor-pointer text-black"
              >
                Engage this Post
              </label>
              <input type="checkbox" name="" id="engagePost_id" />
            </div>
            <div className="flex space-x-2 items-center text-xl font-semibold rounded-lg px-4 py-1">
              <label
                htmlFor="commentPost_id"
                className="cursor-pointer text-black"
              >
                Comment on this Post
              </label>
              <input type="checkbox" name="" id="commentPost_id" />
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:items-start md:justify-center border-b border-[#CCCCCC] py-10">
        <div className="w-fit md:w-[50%]">
          <h2 className="text-center md:text-start text-xl font-bold">Add Link</h2>
        </div>
        <div className="flex w-full md:w-[50%]">
          <input
            type="text"
            placeholder="invite xentro tech/XTyKaFK"
            className="h-16 w-full block px-4 bg-transparent border border-[#DADCDD] max-w-[400px] outline-none rounded-sm"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-center py-10">
        <div className="w-full md:w-[50%]">
          <h2 className="text-center md:text-start text-xl font-bold">Point</h2>
        </div>
        <div className="flex w-full md:w-[50%]">
          <input
            type="number"
            placeholder="0 "
            className="h-16 w-full block px-4 bg-transparent border border-[#DADCDD] max-w-[400px] outline-none rounded-sm"
          />
        </div>
      </section>{" "}
      <section className="space-x-3 space-y-4 md:space-y-0 text-center md:text-right my-8">
        <button className="bg-white border border-[#0171F3] text-[#0171F3] px-8 py-2 rounded-md text-lg font-semibold">Preview</button>
        <button className="text-white bg-[#0171F3] px-8 py-2 rounded-md text-lg font-semibold">Submit</button>

      </section>
    </section>
  );
};

export default Task;
