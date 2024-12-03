'use client'
import React, { ReactNode,useEffect } from "react";
import { useAccount } from "wagmi";
import { adminAddresses } from "@/app/src/data/constants";
import { usePathname, useRouter } from "next/navigation";
import useMessage from "antd/es/message/useMessage";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const {address,isConnected} = useAccount()
  const [message,c] = useMessage()
  const pathname = usePathname()
useEffect(()=>{
const run =async()=>{
  if(address && adminAddresses.includes(address)){
  if(pathname.includes("auth")){
    router.push("/admin/app/overview")
    }
  }else{
  if(isConnected){
    message.destroy()
    await message.error("Not admin address")
     }
     setTimeout(()=>{
      router.push("/admin/auth")
     },1000)
  }
}
run()
},[address,pathname])

  return (<>{c}<section>{children}</section></>);
};

export default AdminLayout;
