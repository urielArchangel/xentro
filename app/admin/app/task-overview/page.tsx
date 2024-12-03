import React from 'react'
import TaskOverview from './TaskOverview'
import { fetchAppData } from '@/app/src/BE/helpers'
export const dynamic = 'force-dynamic'; 
export const revalidate=0

const page = async() => {
  const app = await fetchAppData()

  return (
  <section>
    <TaskOverview  appString={JSON.stringify(app)} />
  </section>
  )
}

export default page