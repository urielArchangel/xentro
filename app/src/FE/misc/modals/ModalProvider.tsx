'use client'
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import ModalSkeleton from "./ModalSkeleton";

export const ModalContext = createContext({
    modalState:false,
    openModal:()=>{},
    closeModal:()=>{},
    setModal: (a:any)=>{}
});
export const useModal = () => useContext(ModalContext);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalState, setModalState] = useState(false);
  const [modalData,setModalData]=useState<any>()
  const setModal = (a:any)=>{setModalData(a)}

  const openModal = ()=>{
    setModalState(true)
    const inner = document.getElementById("modal-inner-container") as HTMLDivElement;
    inner.classList.replace("modal-close","modal-open")

    
  }

  const closeModal = ()=>{
    const inner = document.getElementById("modal-inner-container") as HTMLDivElement;
    inner.classList.replace("modal-open","modal-close")
setTimeout(() => {
  setModalState(false)
  
}, 400);
    
    
  }

  return (<ModalContext.Provider value={{ closeModal, openModal,modalState,setModal }}><ModalSkeleton modalData={modalData} modalState={modalState} />{children}</ModalContext.Provider>);
};

export default ModalProvider;
