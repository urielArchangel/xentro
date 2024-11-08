import React from "react";
import totalUserIcon from "@/app/images/admin/overview/TotalUsers.png";
import { TrendingDown, TrendingUp } from "lucide-react";
import totalMintsIcon from "@/app/images/admin/overview/totalMints.png";
import tpd from "@/app/images/admin/overview/TPDicon.png";
import Image from "next/image";
import { IApp, IUser } from "@/declarations";
import { fetchAppData } from "@/app/src/BE/helpers";

const MintsOverview =async () => {
  const app = await fetchAppData()

  return (
    <section className="flex flex-wrap justify-center  gap-4 w-full">
      <section className="bg-white max-w-[350px] p-8 rounded-3xl space-y-2 w-full">
        <div className="flex  items-center space-x-4">
          <Image src={totalUserIcon} alt="Total Users" />
          <p className="font-semibold text-lg">Xentro Community Badge</p>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold">
          {Number((app.mints.filter(m=>m.task.toLowerCase().includes("community"))).length).toLocaleString()}
        </h1>
        <div className="flex space-x-2">
          <p className="text-[#219653] text-[14px] ">8.5% Up from Yesterday</p>
          <div className="bg-[#2196534A] text-[14px] px-2 rounded-xl text-[#219653]">
            +14.67%
          </div>
        </div>
      </section>
      <section className="bg-white max-w-[350px] p-8 rounded-3xl space-y-2 w-full">
        <div className="flex  items-center space-x-4">
          <Image src={totalMintsIcon} alt="Total Mints" />
          <p className="font-semibold text-lg">Xentro Warrior Badge</p>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold">
          {Number(app.mints.filter(m=>m.task.toLowerCase().includes("warrior")).length).toLocaleString()}
        </h1>
        <div className="flex space-x-2">
          <TrendingDown />
          <p className="text-[#219653] text-[14px] ">5.0% Up from yesterday</p>
        </div>
      </section>
      <section className="bg-white max-w-[350px] p-8 rounded-3xl space-y-2 w-full">
        <div className="flex  items-center space-x-4">
          <Image src={tpd} alt="Total Points Distributed" />
          <p className="font-semibold text-lg">Total Mints</p>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold">
          {Number(app.mints.length).toLocaleString()}
        </h1>
        <div className="flex space-x-2">
          <TrendingUp />
          <p className="text-[#219653] text-[14px] ">6.7% Up from yesterday</p>
        </div>
      </section>
     
    </section>
  );
};

export default MintsOverview;
