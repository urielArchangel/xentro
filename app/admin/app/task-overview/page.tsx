import React from 'react'
import TaskOverview from './TaskOverview'
import { fetchAppData, fetchUsers } from '@/app/src/BE/helpers'

const page = async() => {
  const app  = await fetchAppData()
  const users = await fetchUsers()
  return (
  <section>
    <TaskOverview appString={JSON.stringify(app)} usersString={JSON.stringify(users)} />
  </section>
  )
}

export default page