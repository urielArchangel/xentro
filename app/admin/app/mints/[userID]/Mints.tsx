import {  UserCircle2 } from "lucide-react";
import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import admincss from "@/app/css/admin.module.css";
import { fetchUsers } from "@/app/src/BE/helpers";
import { redirect } from "next/navigation";

const Mints = async({id}:{id:string}) => {
  
  const user =  (await fetchUsers()).filter(user=>user.ID == id)[0]
  if(!user){
    redirect("/admin/app/mints")
  }
  const mints = user.community_badge?user.warrior_badge?2:1:0

  return (
    <section>
      <h2 className="text-[#0171F3] text-3xl font-bold">Mints</h2>
 

      <section className="flex justify-between flex-col md:flex-row">
        <div className="flex items-center space-x-2">
          {" "}
          <UserCircle2 size={50} /> <p className="text-[#0171F3]">{user.ID}</p>
        </div>
        <button className="border border-[#CCCCCC] max-w-[250px] mx-auto md:mx-0 my-4 md:my-0 flex bg-white p-3 rounded-md px-6 items-center">
          {" "}
          <span className="text-[#525252] ">Actions</span>{" "}
          <FaEllipsisVertical
            size={30}
            className="text-[#A2A7B4] cursor-pointer"
          />
        </button>
      </section>
      <section className={admincss.userDetails}>
        <div className="  ">
          <h3 className="break-all">Wallet</h3>
          <p className="  break-all ">{user.wallet_address}</p>
        </div>

        <div>
          <h3 className="break-all">Community Badge</h3>
          <p className="break-all">{user.community_badge?'Minted':"Not Minted"}</p>
        </div>
        <div>
          <h3 className="break-all">Warrior Badge</h3>
          <p className="break-all">{user.warrior_badge?'Minted':"Not Minted"}</p>
        </div>

        <div>
          <h3 className="break-all">Total Mints</h3>
          <div className="flex items-center justify-between w-full">
            <p className="break-all">{mints} </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Mints;
