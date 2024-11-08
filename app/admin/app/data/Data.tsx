'use client'
import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronsUpDownIcon } from "lucide-react";
import Image from "next/image";
import msExcel from "@/app/images/admin/overview/msExcelIcon.png";
import { FaEllipsisVertical } from "react-icons/fa6";
import Link from "next/link";
import { IApp, IUser } from "@/declarations";

const sortAlpha = ()=>{
  
}

const Data = ({
  appString,
  usersString,
}: {
  appString: string;
  usersString: string;
}) => {
  const app = JSON.parse(appString) as IApp;
  const users = JSON.parse(usersString) as IUser[];
  const [url,setUrl]=useState("")
  useEffect(()=>{
setUrl(window.location.origin)
},[])

  return (
    <section className="">
      <h2 className="text-[#0171F3] text-xl my-4 md:text-3xl font-bold">Data</h2>
      <section className="bg-white  overflow-x-scroll">
      <div className="w-full min-w-[1000px] ">

      <div className="flex justify-end px-8 items-center  border-[#CCCCCC] border-b py-4">
        <div className="flex items-center space-x-6">
          <button className="flex items-center text-lg md:text-xl border space-x-2 border-[#0171F3] text-[#0171F3] p-4 rounded-lg">
            <p>Bulk Action</p>
            <ChevronDown size={20} />
            {/* bulk actions */}
            <section>
            
            </section>
          </button>
          <button className="border border-[#20744A] text-lg md:text-xl space-x-2 p-4 flex rounded-lg items-center">
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
                <h2>User ID</h2>
                <ChevronsUpDownIcon className="text-[#3E3E3E]" />
              </div>
            </th>
            <th className="w-[300px] text-[18px] p-4 cursor-pointer">
              <div className="flex items-center space-x-1">
                <h2>Referral Link</h2>
                <ChevronsUpDownIcon className="text-[#3E3E3E]" />
              </div>
            </th>
            <th className="w-[300px] text-[18px] p-4 cursor-pointer">
              <div className="flex items-center space-x-1">
                <h2>Wallet</h2>
                <ChevronsUpDownIcon className="text-[#3E3E3E]" />
              </div>
            </th>
            <th className="w-[300px] text-[18px] p-4 cursor-pointer">
              <div className="flex items-center space-x-1 ">
                <h2>Points</h2>
                <ChevronsUpDownIcon className="text-[#3E3E3E]" />
              </div>
            </th> 
            <th className="w-[300px] text-[18px] p-4 cursor-pointer">
              <div className="flex items-center space-x-1 ">
                <h2>Referrals</h2>
                <ChevronsUpDownIcon className="text-[#3E3E3E]" />
              </div>
            </th>
            <th className="w-[300px] text-start text-[18px] p-4 ">
              <h2>Actions</h2>
            </th>
          </tr>
        </thead>

        <tbody>
        {users.map((e,i)=>( <tr key={i}  className="border-b">
            <td className="w-[80px] text-start py-4 pl-4">
              <input type="checkbox" id={e.ID} className="block cursor-pointer checkbox_class" />
            </td>
            <td className="text-lg py-4"><Link target="_blank" className="underline block text-blue-500" href={"/admin/app/data/"+e.ID}>{e.ID} </Link></td>
            <td className="text-lg py-4">{url+"?ref="+e.ID}</td>
            <td className="text-lg py-4">{e.wallet_address}</td>
            <td className="text-lg py-4">{e.total_points}</td>
            <td className="text-lg py-4">{e.referals.count}</td>

            <td className="text-lg py-4">
            <FaEllipsisVertical
            size={20}
            className="text-[#A2A7B4] cursor-pointer"
          />
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

export default Data;
