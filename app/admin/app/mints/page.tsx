import React from 'react'
import Mints from './Mints'
export const dynamic = 'force-dynamic'; 
export const revalidate=0
const page = () => {
  
  return (
    <section>
        <Mints />
    </section>
  )
}

export default page