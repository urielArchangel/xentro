"use client";
import React, { useRef, useState } from "react";
import loginAdmin from "@/app/css/admin.module.css";
import { _AdminLogin } from "@/app/src/BE/auth/serveractions";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Login = () => {

 
  return (<>
   <section className="flex items-center h-[100vh] ">
      <div className="w-full lg:w-[40%] h-full text-black bg-[#F1F6FA] flex items-center justify-center">
      <ConnectButton />
      </div>
      <div className={loginAdmin.xentroBG_login + " w-0  lg:w-[60%] h-full "}>
        <div
          className={
            loginAdmin.xentroFG_login + " h-full  max-w-[700px] mx-auto w-full"
          }
        ></div>
      </div>
    </section>
    </>
  );
};

export default Login;
