import React, { ReactNode } from 'react'
import airdropcss from '@/app/css/airdrop.module.css'


const layout = ({children}:{children:ReactNode}) => {
  return (
    <section className={airdropcss.body + ' pt-10 h-full px-4'}>
        {children}
    </section>
  )
}

export default layout