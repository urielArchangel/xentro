import React from 'react'
import xentro from '@/app/images/herologo.png'
import Image from 'next/image'

const Loading = () => {
  return (
    <section className='bg-black/70 absolute w-full top-0 z-[10000] left-0 h-full  backdrop-blur-[20px]  flex justify-center items-center'>
<Image src={xentro} alt="xentro" className='loading_logo w-80'  />
    
    </section>
  )
}

export default Loading