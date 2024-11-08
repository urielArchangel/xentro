import React from 'react'
import MintsOverview from './MintsOverview'
import MintsLog from './MintsLog'
import { fetchAppData, fetchUsers } from '@/app/src/BE/helpers'

const Mints =async () => {
  const app  = await fetchAppData()
  const users = await fetchUsers()
  return (
    <section className="text-4xl text-black  ">
      <MintsOverview  />
      <MintsLog appString={JSON.stringify(app)} usersString={JSON.stringify(users)} />
    </section>
  )
}

export default Mints