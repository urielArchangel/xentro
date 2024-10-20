"use client";

import { ChevronDown, ChevronsUpDownIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import msExcel from "@/app/images/admin/overview/msExcelIcon.png";
import users from '@/app/src/data/database/users.json';
import { FaEllipsisVertical } from "react-icons/fa6";
import Link from "next/link";

const ActivityLog = () => {
  const checkAllBoxes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checks = document.querySelectorAll('.checkbox_class') as NodeListOf<HTMLInputElement>;

    if (e.currentTarget.checked) {
      checks.forEach((e) => {
        e.checked = true;
      });
    } else {
      checks.forEach((e) => {
        e.checked = false;
      });
    }
  };

  // Function to convert data to CSV and trigger download
  const downloadCSV = () => {
    const csvData = [
      ["User ID", "Date", "IP", "Status"],
      ...users.map((e) => [
        e.ID,
        new Date(e.last_login).toDateString(),
        e.ip,
        e.status,
      ]),
    ];

    const csvContent =
      "data:text/csv;charset=utf-8," +
      csvData.map((row) => row.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "activity_log.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-white rounded-xl my-4 overflow-x-scroll">
      <div className="w-full min-w-[1000px] ">
        <div className="flex justify-between px-8 items-center border-[#CCCCCC] border-b py-4">
          <h1 className="text-lg md:text-2xl font-semibold">Recent Activity Log</h1>
          <div className="flex items-center space-x-6">
            <button className="flex items-center text-lg md:text-xl border space-x-2 border-[#0171F3] text-[#0171F3] p-4 rounded-lg">
              <p>Bulk Action</p>
              <ChevronDown size={20} />
            </button>
            <button
              className="border border-[#20744A] text-lg md:text-xl space-x-2 p-4 flex rounded-lg items-center"
              onClick={downloadCSV}
            >
              <Image src={msExcel} alt="MS Excel" />
              <p className="text-[#20744A]">Download CSV</p>
            </button>
          </div>
        </div>
        <table className=" border-[#CCCCCC] border-y ">
          <thead className="">
            <tr className="border-b">
              <th className="w-[80px] text-start p-4 ">
                <input
                  type="checkbox"
                  id="checkAllCheckbox_id"
                  onChange={checkAllBoxes}
                  className="block cursor-pointer"
                />
              </th>
              <th className="w-[300px] text-[16px] cursor-pointer p-4">
                <div className="flex items-center space-x-1">
                  <h2>User ID</h2>
                  <ChevronsUpDownIcon className="text-[#3E3E3E]" />
                </div>
              </th>
              <th className="w-[300px] text-[16px] p-4 cursor-pointer">
                <div className="flex items-center space-x-1">
                  <h2>Date</h2>
                  <ChevronsUpDownIcon className="text-[#3E3E3E]" />
                </div>
              </th>
              <th className="w-[300px] text-[16px] p-4 cursor-pointer">
                <div className="flex items-center space-x-1">
                  <h2>IP</h2>
                </div>
              </th>
              <th className="w-[300px] text-[18px] p-4 cursor-pointer">
                <div className="flex items-center space-x-1 ">
                  <h2>Status</h2>
                  <ChevronsUpDownIcon className="text-[#3E3E3E]" />
                </div>
              </th>
              <th className="w-[300px] text-start text-[16px] p-4 cursor-pointer">
                <h2>Actions</h2>
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((e, i) => (
              <tr key={i} className="border-b">
                <td className="w-[80px] text-start py-4 pl-4">
                  <input
                    type="checkbox"
                    id=""
                    className="block cursor-pointer checkbox_class"
                  />
                </td>
                <td className="text-lg py-4">
                  <Link
                    className="underline block text-blue-500"
                    href={"/admin/app/data/" + e.ID}
                  >
                    {e.ID}{" "}
                  </Link>
                </td>
                <td className="text-lg py-4">
                  {new Date(e.last_login).toDateString()}
                </td>
                <td className="text-lg py-4">{e.ip}</td>
                <td className="text-lg py-4">{e.status}</td>
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
  );
};

export default ActivityLog;
