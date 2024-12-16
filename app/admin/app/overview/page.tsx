import React from 'react'
import Overview from './Overview'
export const dynamic = 'force-dynamic'; 
export const revalidate=0
const page = () => {
  return (
   <div>
    <Overview />
   </div>
  )
}

export default page