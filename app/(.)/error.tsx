'use client'
import React from 'react'

const error = ({error}:{error:{environmentName:string,digest:string,message:string,stack:string}}) => {
  return (
    <div className='items-center fixed w-full z-[10000] h-full bg-red-500/80 backdrop-blur-[10px]'>{error.message}</div>
  )
}

export default error