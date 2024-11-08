'use client'
import { XIcon } from 'lucide-react'
import React from 'react'
import { useModal } from './ModalProvider'

const CloseButtonModal = () => {
    const {closeModal} =useModal()
  return (
    <XIcon className='absolute top-6 right-6 cursor-pointer ' onClick={closeModal} />
    )
}

export default CloseButtonModal