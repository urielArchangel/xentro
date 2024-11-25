'use client'
import { deleteTaskAction } from '@/app/src/BE/serveractions'
import { useModal } from '@/app/src/FE/misc/modals/ModalProvider';
import useMessage from 'antd/es/message/useMessage';
import React from 'react'

const DeleteTaskModal = ({id}:{id:string}) => {
    const [message, c] = useMessage();
    const { setModal, closeModal } = useModal()

    const deleteTask = async()=>{
        message.loading("Deleting task")
       const [_,error]= await deleteTaskAction(id)
        if(error){
            message.error("Error deleting task")
            setModal(null)
            closeModal()
            return
        }
        message.success("Task deleted successfully")
        setModal(null)
        closeModal()
    }
        const cancel  =()=>{
            setModal(null)
        closeModal() 
        }

  return (
   <>
   {c}
    <section>
        <h1 className='text-center my-4'>Are you sure you want to delete this task?</h1>
        <div className='flex flex-col w-full items-center gap-4 md:justify-between md:flex-row'>
        <button className='bg-blue-500 w-full max-w-[120px] text-white py-3 rounded-[10px]' onClick={deleteTask}>Yes</button>
        <button onClick={cancel} className='bg-red-500 w-full max-w-[120px] text-white py-3 rounded-[10px]'>No</button>
        </div>
    </section>
    </>
  )
}

export default DeleteTaskModal