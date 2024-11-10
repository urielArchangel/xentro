'use client'
import { MessageCircleWarningIcon } from 'lucide-react'
import React from 'react'

const error = ({error}:{error:{environmentName:string,digest:string,message:string,stack:string}}) => {
  const reload = ()=>{
    window.location.reload()
  }
  const goBack = ()=>{
    window.history.back()
  }
  const converterror = (error:string)=>{
    if(error.includes("ENOTFOUND") || error.includes( "ETIMEOUT")){
      return "Network error ensure you are connected to the internet"
    }
  }
  return (
    <div className='items-center fixed w-full z-[10000] h-full text-white flex text-xl justify-center  bg-[#330000c8] backdrop-blur-[10px]'>
      
      <div>
        <MessageCircleWarningIcon className='text-red-500 mx-auto text-center'  size={60} />
        {converterror(error.message)}
        <div className='flex flex-col  max-w-[400px] items-center justify-between md:flex-row '><button onClick={goBack } className='bg-red-500 text-white px-6 py-4'>Go back</button>
        <button onClick={reload} className='bg-red-500 text-white px-6 py-4' >Reload</button></div>
        
        </div>
      </div>
  )
}

export default error