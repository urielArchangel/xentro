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
  return (
    <div className='items-center fixed w-full z-[10000] h-full text-white flex text-xl justify-center  bg-[#330000c8] backdrop-blur-[10px]'>
      
      <div>
        <MessageCircleWarningIcon className='text-red-500 mx-auto'  size={60} />
        {error.message}
        <div className='flex flex-col  max-w-[400px] items-center justify-between md:flex-row '><button onClick={goBack}>Go back</button>
        <button onClick={reload}>Reload</button></div>
        
        </div>
      </div>
  )
}

export default error