import React from 'react'
import Data from './Data'
import { fetchAppData, fetchUsers } from '@/app/src/BE/helpers'

const page =async () => {
  const app  = await fetchAppData()
  const users = await fetchUsers()
  return (
<section>
    <Data appString={JSON.stringify(app)} usersString={JSON.stringify(users)}  />
</section>  )
}

export default page