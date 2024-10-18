"use client";
import { Minus, XIcon } from "lucide-react";
import React, { useContext, useRef } from "react";
import { ModalCTX } from "./ModalContext";
import { message } from "antd";

const RemovePointsModal = () => {
  const modal = useContext(ModalCTX);
  const pointsRef = useRef<HTMLInputElement>(null);
  const removePoints = () => {
    if (!pointsRef || !pointsRef.current) return;
    if (Number(pointsRef.current.value) <= 0) {
      message.destroy();

      message.error("Invalid points amount");
      return;
    }
    message.destroy();
    message.success(pointsRef.current.value + " Points removed", 2);
    modal.closeModal();

   
  };
  return (
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
       <button onClick={removePoints} className="flex float-right items-center border border-red-500 rounded-lg h-12 px-4">
                <Minus className="text-red-500 " />
                <p style={{ color: "red" }}> Remove Points </p>
              </button>
      </div>
    </section>
  );
};

export default RemovePointsModal;
