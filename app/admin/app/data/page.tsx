import React from 'react'
import Data from './Data'
import { fetchAppData, fetchUsers } from '@/app/src/BE/helpers'
export const dynamic = 'force-dynamic'; 
export const revalidate=0 
const page =async () => {
  const app  = await fetchAppData()
  const users = await fetchUsers()
  return (
<section>
    <Data appString={JSON.stringify(app)} usersString={JSON.stringify(users)}  />
</section>  )
}

export default page