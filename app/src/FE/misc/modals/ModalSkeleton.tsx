import React, { ReactNode } from "react";
import CloseButtonModal from "./CloseButtonModal";

const ModalSkeleton = ({ modalData,modalState }: { modalData: ReactNode,modalState:boolean }) => {
  return (
    <div className={`fixed  z-[1000] w-full h-full flex items-center justify-center backdrop-blur-[20px] ${modalState?"flex":"hidden"}`}>
      <section id="modal-inner-container" className="modal-close scale-0 bg-white relative rounded-[15px] max-w-[700px] w-full p-10">
        <CloseButtonModal />
        <div>{modalData}</div>
      </section>
    </div>
  );
};

export default ModalSkeleton;
