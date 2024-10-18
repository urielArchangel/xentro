import React from 'react'
import totalUserIcon from "@/app/images/admin/overview/TotalUsers.png";
import { TrendingDown, TrendingUp } from "lucide-react";
import totalMintsIcon from '@/app/images/admin/overview/totalMints.png'
import tasksCompleted from '@/app/images/admin/overview/tasksCompleted.png'
import tpd from '@/app/images/admin/overview/TPDicon.png'
import Image from "next/image";
import dataObject from '@/app/src/data/database/dataObject.json'
import users from '@/app/src/data/database/users.json'

const OverviewDataSection = () => {
  return (
<section className="flex justify-center md:justify-between flex-wrap space-y-4 ">
        <section className="bg-white max-w-[350px] p-8 rounded-3xl space-y-2 w-full">
        <div className="flex  items-center space-x-4">
          <Image src={totalUserIcon} alt="Total Users" />
          <p className="font-semibold text-lg">Total User</p>
        </div>
       <h1 className="text-2xl md:text-3xl font-bold">{Number(users.length).toLocaleString()}</h1>
       <div className="flex space-x-2">
       <p className="text-[#219653] text-[14px] ">8.5% Up from Yesterday</p>
       <div className="bg-[#2196534A] text-[14px] px-2 rounded-xl text-[#219653]">+14.67%</div>
       </div>
        </section>
        <section className="bg-white max-w-[350px] p-8 rounded-3xl space-y-2 w-full">
        <div className="flex  items-center space-x-4">
          <Image src={totalMintsIcon} alt="Total Mints" />
          <p className="font-semibold text-lg">Total Mints</p>
        </div>
       <h1 className="text-2xl md:text-3xl font-bold">{Number(dataObject.total_mints).toLocaleString()}</h1>
       <div className="flex space-x-2"><TrendingDown />
       <p className="text-[#219653] text-[14px] ">5.0% Up from yesterday</p>
       </div>
        </section>
        <section className="bg-white max-w-[350px] p-8 rounded-3xl space-y-2 w-full">
        <div className="flex  items-center space-x-4">
          <Image src={tpd} alt="Total Points Distributed" />
          <p className="font-semibold text-lg">Total Points Distributed</p>
        </div>
       <h1 className="text-2xl md:text-3xl font-bold">{Number(dataObject.total_points_distributed).toLocaleString()}</h1>
       <div className="flex space-x-2">
        <TrendingUp />
       <p className="text-[#219653] text-[14px] ">6.7% Up from yesterday</p>

       </div>
        </section>
        <section className="bg-white max-w-[350px] p-8 rounded-3xl space-y-2 w-full">
        <div className="flex  items-center space-x-4">
          <Image src={tasksCompleted} alt="Tasks Completed" />
          <p className="font-semibold text-lg">Tasks Completed</p>
        </div>
       <h1 className="text-2xl md:text-3xl font-bold">{Number(dataObject.tasks_completed).toLocaleString()}</h1>
       <div className="flex space-x-2">
        <TrendingUp />
       <p className="text-[#219653] text-[14px] ">6.7% Up from yesterday</p>

       </div>
        </section>
      </section>  )
}

export default OverviewDataSection