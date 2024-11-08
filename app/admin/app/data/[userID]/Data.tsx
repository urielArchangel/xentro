"use client";
import { Check, Minus, Plus, Trash, UserCircle2, XIcon } from "lucide-react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import admincss from "@/app/css/admin.module.css";
import AddPointsModal from "@/app/src/FE/admin/miscComponents/AddPointsModal";
import { ModalCTX } from "@/app/src/FE/admin/miscComponents/ModalContext";
import RemovePointsModal from "@/app/src/FE/admin/miscComponents/RemovePointsModal";
import { blockUserAction } from "@/app/src/BE/serveractions";
import { IUser } from "@/declarations";
import useMessage from "antd/es/message/useMessage";

const Data = ({ userString }: { userString :string }) => {
  const [actionDropdownState, setActionDropdownState] = useState(false);
  const modal = useContext(ModalCTX);
  const user = JSON.parse(userString) as IUser
  const [blockUserPending,setBlockuserPending] = useState(false)
  const [message,context] = useMessage()
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.origin);
  }, []);

  const openModal = () => {
    modal.assignModal(<AddPointsModal userID={user.ID} />);
    modal.openModal();
  };
  const removePoints = () => {
    modal.assignModal(<RemovePointsModal userID={user.ID} />);
    modal.openModal();
  };


  const blockUnblockuser = async()=>{
    if(!user){
      return

    }
    message.destroy()
    message.loading("Performing action",10000000)
    const userID= user.ID
   const [_,error] =  await blockUserAction(userID)
   message.destroy()

   if(error){
    message.error(error)
    return
   }
message.success(user.blocked?`User ${user.ID} blocked`:`User ${user.ID} unblocked`)
  }

  return (
    <>
    {context}
      <section>
        <h2 className="text-[#0171F3] text-xl md:text-3xl font-bold">Data</h2>
        <p className="text-[#525252] flex items-center ">
          <Link
            href="/admin/app/data"
            className="text-[#0171F3] underline my-2 block mr-2"
          >
            Data
          </Link>{" "}
          / User Details
        </p>

        <section className="flex justify-between flex-col md:flex-row items-center space-y-4">
          <div className="flex items-center space-x-2">
            {" "}
            <UserCircle2 size={50} />{" "}
            <p className="text-[#0171F3]">{user.ID}</p>
          </div>
          <div
            id="userAction_id"
            onMouseLeave={() => {
              setActionDropdownState(false);
            }}
            onMouseEnter={() => {
              setActionDropdownState(true);
            }}
            className=" select-none cursor-pointer border border-[#CCCCCC] flex relative bg-white p-3 rounded-md px-6 items-center"
          >
            {" "}
            <span className="text-[#525252]">User Action</span>{" "}
            <FaEllipsisVertical
              size={30}
              className="text-[#A2A7B4] cursor-pointer"
            />
            <div
              className={`absolute  bg-white ${
                actionDropdownState ? "" : "hidden"
              } w-[200px] top-[100%] rounded-xl right-0 p-4 border border-[#CCCCCC]`}
            >
             <button onClick={blockUnblockuser} className="flex hover:bg-[#efefef] rounded-lg mx-auto w-full p-2 items-center justify-center py-4 space-x-1">
                {user.blocked?<>
                <Check className="text-black" />
                <p>Unblock User</p>
                </>:<><XIcon className="text-black" />
                <p>Block User</p></>}
              </button>
              <button className="text-red-500 rounded-lg hover:border border-red-500 flex items-center justify-center bg-[#FDF2F3] p-2 py-4 mx-auto w-full my-2">
                <Trash />
                <p>Delete User</p>
              </button>
            </div>
          </div>
        </section>
        <section className={admincss.userDetails}>
          <div>
            <h3 className="break-all">ID</h3>
            <p>{user.ID}</p>
          </div>
          <div>
            <h3 className="break-all">Wallet</h3>
            <p className="break-all">{user.wallet_address}</p>
          </div>
          <div>
            <h3>Referrals</h3>
            <p className="break-all">{user.referals.count}</p>
          </div>
          <div>
            <h3>Referral Link</h3>
            <p className="break-all">{url + "?ref=" + user.ID}</p>
          </div>
          <div>
            <h3 className="break-all">Community Badge</h3>
            <p className="break-all">
              {user.community_badge ? "Minted" : "Not Minted"}
            </p>
          </div>
          <div>
            <h3 className="break-all">Warrior Badge</h3>
            <p className="break-all">
              {user.warrior_badge ? "Minted" : "Not Minted"}
            </p>
          </div>
          <div>
            <h3 className="break-all">IP Address</h3>
            <p className="break-all">{user.ip}</p>
          </div>
          <div>
            <h3 className="break-all">Status</h3>
            <p className="break-all">{user.status}</p>
          </div>
          <div>
            <h3 className="break-all">Total Points</h3>
            <div className="flex items-center justify-between w-full flex-col md:flex-row">
              <p>{Number(user.total_points).toLocaleString()} XP</p>
              <div className="flex md:space-x-4 md:space-y-0 space-y-2 flex-col md:flex-row">
                <button
                  onClick={removePoints}
                  className="flex items-center border border-red-500 rounded-lg h-12 px-4"
                >
                  <Minus className="text-red-500 " />
                  <p style={{ color: "red" }}> Remove Points </p>
                </button>
                <button
                  onClick={openModal}
                  className="flex items-center border bg-[#0477EF] rounded-lg h-12 text-white px-4"
                >
                  <Plus />
                  <p style={{ color: "white" }}>Add Points</p>
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Data;
