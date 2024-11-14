"use client";
import React, { useRef, useState } from "react";
import loginAdmin from "@/app/css/admin.module.css";
import { EyeClosed, EyeIcon } from "lucide-react";
import { _AdminLogin } from "@/app/src/BE/auth/serveractions";
import useMessage from "antd/es/message/useMessage";

const Login = () => {
  const [message, c] = useMessage();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const changePasswordViewState = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const submit = async(e:React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (!emailRef || !emailRef.current) {
      return;
    }
    if (!pwdRef || !pwdRef.current) {
      return;
    }

    message.loading("Logging in... ",4)
    const [res,error] = await _AdminLogin(emailRef.current.value,pwdRef.current.value)

    if(error){
      message.destroy()
      message.error(error,3)
      return
    }
    message.destroy()
    message.success(res,3)

    
  };
  return (<>  {c}  <section className="flex items-center h-[100vh] ">
      <div className="w-full lg:w-[40%] h-full text-black bg-[#F1F6FA] flex items-center">
        <form
          action=""
          className="flex flex-col items-center w-full max-w-[400px] mx-auto space-y-4 lg:items-start lg:max-w-[500px]"
        >
          <h1 className="text-[#0060FF] text-3xl font-extrabold text-center lg:text-4xl">
            Welcome to Xentro
          </h1>
          <p className="font-bold text-xl text-center lg:text-2xl">
            Login to Continue
          </p>
          <div className="flex flex-col items-start w-full ">
            <label
              className="font-bold text-md lg:text-lg lg:mt-4 cursor-pointer"
              htmlFor="loginAdminEmail_id"
            >
              Email Address
            </label>
            <input
            ref={emailRef}
              type="text"
              name=""
              id="loginAdminEmail_id"
              className="border border-[#CCCCCC] h-12 w-full block rounded-md outline-none px-2 lg:h-14"
            />
          </div>
          <div className="flex flex-col items-start w-full">
            <label
              htmlFor="loginAdminPwd_id"
              className="font-bold text-md lg:text-lg cursor-pointer"
            >
              Password
            </label>
            <div className="mb-4 border border-[#CCCCCC] h-12 w-full  rounded-md outline-none px-2  bg-white flex justify-between items-center lg:mb-10 lg:h-14">
              <input
              ref={pwdRef}
                type={isPasswordVisible ? "text" : "password"}
                name=""
                id="loginAdminPwd_id"
                className="outline-none h-full w-full"
              />
              {isPasswordVisible ? (
                <EyeClosed
                  onClick={changePasswordViewState}
                  className="cursor-pointer"
                />
              ) : (
                <EyeIcon
                  onClick={changePasswordViewState}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
          <input
          onClick={submit}
            type="submit"
            value="Log in"
            className="bg-[#0171F3] font-bold text-white w-full max-w-[250px] py-4 rounded-md cursor-pointer block mx-auto"
          />
        </form>
      </div>
      <div className={loginAdmin.xentroBG_login + " w-0  lg:w-[60%] h-full "}>
        <div
          className={
            loginAdmin.xentroFG_login + " h-full  max-w-[700px] mx-auto w-full"
          }
        ></div>
      </div>
    </section></>
  );
};

export default Login;
