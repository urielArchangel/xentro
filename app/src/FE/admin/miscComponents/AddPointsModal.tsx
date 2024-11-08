"use client";
import { Plus, XIcon } from "lucide-react";
import React, { useContext, useRef } from "react";
import { ModalCTX } from "./ModalContext";
import useMessage from "antd/es/message/useMessage";
import { addPointsAction } from "@/app/src/BE/serveractions";

const AddPointsModal = ({userID}:{userID:string}) => {
  const modal = useContext(ModalCTX);
  const [message,ctx] = useMessage()
  const pointsRef = useRef<HTMLInputElement>(null);
  const addPoints = async() => {
    if (!pointsRef || !pointsRef.current) return;
    if (Number(pointsRef.current.value) <= 0 || isNaN(Number(pointsRef.current.value) )) {
      message.destroy();

      message.error("Invalid points amount");
      return;
    }
    message.loading("Adding points..",10000000)
    await addPointsAction(userID,Number(pointsRef.current.value))
    message.destroy();
   await message.success(pointsRef.current.value + " Points added", 3);
    modal.closeModal();
      

   
  };
  return (
    <>
    {ctx}
    <section className="fixed top-0 z-[200] left-0 w-full h-full flex justify-center items-center bg-[#000000aa]">
      <div className="bg-white p-8 w-full max-w-[600px] rounded-3xl">
        <div className="flex justify-end">
          <XIcon
            size={30}
            className="cursor-pointer"
            onClick={() => {
              modal.closeModal();
            }}
          />
        </div>

        <p className="font-semibold">Add Points?</p>
        <p>Please Enter the Points below to add </p>
        <input
          ref={pointsRef}
          type="number"
          className="block w-full px-4 h-10 border border-[#cccccc] my-6 outline-none"
          placeholder="0 points"
        />
        <button
          onClick={addPoints}
          className="float-right flex items-center border bg-[#0477EF] rounded-lg h-12 text-white px-4"
        >
          <Plus />
          <p style={{ color: "white" }}>Add Points</p>
        </button>
      </div>
    </section></>
  );
};

export default AddPointsModal;
