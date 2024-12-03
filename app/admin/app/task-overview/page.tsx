import React from 'react'
import TaskOverview from './TaskOverview'
import { fetchAppData } from '@/app/src/BE/helpers'

const page = async() => {
  const app = await fetchAppData()
  return (
  <section>
    <TaskOverview  appString={JSON.stringify(app)} />
  </section>
  )
}

export default page