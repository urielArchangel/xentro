import React from 'react'
import xentro from '@/app/images//airdrop/xentroLogoBlue.png'
import Image from 'next/image'

const Loading = () => {
  return (
    <section className='bg-black fixed w-full top-0 z-[10000] left-0 h-full  backdrop-blur-[20px]  flex justify-center items-center'>
<Image src={xentro} alt="xentro" className='loading_logo w-20'  />
    
    </section>
  )
}

export default Loading