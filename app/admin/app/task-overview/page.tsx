import React from 'react'
import TaskOverview from './TaskOverview'
import { fetchAppData, fetchUsers } from '@/app/src/BE/helpers'

const page = async() => {
  return (
  <section>
    <TaskOverview   />
  </section>
  )
}

export default page