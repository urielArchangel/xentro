import React from 'react'
import { BellIcon, UserCircle2 } from 'lucide-react'
import { FaEllipsisVertical } from "react-icons/fa6";


const AdminNav = () => {
  return (
    <section className='bg-white w-full h-[12vh] px-6 border'>
        <div className='flex items-center w-full justify-end space-x-4'>
        <BellIcon className='text-[#0060FF]' size={32} />
        <div className='flex items-center justify-between bg-[#F2F8FF] w-full max-w-[320px] p-4 rounded-3xl' >
            <div className='flex items-center'>
            <UserCircle2 className='bg-[#DA7C7C] text-white rounded-full mx-2' size={40}/>
            <div>
                <p className='font-semibold text-md'>email@email.com</p>
                <p className='text-[#0171F3] font-semibold text-md'>Super Admin</p>
            </div>
            </div>
            <FaEllipsisVertical size={30} className='text-[#A2A7B4] cursor-pointer' />
        </div>
        </div>
    </section>
  )
}

export default AdminNav